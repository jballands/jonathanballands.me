//
//	jballands/jonathanballands.me
//	reducerRegistry.js
//
//	© 2018 Jonathan Ballands
//

import Immutable from 'immutable';
import { combineReducers } from 'redux';

// This represents the required reducers that must load in order
// for the app to boot up
import rootReducer from 'reducers';

class ReducerRegistry {
	changeListener = null;
	reducers = Immutable.Map(rootReducer);

	register(name, reducer) {
		this.reducers = this.reducers.set(name, reducer);
		if (this.changeListener) {
			this.changeListener();
		}
	}

	combine() {
		return combineReducers(this.reducers.toJS());
	}
}

const reducerRegistry = new ReducerRegistry();

export default reducerRegistry;
