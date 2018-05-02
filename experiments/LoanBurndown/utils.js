//
//	jballands/jonathanballands.me
//	utils.js
//
//	© 2018 Jonathan Ballands
//

import Immutable from 'immutable';

export function readCSV(file) {
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

export function getValidColumns(data, columns) {
	return data.reduce(
		(validColumns, datum) => {
			datum.forEach((value, property) => {
				if (value.length <= 0 || isNaN(Date.parse(value))) {
					validColumns.validInputColumns = validColumns.validInputColumns.filter(
						c => c.get('id') !== property,
					);
				}
				if (isNaN(value)) {
					validColumns.validOutputColumns = validColumns.validOutputColumns.filter(
						c => c.get('id') !== property,
					);
				}
			});

			return validColumns;
		},
		{
			validInputColumns: columns,
			validOutputColumns: columns,
		},
	);
}

export function validateState(state) {
	state = state.set('problems', Immutable.List());

	// Validate an input is selected
	if (state.get('inputColumn') === null) {
		state = state
			.set('inputColumnValid', false)
			.update('problems', problems =>
				problems.push('Choose a date column using the date menu.'),
			);
	} else {
		state = state.set('inputColumnValid', true);
	}

	// Validate an output is selected
	if (state.get('outputColumn') === null) {
		state = state
			.set('outputColumnValid', false)
			.update('problems', problems =>
				problems.push('Choose a value column using the value menu.'),
			);
	} else {
		state = state.set('outputColumnValid', true);
	}

	return state;
}
