//
//	jballands/jonathanballands.me
//	BlogActions.js
//
//	© 2017 Jonathan Ballands
//

export const BLOG_SEARCH_POSTS = 'BLOG_SEARCH_POSTS';
export const BLOG_SET_SORT_ORDER = 'BLOG_SET_SORT_ORDER';

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
