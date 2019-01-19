//
//	jballands/jonathanballands.me
//	configureStore.js
//
//	© 2018 Jonathan Ballands
//

import Immutable from 'immutable';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

//
//	Startup reducers and sagas
//

import rootReducer from 'reducers/index';
import rootSaga from 'sagas/index';

/**
 * @member { object } store The redux store for the application.
 */
class StoreConfiguration {
	reducers = Immutable.Map(rootReducer);
	sagaMiddleware = createSagaMiddleware();
	store = null;

	constructor() {
		const middleware = [this.sagaMiddleware];

		if (process.env.NODE_ENV === 'development') {
			const { logger } = require('redux-logger');
			middleware.push(logger);
		}

		this.store = compose(applyMiddleware(...middleware))(createStore)(
			combineReducers(this.reducers.toJS()),
		);

		this.sagaMiddleware.run(rootSaga);
	}

	/**
	 * Registers a new reducer with the store asyncronously.
	 * @param { string } namespace The namespace you want the store to insert the reducer at.
	 * @param { function } reducer The reducer you want to register with the store.
	 */
	registerReducer(namespace, reducer) {
		this.reducers = this.reducers.set(namespace, reducer);
		const root = combineReducers(this.reducers.toJS());
		this.store.replaceReducer(root);
	}

	/**
	 *	Runs sagas with the store asyncronously.
	 * @param { function } saga A function that invokes all the sagas you want to run.
	 */
	registerSaga(saga) {
		this.sagaMiddleware.run(saga);
	}
}

const storeConfiguration = new StoreConfiguration();
export default storeConfiguration;
