//
//	jballands/jonathanballands.me
//	utils.js
//
//	© 2018 Jonathan Ballands
//

import Immutable from 'immutable';

//
//	Math
//

export const slope = ({ x1, x2, y1, y2 }) => {
	if (x1 === x2) {
		return NaN;
	}
	return (y2 - y1) / (x2 - x1);
};

export const mean = values => {
	if (values.size <= 0) {
		return NaN;
	}
	return values.reduce((acc, v) => acc + v, 0) / values.size;
};

export const standardDeviation = ({ values, mean }) => {
	if (values.size <= 0 || !mean) {
		return NaN;
	}

	if (values.size === 1) {
		return 0;
	}

	const variance =
		values
			.map(v => Math.pow(v - mean, 2))
			.reduce((acc, sd) => sd + acc, 0) /
		(values.size - 1);
	return Math.sqrt(variance);
};

export const normalize = ({
	values,
	standardDeviation,
	mean,
	tolerance = 2,
}) => {
	if (
		(!standardDeviation && standardDeviation !== 0) ||
		(!mean && mean !== 0)
	) {
		return values;
	}

	return values.filter(v => {
		if (v < mean - tolerance * standardDeviation) {
			return false;
		} else if (v > mean + tolerance * standardDeviation) {
			return false;
		}
		return true;
	});
};

//
//	Graphing
//

export const dataGroupedByProperty = data => {
	return data.reduce(
		(groupedByProperty, dataPoint) =>
			dataPoint
				.delete('series')
				.reduce(
					(groupedByProperty, val, key) =>
						groupedByProperty.update(
							key,
							(list = Immutable.List()) => list.push(val),
						),
					groupedByProperty,
				),
		Immutable.Map(),
	);
};

export const squash = ({ series, inputColumn, outputColumn }) => {
	return series
		.reduce(
			(dataByInputColumn, dp) =>
				dataByInputColumn.update(
					dp.get(inputColumn),
					Immutable.List(),
					list => list.push(dp.get(outputColumn)),
				),
			Immutable.Map(),
		)
		.reduce((squashedSeries, data, input) => {
			return squashedSeries.push(
				Immutable.Map()
					.set(inputColumn, input)
					.set(
						outputColumn,
						data.reduce((sum, d) => sum + parseFloat(d), 0) /
							data.size,
					),
			);
		}, Immutable.List());
};

export const makeDataPointPairs = (series = Immutable.List()) => {
	const seriesWithoutFirst = series.delete(0);
	return seriesWithoutFirst.reduce((groups, dataPoint, index) => {
		return groups.push(
			Immutable.Map({ a: series.get(index), b: dataPoint }),
		);
	}, Immutable.List());
};

export const getSlopesForPairs = ({
	pairs = Immutable.List(),
	inputColumn,
	outputColumn,
}) => {
	return pairs.map(pair =>
		slope({
			x1: pair.getIn(['a', inputColumn]),
			x2: pair.getIn(['b', inputColumn]),
			y1: pair.getIn(['a', outputColumn]),
			y2: pair.getIn(['b', outputColumn]),
		}),
	);
};

export const xIntercept = ({
	series = Immutable.List(),
	slopes = Immutable.List(),
	inputColumn,
	outputColumn,
}) => {
	const avgSlope = mean(slopes);

	const latestValue = series.reduce((latest, dp) =>
		dp.get(inputColumn) > latest.get(inputColumn) ? dp : latest,
	);

	// This right here is the magic number!
	return (
		(-1 * latestValue.get(outputColumn)) / avgSlope +
		latestValue.get(inputColumn)
	);
};

export const getSeriesCalculations = ({
	series,
	inputColumn,
	outputColumn,
}) => {
	if (!inputColumn || !outputColumn) {
		return Immutable.List();
	}

	const squashedSeries = squash({ series, inputColumn, outputColumn });
	const pairs = makeDataPointPairs(squashedSeries);
	const slopes = getSlopesForPairs({
		pairs,
		inputColumn,
		outputColumn,
	});
	const m = mean(slopes);
	const sd = standardDeviation({ values: slopes, mean: m });
	const normalized = normalize({
		values: slopes,
		mean: m,
		standardDeviation: sd,
	});

	const latestValue = squashedSeries.reduce((latest, dp) =>
		dp.get(inputColumn) > latest.get(inputColumn) ? dp : latest,
	);
	const targetDate = xIntercept({
		series: squashedSeries,
		slopes: normalized,
		inputColumn,
		outputColumn,
	});

	return {
		averageRatePerMillisecond: mean(normalized),
		extrapolated: Immutable.List([
			latestValue,
			Immutable.Map()
				.set(inputColumn, Math.floor(targetDate))
				.set(outputColumn, 0),
		]),
	};
};

export const readCSV = file => {
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
};

export const getValidColumns = (data, columns) => {
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
};

export const validateState = state => {
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
				problems.push(
					'Choose a balance column using the balance menu.',
				),
			);
	} else {
		state = state.set('outputColumnValid', true);
	}

	return state;
};
