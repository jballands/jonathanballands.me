//
//	jballands/jonathanballands.me
// 	KinesisActions.js
//
//	© 2017 Jonathan Ballands
//

export const KINESIS_SEARCH_POSTS = 'KINESIS_SEARCH_POSTS';

export const KINESIS_SET_SORT_ORDER = 'KINESIS_SET_SORT_ORDER';

export const KINESIS_CHOOSE_ENTRY = 'KINESIS_CHOOSE_ENTRY';
export const KINESIS_CHOOSE_ENTRY_START_LOADING =
	'KINESIS_CHOOSE_ENTRY_START_LOADING';
export const KINESIS_CHOOSE_ENTRY_LOADING_SUCCESS =
	'KINESIS_CHOOSE_ENTRY_LOADING_SUCCESS';
export const KINESIS_CHOOSE_ENTRY_LOADING_FAILURE =
	'KINESIS_CHOOSE_ENTRY_LOADING_FAILURE';

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

export function chooseEntry(id) {
	return {
		type: KINESIS_CHOOSE_ENTRY,
		id,
	};
}
