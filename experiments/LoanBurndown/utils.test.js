//
//	jballands/jonathanballands.me
//	utils.test.js
//
//	© 2018 Jonathan Ballands
//

import { Map, List, fromJS } from 'immutable';
import {
	getSlopesForPairs,
	makeDataPointPairs,
	mean,
	normalize,
	slope,
	squash,
	standardDeviation,
	xIntercept,
} from './utils';

const testSeries = List([
	Map({
		a: 0,
		b: 10,
	}),
	Map({
		a: 0,
		b: 20,
	}),
	Map({
		a: 1,
		b: 15,
	}),
	Map({
		a: 3,
		b: 25,
	}),
	Map({
		a: 4,
		b: 10,
	}),
	Map({
		a: 3,
		b: 35,
	}),
]);

const testSquashedSeries = List([
	Map({
		a: 0,
		b: 15,
	}),
	Map({
		a: 1,
		b: 15,
	}),
	Map({
		a: 3,
		b: 30,
	}),
	Map({
		a: 4,
		b: 10,
	}),
]);

const testSeriesPairs = List([
	Map({
		a: Map({
			a: 0,
			b: 10,
		}),
		b: Map({
			a: 0,
			b: 20,
		}),
	}),
	Map({
		a: Map({
			a: 0,
			b: 20,
		}),
		b: Map({
			a: 1,
			b: 15,
		}),
	}),
	Map({
		a: Map({
			a: 1,
			b: 15,
		}),
		b: Map({
			a: 3,
			b: 25,
		}),
	}),
	Map({
		a: Map({
			a: 3,
			b: 25,
		}),
		b: Map({
			a: 4,
			b: 10,
		}),
	}),
	Map({
		a: Map({
			a: 4,
			b: 10,
		}),
		b: Map({
			a: 3,
			b: 35,
		}),
	}),
]);

const testSquashedPairs = List([
	Map({
		a: Map({
			a: 0,
			b: 15,
		}),
		b: Map({
			a: 1,
			b: 15,
		}),
	}),
	Map({
		a: Map({
			a: 1,
			b: 15,
		}),
		b: Map({
			a: 3,
			b: 30,
		}),
	}),
	Map({
		a: Map({
			a: 3,
			b: 30,
		}),
		b: Map({
			a: 4,
			b: 10,
		}),
	}),
]);

