//
//	jballands/jonathanballands.me
//	LoanBurndown/reducers.js
//
//	© 2018 Jonathan Ballands
//

import Immutable from 'immutable';
import storeConfiguration from 'helpers/configureStore';
import {
	LOAN_BURNDOWN_LOAD_CSV,
	LOAN_BURNDOWN_LOAD_CSV_FAILED,
	LOAN_BURNDOWN_LOAD_CSV_SUCCESS,
} from './actions';

const InitialStateRecord = Immutable.Record({
	loadingFile: false,
	csv: null,
})();

function loanBurndownReducer(state = InitialStateRecord, { type, ...payload }) {
	switch (type) {
		case LOAN_BURNDOWN_LOAD_CSV:
			return state.set('loadingFile', true);
		case LOAN_BURNDOWN_LOAD_CSV_SUCCESS:
			return state.set('loadingFile', false).set('csv', payload.data);
		case LOAN_BURNDOWN_LOAD_CSV_FAILED:
			return state.set('loadingFile', false);
		default:
			return state;
	}
}

storeConfiguration.registerReducer('loanBurndown', loanBurndownReducer);
