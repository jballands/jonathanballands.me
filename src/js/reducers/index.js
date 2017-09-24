//
//	jballands/jonathanballands.me
//	index.js (Root Reducer)
//
//	© 2017 Jonathan Ballands
//

import { combineReducers } from 'redux';

import blogReducer from 'reducers/blogReducer';

const rootReducer = combineReducers({
	blog: blogReducer,
});

export default rootReducer;
