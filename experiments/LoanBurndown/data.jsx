import Immutable from 'immutable';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import storeConfiguration from 'helpers/configureStore';

//
//	Actions
//

const LOAN_BURNDOWN_LOAD_CSV = 'LOAN_BURNDOWN_LOAD_CSV';
const LOAN_BURNDOWN_LOAD_CSV_SUCCESS = 'LOAN_BURNDOWN_LOAD_CSV_SUCCESS';
const LOAN_BURNDOWN_LOAD_CSV_FAILED = 'LOAN_BURNDOWN_LOAD_CSV_FAILED';

export const loadCSV = file => {
	return {
		type: LOAN_BURNDOWN_LOAD_CSV,
		file,
	};
};

//
//	Sagas
//

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

//
//	Reducer
//

const InitialStateRecord = Immutable.Record({
	loadingFile: false,
	csv: null,
});

function loanBurndownReducer(state = InitialStateRecord, { type, ...payload }) {
	switch (type) {
		case LOAN_BURNDOWN_LOAD_CSV:
			return state.set('loadingFile', true);
		case LOAN_BURNDOWN_LOAD_CSV_SUCCESS:
		case LOAN_BURNDOWN_LOAD_CSV_FAILED:
			return state.set('loadingFile', false);
		default:
			return state;
	}
}

storeConfiguration.registerReducer('loanBurndown', loanBurndownReducer);
