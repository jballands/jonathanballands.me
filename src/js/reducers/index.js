//
//	jballands/jonathanballands.me
//	index.js (Root Reducer)
//
//	© 2017 Jonathan Ballands
//

import { combineReducers } from 'redux';

import kinesisReducer from 'reducers/kinesisReducer';
import instagramViewerReducer from 'reducers/instagramViewerReducer';

const rootReducer = combineReducers({
	kinesis: kinesisReducer,
	instagramViewer: instagramViewerReducer,
});

export default rootReducer;
