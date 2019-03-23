//
//	jballands/jonathanballands.me
//	kinesisReducer.js
//
//	© 2019 Jonathan Ballands
//

import Immutable from 'immutable';
import { DateTime } from 'luxon';
import matchSorter from 'match-sorter';

import {
	KINESIS_SEARCH_POSTS,
	KINESIS_SET_SORT_ORDER,
	KINESIS_SELECT_ENTRY,
} from 'actions/KinesisActions';

import entries from 'helpers/kinesisEntries';

const InitialStateRecord = Immutable.Record({
	searchTerms: '',
	sortOrder: 'later',
	filteredEntries: sortKinesisEntries('later', entries),
	selectedEntry: null,
});

function sortKinesisEntries(sortOrder, entries) {
	return entries.sort((a, b) => {
		if (sortOrder === 'later') {
			return DateTime.fromJSDate(b.date) - DateTime.fromJSDate(a.date);
		}
		return DateTime.fromJSDate(a.date) - DateTime.fromJSDate(b.date);
	});
}

function filterKinesisEntries(terms, entries) {
	return Immutable.fromJS(
		matchSorter(entries, terms, {
			keys: [
				entry => entry.get('name'),
				entry => entry.get('date').toString(),
				entry =>
					entry
						.get('hashtags')
						.map(hashtag => `#${hashtag.displayName}`),
			],
		}),
	);
}

export default function kinesisReducer(
	state = new InitialStateRecord(),
	{ type, payload },
) {
	switch (type) {
		case KINESIS_SEARCH_POSTS:
			return state
				.set('searchTerms', payload.terms)
				.update('filteredEntries', () => {
					const filtered = filterKinesisEntries(
						payload.terms,
						entries,
					);
					return sortKinesisEntries(state.sortOrder, filtered);
				});
		case KINESIS_SET_SORT_ORDER:
			return state
				.set('sortOrder', payload.sortOrder)
				.update('filteredEntries', () => {
					const filtered = filterKinesisEntries(
						state.searchTerms,
						entries,
					);
					return sortKinesisEntries(payload.sortOrder, filtered);
				});
		case KINESIS_SELECT_ENTRY:
			return state.set('selectedEntry', payload.id);
		default:
			return state;
	}
}
