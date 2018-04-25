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
	data: null,
	columns: null,
	validColumns: null,
	domain: null,
	range: null,
	ready: false,
})();

function loanBurndownReducer(state = InitialStateRecord, { type, ...payload }) {
	switch (type) {
		case LOAN_BURNDOWN_LOAD_CSV:
			return state.set('loadingFile', true);
		case LOAN_BURNDOWN_LOAD_CSV_SUCCESS:
			return state
				.set('loadingFile', false)
				.set('data', Immutable.fromJS(payload.data))
				.set('columns', Immutable.fromJS(payload.columns))
				.set('validColumns', Immutable.fromJS(payload.validColumns))
				.set('ready', true);
		case LOAN_BURNDOWN_LOAD_CSV_FAILED:
			return state.set('loadingFile', false).set('ready', false);
		default:
			return state;
	}
}

storeConfiguration.registerReducer('loanBurndown', loanBurndownReducer);
