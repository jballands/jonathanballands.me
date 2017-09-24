//
//	jballands/jonathanballands.me
//	BlogActions.js
//
//	© 2017 Jonathan Ballands
//

export const BLOG_SEARCH_POSTS = 'BLOG_SEARCH_POSTS';

export function searchBlogPosts(terms) {
	return {
		type: BLOG_SEARCH_POSTS,
		terms,
	};
}
