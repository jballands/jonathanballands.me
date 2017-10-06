//
//	jballands/jonathanballands.me
//	kinesisSaga.js
//
//	© 2017 Jonathan Ballands
//

import axios from 'axios';
import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
	KINESIS_CHOOSE_ENTRY,
	KINESIS_CHOOSE_ENTRY_START_LOADING,
	KINESIS_CHOOSE_ENTRY_LOADING_SUCCESS,
	KINESIS_CHOOSE_ENTRY_LOADING_FAILURE,
} from 'actions/KinesisActions';
import entries from 'helpers/kinesisEntries';

function fetchKinesisEntry(endpoint) {
	return axios.get(endpoint);
}

function* loadKinesisEntry(action) {
	yield put({ type: KINESIS_CHOOSE_ENTRY_START_LOADING });

	const resource = entries.get(action.id).resource;
	try {
		const { data, status } = yield call(fetchKinesisEntry, resource);

		yield delay(2500);

		if (status === 200) {
			return yield put({
				type: KINESIS_CHOOSE_ENTRY_LOADING_SUCCESS,
				data,
			});
		}
		yield put({
			type: KINESIS_CHOOSE_ENTRY_LOADING_FAILURE,
			error: "Couldn't fetch the kinesis post",
		});
	} catch (e) {
		yield put({
			type: KINESIS_CHOOSE_ENTRY_LOADING_FAILURE,
			error: "Couldn't fetch the kinesis post",
		});
	}
}

function* loadKinesisEntrySaga() {
	yield takeLatest(KINESIS_CHOOSE_ENTRY, loadKinesisEntry);
}

export default function* kinesisSaga() {
	yield all([loadKinesisEntrySaga()]);
}
