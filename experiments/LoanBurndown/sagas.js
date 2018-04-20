//
//	jballands/jonathanballands.me
//	LoanBurndown/sagas.js
//
//	© 2018 Jonathan Ballands
//

import { all, call, put, takeLatest } from 'redux-saga/effects';
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
		const data = yield call(readCSV, file);
		yield put({
			type: LOAN_BURNDOWN_LOAD_CSV_SUCCESS,
			data,
		});
	} catch (e) {
		yield put({
			type: LOAN_BURNDOWN_LOAD_CSV_FAILED,
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
