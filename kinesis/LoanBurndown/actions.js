//
//	jballands/jonathanballands.me
//	LoanBurndown/actions.js
//
//	© 2018 Jonathan Ballands
//

export const LOAN_BURNDOWN_LOAD_CSV = 'LOAN_BURNDOWN_LOAD_CSV';
export const LOAN_BURNDOWN_LOAD_CSV_SUCCESS = 'LOAN_BURNDOWN_LOAD_CSV_SUCCESS';
export const LOAN_BURNDOWN_LOAD_CSV_FAILED = 'LOAN_BURNDOWN_LOAD_CSV_FAILED';
export const LOAN_BURNDOWN_CHOOSE_INPUT_COLUMN =
	'LOAN_BURNDOWN_CHOOSE_INPUT_COLUMN';
export const LOAN_BURNDOWN_CHOOSE_OUTPUT_COLUMN =
	'LOAN_BURNDOWN_CHOOSE_OUTPUT_COLUMN';
export const LOAN_BURNDOWN_EXTRAPOLATE = 'LOAN_BURNDOWN_EXTRAPOLATE';

export const loadCSV = file => {
	return {
		type: LOAN_BURNDOWN_LOAD_CSV,
		file,
	};
};

export const chooseInputColumn = columnId => {
	return {
		type: LOAN_BURNDOWN_CHOOSE_INPUT_COLUMN,
		columnId,
	};
};

export const chooseOutputColumn = columnId => {
	return {
		type: LOAN_BURNDOWN_CHOOSE_OUTPUT_COLUMN,
		columnId,
	};
};

export const extrapolate = value => {
	return {
		type: LOAN_BURNDOWN_EXTRAPOLATE,
		value,
	};
};
