//
//	jballands/jonathanballands.me
//	LoanBurndown/reducers.js
//
//	© 2018 Jonathan Ballands
//

import Immutable from 'immutable';
import encodeToUri from 'helpers/encodeToUri';
import storeConfiguration from 'helpers/configureStore';
import {
	LOAN_BURNDOWN_LOAD_CSV,
	LOAN_BURNDOWN_LOAD_CSV_FAILED,
	LOAN_BURNDOWN_LOAD_CSV_SUCCESS,
	CHOOSE_INPUT_COLUMN,
	CHOOSE_OUTPUT_COLUMN,
} from './actions';

const hydrateColumns = columns =>
	columns.reduce(
		(m, column) =>
			m.set(
				encodeToUri(column),
				Immutable.Map({
					id: encodeToUri(column),
					displayName: column,
				}),
			),
		Immutable.Map(),
	);

const hydrateData = data =>
	data.map(datum => datum.mapKeys(k => encodeToUri(k)));

const InitialStateRecord = Immutable.Record({
	loadingFile: false,
	data: null,
	columns: null,
	validColumns: null,
	inputColumn: null,
	outputColumn: null,
	ready: false,
})();

function loanBurndownReducer(state = InitialStateRecord, { type, ...payload }) {
	switch (type) {
		case LOAN_BURNDOWN_LOAD_CSV:
			return state.set('loadingFile', true);
		case LOAN_BURNDOWN_LOAD_CSV_SUCCESS:
			return state
				.set('loadingFile', false)
				.set('data', hydrateData(Immutable.fromJS(payload.data)))
				.set(
					'columns',
					hydrateColumns(Immutable.fromJS(payload.columns)),
				)
				.set(
					'validColumns',
					hydrateColumns(Immutable.fromJS(payload.validColumns)),
				)
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

storeConfiguration.registerReducer('loanBurndown', loanBurndownReducer);
