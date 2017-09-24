//
//	jballands/jonathanballands.me
//	blogReducer.js
//
//	© 2017 Jonathan Ballands
//

import Immutable from 'immutable';

import { BLOG_SEARCH_POSTS } from 'actions/BlogActions';

const InitialStateRecord = Immutable.Record({
	searchTerms: '',
});

export default function(state = new InitialStateRecord(), action) {
	switch (action.type) {
		case BLOG_SEARCH_POSTS:
			return state.set('searchTerms', action.terms);
		default:
			return state;
	}
}
