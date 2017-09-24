//
//	jballands/jonathanballands.me
//	blogReducer.js
//
//	© 2017 Jonathan Ballands
//

import Immutable from 'immutable';

import { blogPosts } from '~/blog.config.js';
import encodeToUri from 'helpers/encodeToUri';

import { BLOG_SEARCH_POSTS, BLOG_SET_SORT_ORDER } from 'actions/BlogActions';

function reviveBlogConfig() {
	return Immutable.Map(
		blogPosts.reduce((map, post) => {
			const uri = encodeToUri(post.name);
			map[uri] = post;
			return map;
		}, {}),
	);
}

const InitialStateRecord = Immutable.Record({
	searchTerms: '',
	sortOrder: 'later',
	config: reviveBlogConfig(),
	searchResults: reviveBlogConfig(),
});

export default function(state = new InitialStateRecord(), action) {
	switch (action.type) {
		case BLOG_SEARCH_POSTS:
			return state.set('searchTerms', action.terms);
		case BLOG_SET_SORT_ORDER:
			return state.set('sortOrder', action.sortOrder);
		default:
			return state;
	}
}
