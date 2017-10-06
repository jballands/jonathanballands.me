//
//	jballands/jonathanballands.me
//	index.js (Root Saga)
//
//	© 2017 Jonathan Ballands
//

import { all } from 'redux-saga/effects';
import kinesisSaga from 'sagas/kinesisSaga';

export default function* rootSaga() {
	yield all([kinesisSaga()]);
}
