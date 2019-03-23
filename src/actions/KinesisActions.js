//
//	jballands/jonathanballands.me
// 	KinesisActions.js
//
//	© 2017 Jonathan Ballands
//

export const KINESIS_SEARCH_POSTS = 'KINESIS_SEARCH_POSTS';

export const KINESIS_SET_SORT_ORDER = 'KINESIS_SET_SORT_ORDER';

export const KINESIS_SELECT_ENTRY = 'KINESIS_SELECT_ENTRY';

export function searchKinesisPosts(terms) {
	return {
		type: KINESIS_SEARCH_POSTS,
		payload: { terms },
	};
}

export function setSortOrder(sortOrder) {
	return {
		type: KINESIS_SET_SORT_ORDER,
		payload: { sortOrder },
	};
}

export function selectEntry(id) {
	return {
		type: KINESIS_SELECT_ENTRY,
		payload: { id },
	};
}
