//
//	jballands/jonathanballands.me
//	BlogActions.js
//
//	© 2017 Jonathan Ballands
//

export const BLOG_SEARCH_POSTS = 'BLOG_SEARCH_POSTS';

export const BLOG_SET_SORT_ORDER = 'BLOG_SET_SORT_ORDER';

export const BLOG_CHOOSE_ENTRY = 'BLOG_CHOOSE_ENTRY';
export const BLOG_CHOOSE_ENTRY_START_LOADING =
	'BLOG_CHOOSE_ENTRY_START_LOADING';
export const BLOG_CHOOSE_ENTRY_LOADING_SUCCESS =
	'BLOG_CHOOSE_ENTRY_LOADING_SUCCESS';
export const BLOG_CHOOSE_ENTRY_LOADING_FAILED =
	'BLOG_CHOOSE_ENTRY_LOADING_FAILED';

export function searchBlogPosts(terms) {
	return {
		type: BLOG_SEARCH_POSTS,
		terms,
	};
}

export function setSortOrder(sortOrder) {
	return {
		type: BLOG_SET_SORT_ORDER,
		sortOrder,
	};
}

export function chooseEntry(id) {
	return {
		type: BLOG_CHOOSE_ENTRY,
		id,
	};
}
