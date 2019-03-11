//
//	jballands/jonathanballands.me
//	LoanBurndown/sagas.js
//
//	© 2018 Jonathan Ballands
//

import { all, call, put, takeLatest } from 'redux-saga/effects';
import Immutable from 'immutable';
import { csvParse } from 'd3-dsv';
import storeConfiguration from 'helpers/configureStore';
import encodeToUri from 'helpers/encodeToUri';
import {
	LOAN_BURNDOWN_LOAD_CSV,
	LOAN_BURNDOWN_LOAD_CSV_FAILED,
	LOAN_BURNDOWN_LOAD_CSV_SUCCESS,
	chooseInputColumn,
	chooseOutputColumn,
} from './actions';
import { readCSV, getValidColumns } from './utils';

function* loadCSV({ file }) {
	try {
		const csv = yield call(readCSV, file);
		const parsed = csvParse(csv);
		const data = Immutable.fromJS(parsed).map(datum =>
			datum.mapKeys(k => encodeToUri(k)),
		);
		const columns = Immutable.List(parsed.columns).reduce(
			(columnMap, column) =>
				columnMap.set(
					encodeToUri(column),
					Immutable.Map({
						id: encodeToUri(column),
						displayName: column,
					}),
				),
			Immutable.Map(),
		);

		const { validInputColumns, validOutputColumns } = getValidColumns(
			data,
			columns,
		);

		if (validInputColumns.size === 1) {
			yield put(chooseInputColumn(validInputColumns.first().get('id')));
		}
		if (validOutputColumns.size === 1) {
			yield put(chooseOutputColumn(validOutputColumns.first().get('id')));
		}

		yield put({
			type: LOAN_BURNDOWN_LOAD_CSV_SUCCESS,
			data: data.map(datum => {
				// Only valid input columns are dates
				validInputColumns.forEach(
					inputColumn =>
						(datum = datum.update(inputColumn.get('id'), v =>
							new Date(v).getTime(),
						)),
				);
				return datum;
			}),
			columns,
			validInputColumns,
			validOutputColumns,
		});
	} catch (e) {
		yield put({
			type: LOAN_BURNDOWN_LOAD_CSV_FAILED,
			message: e.message,
		});
	}
}

function* loadCSVSaga() {
	yield takeLatest(LOAN_BURNDOWN_LOAD_CSV, loadCSV);
}

function* rootLoanBurndownSaga() {
	yield all([loadCSVSaga()]);
}

storeConfiguration.registerSaga(rootLoanBurndownSaga);
