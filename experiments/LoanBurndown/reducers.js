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
import { validateState, getSeriesCalculations, squash } from './utils';

const InitialStateRecord = Immutable.Record({
	loadingFile: false,
	data: null,
	graphingData: null,
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

const extrapolateAndSort = state => {
	const inputColumn = state.get('inputColumn');
	const outputColumn = state.get('outputColumn');

	if (!inputColumn || !outputColumn) {
		return state;
	}

	const { extrapolated, averageRatePerMillisecond } = getSeriesCalculations({
		series: state.get('data'),
		inputColumn,
		outputColumn,
	});

	return state.update('graphingData', (graphingData = Immutable.Map()) => {
		return graphingData
			.set('extrapolated', extrapolated)
			.set('averageRatePerMillisecond', averageRatePerMillisecond)
			.set(
				'original',
				squash({
					series: state.get('data'),
					inputColumn,
					outputColumn,
				}).sort((a, b) => a.get(inputColumn) - b.get(inputColumn)),
			);
	});
};

// -----------------------------------------------------------------------------

function loanBurndownReducer(state = InitialStateRecord, { type, ...payload }) {
	switch (type) {
		case LOAN_BURNDOWN_LOAD_CSV:
			return state.set('loadingFile', true);
		case LOAN_BURNDOWN_LOAD_CSV_SUCCESS:
			return state
				.set('loadingFile', false)
				.set('data', payload.data)
				.set('graphingData', Immutable.Map())
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
				.update(state => extrapolateAndSort(state));
		case LOAN_BURNDOWN_CHOOSE_OUTPUT_COLUMN:
			return state
				.set('outputColumn', payload.columnId)
				.update(state => extrapolateAndSort(state));
		case LOAN_BURNDOWN_EXTRAPOLATE:
			return state.set('extrapolate', payload.value);
		default:
			return state;
	}
}

storeConfiguration.registerReducer('loanBurndown', (state, action) =>
	validateState(loanBurndownReducer(state, action)),
);
