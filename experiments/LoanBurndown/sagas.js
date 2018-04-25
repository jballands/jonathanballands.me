//
//	jballands/jonathanballands.me
//	LoanBurndown/sagas.js
//
//	© 2018 Jonathan Ballands
//

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { csvParse } from 'd3-dsv';
import _omit from 'lodash.omit';
import _values from 'lodash.values';
import storeConfiguration from 'helpers/configureStore';
import {
	LOAN_BURNDOWN_LOAD_CSV,
	LOAN_BURNDOWN_LOAD_CSV_FAILED,
	LOAN_BURNDOWN_LOAD_CSV_SUCCESS,
} from './actions';

function readCSV(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onload = e => {
			resolve(event.target.result);
		};
		reader.onerror = e => {
			reject(e);
		};

		reader.readAsText(file, 'utf-8');
	});
}

function* loadCSV({ file }) {
	try {
		const csv = yield call(readCSV, file);
		const parsed = csvParse(csv);
		const data = _omit(parsed, ['columns']);
		const columns = parsed.columns;

		const validColumns = columns.filter(column => {
			// We use a for-loop here so we can bail on a data point early if
			// we know it isn't valid
			for (let row of _values(data)) {
				const dp = row[column];
				if (dp.length <= 0 || (isNaN(dp) && isNaN(Date.parse(dp)))) {
					return false;
				}
			}
			return true;
		});

		yield put({
			type: LOAN_BURNDOWN_LOAD_CSV_SUCCESS,
			data,
			columns,
			validColumns,
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
