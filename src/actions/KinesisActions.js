//
//	jballands/jonathanballands.me
// 	KinesisActions.js
//
//	© 2017 Jonathan Ballands
//

export const KINESIS_SEARCH_POSTS = 'KINESIS_SEARCH_POSTS';

export const KINESIS_SET_SORT_ORDER = 'KINESIS_SET_SORT_ORDER';

export function searchKinesisPosts(terms) {
	return {
		type: KINESIS_SEARCH_POSTS,
		terms,
	};
}

export function setSortOrder(sortOrder) {
	return {
		type: KINESIS_SET_SORT_ORDER,
		sortOrder,
	};
}