describe('LoanBurndown utils', () => {
	describe('slope', () => {
		it('should be able to calculate positive slope', () => {
			expect(slope({ x1: 0, x2: 1, y1: 0, y2: 1 })).toEqual(1);
		});

		it('should be able to calculate negative slope', () => {
			expect(slope({ x1: 0, x2: 1, y1: 1, y2: 0 })).toEqual(-1);
		});

		it('should be able to calculate 0 slope', () => {
			expect(slope({ x1: 0, x2: 1, y1: 0, y2: 0 })).toEqual(0);
		});

		it('should return NaN if slope is infinity', () => {
			expect(slope({ x1: 0, x2: 0, y1: 1, y2: 0 })).toBeNaN();
		});
	});

	describe('mean', () => {
		it('should calculate the mean', () => {
			expect(mean(List([1, 2, 3]))).toEqual(2);
		});

		it('should return the identity if taking the mean of one value', () => {
			expect(mean(List([1]))).toEqual(1);
		});

		it('should return NaN if there are no values', () => {
			expect(mean(List([]))).toBeNaN();
		});
	});

	describe('standardDeviation', () => {
		it('should calculate the standard deviation', () => {
			expect(
				standardDeviation({
					values: List([100, 105, 95, 50, 150]),
					mean: 100,
				}),
			).toBeCloseTo(35.53);
		});

		it('should have no deviation if there is only one number', () => {
			expect(
				standardDeviation({
					values: List([100]),
					mean: 100,
				}),
			).toEqual(0);
		});

		it('should return NaN if there are no values', () => {
			expect(
				standardDeviation({
					values: List(),
					mean: 100,
				}),
			).toBeNaN();
		});

		it('should return NaN if there is no mean', () => {
			expect(
				standardDeviation({
					values: List([100, 105]),
				}),
			).toBeNaN();
		});
	});

	describe('normalize', () => {
		it('should remove outliers greater than one standard deviation away when tolerance is set to 1', () => {
			expect(
				normalize({
					values: List([100, 105, 95, 50, 150]),
					standardDeviation: 35.53,
					mean: 100,
					tolerance: 1,
				}),
			).toEqual(List([100, 105, 95]));
		});

		it('should remove outliers greater than two standard deviations away when tolerance is set to 2', () => {
			expect(
				normalize({
					values: List([100, 105, 95, 50, 150]),
					standardDeviation: 35.53,
					mean: 100,
					tolerance: 2,
				}),
			).toEqual(List([100, 105, 95, 50, 150]));
		});

		it('should return the list if there is only one item', () => {
			expect(
				normalize({
					values: List([100]),
					standardDeviation: 100,
					mean: 100,
					tolerance: 2,
				}),
			).toEqual(List([100]));
		});

		it('should only return exact numbers if the standard deviation is 0', () => {
			expect(
				normalize({
					values: List([100, 101, 99, 100.1]),
					standardDeviation: 0,
					mean: 100,
					tolerance: 2,
				}),
			).toEqual(List([100]));
		});

		it('should return an empty array if the mean is really far from the values in the list', () => {
			expect(
				normalize({
					values: List([200, 201, 79, 121]),
					standardDeviation: 20,
					mean: 100,
					tolerance: 1,
				}),
			).toEqual(List([]));
		});

		it('should just return the list if there is no standard deviation', () => {
			expect(
				normalize({
					values: List([200, 201, 79, 121]),
					mean: 100,
					tolerance: 1,
				}),
			).toEqual(List([200, 201, 79, 121]));
		});

		it('should just return the list if there is no mean', () => {
			expect(
				normalize({
					values: List([200, 201, 79, 121]),
					standardDeviation: 100,
					tolerance: 1,
				}),
			).toEqual(List([200, 201, 79, 121]));
		});
	});

	describe('squash', () => {
		it('should squash values together if they have the same input', () => {
			expect(
				squash({
					series: testSeries,
					inputColumn: 'a',
					outputColumn: 'b',
				}),
			).toEqual(testSquashedSeries);
		});

		it('should return the list if all inputs are unique', () => {
			expect(
				squash({
					series: testSquashedSeries,
					inputColumn: 'a',
					outputColumn: 'b',
				}),
			).toEqual(testSquashedSeries);
		});
	});

	describe('makeDataPointPairs', () => {
		it('should form pairs of data points', () => {
			expect(makeDataPointPairs(testSeries)).toEqual(testSeriesPairs);
		});

		it('should return an empty list if only one item is provided', () => {
			expect(makeDataPointPairs(List([Map({ a: 10, b: 10 })]))).toEqual(
				List(),
			);
		});

		it('should return an empty list if no items are provided', () => {
			expect(makeDataPointPairs(List())).toEqual(List());
		});
	});

	describe('getSlopesForPairs', () => {
		it('should be able to calculate slopes given pairs', () => {
			expect(
				getSlopesForPairs({
					pairs: testSquashedPairs,
					inputColumn: 'a',
					outputColumn: 'b',
				}),
			).toEqual(List([0, 7.5, -20]));
		});

		it('should return an empty list if nothing is provided', () => {
			expect(
				getSlopesForPairs({
					pairs: List(),
					inputColumn: 'a',
					outputColumn: 'b',
				}),
			).toEqual(List());
		});
	});

	describe('xIntercept', () => {
		it('should return the x-intercept given a simple series', () => {
			const series = fromJS([
				{ a: 0, b: 50 },
				{ a: 1, b: 40 },
				{ a: 2, b: 30 },
			]);

			const slopes = fromJS([-10, -10]);

			expect(
				xIntercept({
					series,
					slopes,
					inputColumn: 'a',
					outputColumn: 'b',
				}),
			).toEqual(5);
		});

		it('should return the x-intercept given a complex series', () => {
			const series = fromJS([
				{ a: 3, b: 1043 },
				{ a: 7, b: 961 },
				{ a: 12, b: 907 },
				{ a: 13, b: 839 },
				{ a: 15, b: 795 },
				{ a: 21, b: 603 },
			]);

			const slopes = fromJS([-20.5, -10.8, -68, -22, -32]);

			expect(
				xIntercept({
					series,
					slopes,
					inputColumn: 'a',
					outputColumn: 'b',
				}),
			).toBeCloseTo(40.67);
		});
	});
});
