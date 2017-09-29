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
	BLOG_CHOOSE_ENTRY_START_LOADING,
	BLOG_CHOOSE_ENTRY_LOADING_SUCCESS,
	BLOG_CHOOSE_ENTRY_LOADING_FAILURE,
} from 'actions/BlogActions';

import blogEntries from 'helpers/blogEntries';

let sortedEntries = sortBlogEntries('later', blogEntries);
const InitialStateRecord = Immutable.Record({
	searchTerms: '',
	sortOrder: 'later',
	filteredEntries: sortedEntries,
	selectedEntry: null,
	content: null,
	contentLoading: true,
	error: null,
});

function sortBlogEntries(sortOrder, entries) {
	return entries.toOrderedMap().sort((a, b) => {
		if (sortOrder === 'later') {
			return moment(a.date).isBefore(b.date);
		}
		return moment(a.date).isAfter(b.date);
	});
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

export const entries = sortBlogEntries;

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
			return state.set('selectedEntry', blogEntries.get(action.id));
		case BLOG_CHOOSE_ENTRY_START_LOADING:
			return state.set('contentLoading', true).set('error', null);
		case BLOG_CHOOSE_ENTRY_LOADING_SUCCESS:
			return state
				.set('content', action.data)
				.set('contentLoading', false);
		case BLOG_CHOOSE_ENTRY_LOADING_FAILURE:
			return state
				.set('error', action.error)
				.set('contentLoading', false);
		default:
			return state;
	}
}
