//
//	jballands/jonathanballands.me
//	LoanBurndown/actions.js
//
//	© 2018 Jonathan Ballands
//

export const LOAN_BURNDOWN_LOAD_CSV = 'LOAN_BURNDOWN_LOAD_CSV';
export const LOAN_BURNDOWN_LOAD_CSV_SUCCESS = 'LOAN_BURNDOWN_LOAD_CSV_SUCCESS';
export const LOAN_BURNDOWN_LOAD_CSV_FAILED = 'LOAN_BURNDOWN_LOAD_CSV_FAILED';
export const CHOOSE_INPUT_COLUMN = 'CHOOSE_INPUT_COLUMN';
export const CHOOSE_OUTPUT_COLUMN = 'CHOOSE_OUTPUT_COLUMN';

export const loadCSV = file => {
	return {
		type: LOAN_BURNDOWN_LOAD_CSV,
		file,
	};
};

export const chooseInputColumn = columnId => {
	return {
		type: CHOOSE_INPUT_COLUMN,
		columnId,
	};
};

export const chooseOutputColumn = columnId => {
	return {
		type: CHOOSE_OUTPUT_COLUMN,
		columnId,
	};
};
