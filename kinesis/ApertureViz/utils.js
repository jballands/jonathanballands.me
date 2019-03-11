//
//	jballands/jonathanballands.me
//	utils.js
//
//	© 2018 Jonathan Ballands
//

export const formatStop = stop =>
	`f/${stop < 10 ? Math.trunc(stop * 10) / 10 : Math.floor(stop)}`;

/**
 * Generates camera stops using the formula `sqrt(2) * S`.
 * @param {number} max The number to quit calculating f-stops at. Defaults to 128.
 * @param {number} s0 The stop that calculates the next stop in the series, s1. Defaults to 1.
 * @param {Array<number>} stops The stops calculated.
 */
export const generateStops = (max = 128, s0 = 1, stops = [1]) => {
	if (s0 > max) {
		return stops;
	}

	const s1 = Math.sqrt(2) * s0;
	return generateStops(max, s1, stops.concat([s1]));
};

export const radiansToDegrees = radians => radians * (180 / Math.PI);

export const STOP_128 = generateStops(128);
