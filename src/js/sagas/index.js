//
//	jballands/jonathanballands.me
//	index.js (Root Saga)
//
//	© 2017 Jonathan Ballands
//

import { all } from 'redux-saga/effects';
import blogSaga from 'sagas/blogSaga';

export default function* rootSaga() {
	yield all([blogSaga()]);
}
