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
	LOAN_BURNDOWN_CHOOSE_INPUT_COLUMN,
	LOAN_BURNDOWN_CHOOSE_OUTPUT_COLUMN,
	LOAN_BURNDOWN_EXTRAPOLATE,
} from './actions';
import { validateState, getExtrapolatedData } from './utils';

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
	unloadable: false,
	extrapolate: false,
})();

function extrapolate(state) {
	if (!state.get('inputColumn') || !state.get('outputColumn')) {
		return state;
	}

	return state.setIn(
		['data', 'extrapolated'],
		getExtrapolatedData({
			series: state.getIn(['data', 'original']),
			inputColumn: state.get('inputColumn'),
			outputColumn: state.get('outputColumn'),
		}),
	);
}

// -----------------------------------------------------------------------------

function loanBurndownReducer(state = InitialStateRecord, { type, ...payload }) {
	switch (type) {
		case LOAN_BURNDOWN_LOAD_CSV:
			return state.set('loadingFile', true);
		case LOAN_BURNDOWN_LOAD_CSV_SUCCESS:
			return state
				.set('loadingFile', false)
				.set(
					'data',
					Immutable.Map({
						original: payload.data,
					}),
				)
				.set('columns', payload.columns)
				.set('validInputColumns', payload.validInputColumns)
				.set('validOutputColumns', payload.validOutputColumns)
				.set('ready', true)
				.set(
					'unloadable',
					payload.validInputColumns.size <= 0 ||
						payload.validOutputColumns.size <= 0,
				);
		case LOAN_BURNDOWN_LOAD_CSV_FAILED:
			return state.set('loadingFile', false).set('ready', false);
		case LOAN_BURNDOWN_CHOOSE_INPUT_COLUMN:
			return state
				.set('inputColumn', payload.columnId)
				.update(state => extrapolate(state));
		case LOAN_BURNDOWN_CHOOSE_OUTPUT_COLUMN:
			return state
				.set('outputColumn', payload.columnId)
				.update(state => extrapolate(state));
		case LOAN_BURNDOWN_EXTRAPOLATE:
			return state.set('extrapolate', payload.value);
		// .setIn(
		// 	['data', 'extrapolated'],
		// 	getExtrapolatedData({
		// 		series: state.getIn(['data', 'original']),
		// 		inputColumn: state.get('inputColumn'),
		// 		outputColumn: state.get('outputColumn'),
		// 	}),
		// );
		default:
			return state;
	}
}

storeConfiguration.registerReducer('loanBurndown', (state, action) =>
	validateState(loanBurndownReducer(state, action)),
);
