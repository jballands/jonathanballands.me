//
//	jballands/jonathanballands.me
//	index.js (Root Reducer)
//
//	© 2017 Jonathan Ballands
//

import kinesisReducer from 'reducers/kinesisReducer';
// import instagramViewerReducer from 'reducers/instagramViewerReducer';

const rootReducer = {
	kinesis: kinesisReducer,
};

export default rootReducer;
