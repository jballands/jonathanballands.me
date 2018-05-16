//
//	jballands/jonathanballands.me
//	utils.js
//
//	© 2018 Jonathan Ballands
//

import Immutable from 'immutable';
// import moment from 'moment';
// import { dataGroupedByProperty } from 'experiments/common/GraphUtils';

//
//	Math
//

const slope = ({ x1, x2, y1, y2 }) => {
	return (y2 - y1) / (x2 - x1);
};

const mean = values => {
	return values.reduce((acc, v) => acc + v, 0) / values.size;
};

const standardDeviation = ({ values, mean }) => {
	const variance =
		values
			.map(v => Math.pow(v - mean), 2)
			.reduce((acc, sd) => sd + acc, 0) / values.size;
	return Math.sqrt(variance);
};

const normalize = ({ values, standardDeviation, mean }) => {
	return values.filter(v => {
		if (v <= mean - 2 * standardDeviation) {
			return false;
		} else if (v >= mean + 2 * standardDeviation) {
			return false;
		}
		return true;
	});
};

//
//	Graphing
//

const makeDataPointPairs = ({ series, inputColumn, outputColumn }) => {
	const seriesWithoutFirst = series.delete(0);
	return seriesWithoutFirst.reduce((groups, dataPoint, index) => {
		return groups.push(
			Immutable.Map({ a: series.get(index), b: dataPoint }),
		);
	}, Immutable.List());
};

const getSlopesForSeries = ({ series, inputColumn, outputColumn }) => {
	return makeDataPointPairs({ series, inputColumn, outputColumn }).map(pair =>
		slope({
			x1: pair.getIn(['a', inputColumn]),
			x2: pair.getIn(['b', inputColumn]),
			y1: pair.getIn(['a', outputColumn]),
			y2: pair.getIn(['b', outputColumn]),
		}),
	);
};

export function getExtrapolatedData({ series, inputColumn, outputColumn }) {
	const slopes = getSlopesForSeries({ series, inputColumn, outputColumn });
	const m = mean(slopes);
	const sd = standardDeviation({ values: slopes, mean: m });
	const normalized = normalize({
		values: slopes,
		mean: m,
		standardDeviation: sd,
	});

	const avgSlope = mean(normalized);
	const latestValue = series.reduce(
		(latest, dp) =>
			dp.get(inputColumn) > latest.get(inputColumn) ? dp : latest,
	);
	const yIntercept =
		-1 * (avgSlope * latestValue.get(inputColumn)) -
		latestValue.get(outputColumn);

	// This right here is the magic number!
	const targetDate = -1 * yIntercept / avgSlope;

	return Immutable.List([
		latestValue,
		Immutable.Map()
			.set(inputColumn, targetDate)
			.set(outputColumn, 0),
	]);
}

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
