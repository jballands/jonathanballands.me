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
	KINESIS_CHOOSE_ENTRY_LOADING_FAILED,
} from 'actions/KinesisActions';
import entries from 'helpers/kinesisEntries';

import { Type } from '~/kinesis.config.js';

function fetchKinesisArticleEntry(endpoint) {
	return axios.get(endpoint);
}

function fetchKinesisExperimentEntry(resource) {
	// The resource is already a promise, so we just return it
	return resource();
}

function* loadKinesisArticleEntry(entry) {
	const { resource } = entry;

	try {
		const { data, status } = yield call(fetchKinesisArticleEntry, resource);

		yield delay(2500);

		if (status === 200) {
			return yield put({
				type: KINESIS_CHOOSE_ENTRY_LOADING_SUCCESS,
				data,
			});
		}
		yield put({
			type: KINESIS_CHOOSE_ENTRY_LOADING_FAILED,
			error: "Couldn't fetch the kinesis post",
		});
	} catch (e) {
		yield put({
			type: KINESIS_CHOOSE_ENTRY_LOADING_FAILED,
			error: "Couldn't fetch the kinesis post",
		});
	}
}

function* loadKinesisExperimentEntry(entry) {
	const { resource } = entry;

	try {
		const response = yield call(fetchKinesisExperimentEntry, resource);

		yield delay(2500);

		if (response.default) {
			return yield put({
				type: KINESIS_CHOOSE_ENTRY_LOADING_SUCCESS,
				data: response.default,
			});
		}

		yield put({
			type: KINESIS_CHOOSE_ENTRY_LOADING_FAILED,
			error: "Couldn't fetch the kinesis post",
		});
	} catch (e) {
		yield put({
			type: KINESIS_CHOOSE_ENTRY_LOADING_FAILED,
			error: "Couldn't fetch the kinesis post",
		});
	}
}

function* loadKinesisEntry(action) {
	yield put({ type: KINESIS_CHOOSE_ENTRY_START_LOADING });

	const entry = entries.get(action.id);
	switch (entry.type) {
		case Type.article:
			yield call(loadKinesisArticleEntry, entry);
			break;
		case Type.experiment:
			yield call(loadKinesisExperimentEntry, entry);
			break;
		default:
			return yield put({
				type: KINESIS_CHOOSE_ENTRY_LOADING_FAILED,
				error: 'Unrecognized Kinesis post type',
			});
	}
}

function* loadKinesisEntrySaga() {
	yield takeLatest(KINESIS_CHOOSE_ENTRY, loadKinesisEntry);
}

export default function* kinesisSaga() {
	yield all([loadKinesisEntrySaga()]);
}
