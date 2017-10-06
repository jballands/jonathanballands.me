//
//	jballands/jonathanballands.me
//	index.js (Root Reducer)
//
//	© 2017 Jonathan Ballands
//

import { combineReducers } from 'redux';

import kinesisReducer from 'reducers/kinesisReducer';

const rootReducer = combineReducers({
	kinesis: kinesisReducer,
});

export default rootReducer;
