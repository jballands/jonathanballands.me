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

		yield put({
			type: LOAN_BURNDOWN_LOAD_CSV_SUCCESS,
			data,
			columns,
			validInputColumns,
			validOutputColumns,
		});

		if (validInputColumns.size === 1) {
			yield put(chooseInputColumn(validInputColumns.first().get('id')));
		}
		if (validOutputColumns.size === 1) {
			yield put(chooseOutputColumn(validOutputColumns.first().get('id')));
		}
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
