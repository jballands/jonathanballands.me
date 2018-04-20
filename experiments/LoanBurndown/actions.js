//
//	jballands/jonathanballands.me
//	LoanBurndown/actions.js
//
//	© 2018 Jonathan Ballands
//

export const LOAN_BURNDOWN_LOAD_CSV = 'LOAN_BURNDOWN_LOAD_CSV';
export const LOAN_BURNDOWN_LOAD_CSV_SUCCESS = 'LOAN_BURNDOWN_LOAD_CSV_SUCCESS';
export const LOAN_BURNDOWN_LOAD_CSV_FAILED = 'LOAN_BURNDOWN_LOAD_CSV_FAILED';

export const loadCSV = file => {
	return {
		type: LOAN_BURNDOWN_LOAD_CSV,
		file,
	};
};
