//
//	jballands/jonathanballands.me
//	blogSaga.jsx
//
//	© 2017 Jonathan Ballands
//

import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
	BLOG_CHOOSE_ENTRY,
	BLOG_CHOOSE_ENTRY_START_LOADING,
	BLOG_CHOOSE_ENTRY_LOADING_SUCCESS,
	BLOG_CHOOSE_ENTRY_LOADING_FAILURE,
} from 'actions/BlogActions';
import blogEntries from 'helpers/blogEntries';

function fetchBlogEntry(endpoint) {
	return axios.get(endpoint);
}

function* loadBlogEntry(action) {
	yield put({ type: BLOG_CHOOSE_ENTRY_START_LOADING });

	const endpoint = blogEntries.get(action.id).endpoint;
	try {
		const { data, status } = yield call(fetchBlogEntry, endpoint);

		if (status === 200) {
			return yield put({ type: BLOG_CHOOSE_ENTRY_LOADING_SUCCESS, data });
		}
		yield put({
			type: BLOG_CHOOSE_ENTRY_LOADING_FAILURE,
			error: "Couldn'nt fetch the blog post",
		});
	} catch (e) {
		yield put({
			type: BLOG_CHOOSE_ENTRY_LOADING_FAILURE,
			error: "Couldn'nt fetch the blog post",
		});
	}
}

function* loadBlogEntrySaga() {
	yield takeLatest(BLOG_CHOOSE_ENTRY, loadBlogEntry);
}

export default function* blogSaga() {
	yield all([loadBlogEntrySaga()]);
}
