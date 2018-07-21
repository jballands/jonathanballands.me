//
//	jballands/jonathanballands.me
//	kinesisReducer.js
//
//	© 2017 Jonathan Ballands
//

import Immutable from 'immutable';
import moment from 'moment';
import matchSorter from 'match-sorter';

import {
	KINESIS_SEARCH_POSTS,
	KINESIS_SET_SORT_ORDER,
	KINESIS_CHOOSE_ENTRY,
	KINESIS_CHOOSE_ENTRY_START_LOADING,
	KINESIS_CHOOSE_ENTRY_LOADING_SUCCESS,
	KINESIS_CHOOSE_ENTRY_LOADING_FAILURE,
} from 'actions/KinesisActions';

import entries from 'helpers/kinesisEntries';

let sortedEntries = sortKinesisEntries('later', entries);

const InitialStateRecord = Immutable.Record({
	searchTerms: '',
	sortOrder: 'later',
	filteredEntries: sortedEntries,
	selectedEntry: sortedEntries.valueSeq().get(0),
	content: null,
	contentLoading: true,
	error: null,
});

function sortKinesisEntries(sortOrder, entries) {
	return entries.toOrderedMap().sort((a, b) => {
		if (sortOrder === 'later') {
			return moment(a.date).isBefore(b.date) ? 1 : -1;
		}
		return moment(a.date).isAfter(b.date) ? 1 : -1;
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
	action,
) {
	switch (action.type) {
		case KINESIS_SEARCH_POSTS:
			return state
				.set('searchTerms', action.terms)
				.set(
					'filteredEntries',
					filterKinesisEntries(action.terms, sortedEntries),
				);
		case KINESIS_SET_SORT_ORDER:
			sortedEntries = sortKinesisEntries(action.sortOrder, entries);
			console.log(sortedEntries);

			return state
				.set('sortOrder', action.sortOrder)
				.set(
					'filteredEntries',
					filterKinesisEntries(state.searchTerms, sortedEntries),
				);
		case KINESIS_CHOOSE_ENTRY:
			return state.set('selectedEntry', entries.get(action.id));
		case KINESIS_CHOOSE_ENTRY_START_LOADING:
			return state.set('contentLoading', true).set('error', null);
		case KINESIS_CHOOSE_ENTRY_LOADING_SUCCESS:
			return state
				.set('content', action.data)
				.set('contentLoading', false);
		case KINESIS_CHOOSE_ENTRY_LOADING_FAILURE:
			return state
				.set('error', action.error)
				.set('contentLoading', false);
		default:
			return state;
	}
}
