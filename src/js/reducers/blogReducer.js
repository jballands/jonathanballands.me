//
//	jballands/jonathanballands.me
//	blogReducer.js
//
//	© 2017 Jonathan Ballands
//

import Immutable from 'immutable';
import moment from 'moment';
import _lowerCase from 'lodash.lowercase';

import {
	BLOG_SEARCH_POSTS,
	BLOG_SET_SORT_ORDER,
	BLOG_CHOOSE_ENTRY,
} from 'actions/BlogActions';

import encodeToUri from 'helpers/encodeToUri';

import blogEntries from '~/blog.config.js';

let sortedEntries = sortBlogEntries('later', blogEntries);
const InitialStateRecord = Immutable.Record({
	searchTerms: '',
	sortOrder: 'later',
	filteredEntries: sortedEntries,
	selectedEntry: null,
});

function sortBlogEntries(sortOrder, entries) {
	return Immutable.OrderedMap(
		entries
			.sort((a, b) => {
				if (sortOrder === 'later') {
					return moment(a.date).isBefore(b.date);
				}
				return moment(a.date).isAfter(b.date);
			})
			.reduce((map, post) => {
				const id = encodeToUri(post.name);
				map[id] = post;
				map[id].id = id;
				return map;
			}, {}),
	);
}

function filterBlogEntries(terms, entries) {
	const lowerCaseTerms = _lowerCase(terms);

	if (terms === '') {
		return entries;
	}

	return entries.filter(post => {
		return (
			_lowerCase(post.name).indexOf(lowerCaseTerms) > -1 ||
			_lowerCase(post.hashtags.join(' ')).indexOf(lowerCaseTerms) > -1
		);
	});
}

export default function(state = new InitialStateRecord(), action) {
	switch (action.type) {
		case BLOG_SEARCH_POSTS:
			return state
				.set('searchTerms', action.terms)
				.set(
					'filteredEntries',
					filterBlogEntries(action.terms, sortedEntries),
				);
		case BLOG_SET_SORT_ORDER:
			sortedEntries = sortBlogEntries(action.sortOrder, blogEntries);

			return state
				.set('sortOrder', action.sortOrder)
				.set(
					'filteredEntries',
					filterBlogEntries(state.searchTerms, sortedEntries),
				);
		case BLOG_CHOOSE_ENTRY:
			return state.set('selectedEntry', sortedEntries.get(action.uri));
		default:
			return state;
	}
}
