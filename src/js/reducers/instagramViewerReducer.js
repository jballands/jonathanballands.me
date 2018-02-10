//
//	jballands/jonathanballands.me
//	instagramViewerReducer.js
//
//	© 2018 Jonathan Ballands
//

import Immutable from 'immutable';

const InitialStateRecord = Immutable.Record({});

export default function(state = new InitialStateRecord(), action) {
	switch (action.type) {
		default:
			return state;
	}
}
