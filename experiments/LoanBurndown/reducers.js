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
	CHOOSE_INPUT_COLUMN,
	CHOOSE_OUTPUT_COLUMN,
} from './actions';
import { validateState } from './utils';

const InitialStateRecord = Immutable.Record({
	loadingFile: false,
	data: null,
	columns: null,
	validInputColumns: null,
	validOutputColumns: null,
	inputColumn: null,
	inputColumnValid: false,
	outputColumn: null,
	outputColumnValid: false,
	problems: Immutable.List(),
	ready: false,
})();

// -----------------------------------------------------------------------------

function loanBurndownReducer(state = InitialStateRecord, { type, ...payload }) {
	switch (type) {
		case LOAN_BURNDOWN_LOAD_CSV:
			return state.set('loadingFile', true);
		case LOAN_BURNDOWN_LOAD_CSV_SUCCESS:
			return state
				.set('loadingFile', false)
				.set('data', payload.data)
				.set('columns', payload.columns)
				.set('validInputColumns', payload.validInputColumns)
				.set('validOutputColumns', payload.validOutputColumns)
				.set('ready', true);
		case LOAN_BURNDOWN_LOAD_CSV_FAILED:
			return state.set('loadingFile', false).set('ready', false);
		case CHOOSE_INPUT_COLUMN:
			return state.set('inputColumn', payload.columnId);
		case CHOOSE_OUTPUT_COLUMN:
			return state.set('outputColumn', payload.columnId);
		default:
			return state;
	}
}

storeConfiguration.registerReducer('loanBurndown', (state, action) =>
	validateState(loanBurndownReducer(state, action)),
);
