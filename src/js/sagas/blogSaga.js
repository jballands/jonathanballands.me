//
//	jballands/jonathanballands.me
//	blogSaga.jsx
//
//	© 2017 Jonathan Ballands
//

import axios from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';

import {
	BLOG_CHOOSE_ENTRY,
	BLOG_CHOOSE_ENTRY_START_LOADING,
	BLOG_CHOOSE_ENTRY_LOADING_SUCCESS,
	BLOG_CHOOSE_ENTRY_LOADING_FAILURE,
} from 'actions/BlogActions';

function* loadBlogEntry(action) {
	yield put({ type: BLOG_CHOOSE_ENTRY_START_LOADING });
	console.log(action.id);
}

function* loadBlogEntrySaga() {
	yield takeLatest(BLOG_CHOOSE_ENTRY, loadBlogEntry);
}

export default function* blogSaga() {
	yield all([loadBlogEntrySaga()]);
}
