//
//	jballands/jonathanballands.me
//	GraphUtils.js
//
//	© 2018 Jonathan Ballands
//

import Immutable from 'immutable';

export function dataGroupedByProperty(data) {
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
}
