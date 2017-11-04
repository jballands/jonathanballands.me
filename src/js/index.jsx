//
//	jballands/jonathanballands.me
//	index.jsx
//
//	© 2017 Jonathan Ballands
//

import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from 'routes/App';

import rootReducer from 'reducers/index';
import rootSaga from 'sagas/index';

import 'normalize.css';

class JonathanBallandsMe extends React.Component {
	render() {
		const middleware = [];
		const sagaMiddleware = createSagaMiddleware();
		middleware.push(sagaMiddleware);

		if (process.env.NODE_ENV === 'development') {
			const { logger } = require('redux-logger');
			middleware.push(logger);
		}

		const store = compose(applyMiddleware(...middleware))(createStore)(
			rootReducer,
		);

		sagaMiddleware.run(rootSaga);

		return (
			<Provider store={store}>
				<Router history={createHistory()}>
					<Route path="/" component={App} />
				</Router>
			</Provider>
		);
	}
}

render(<JonathanBallandsMe />, document.getElementById('reactroot'));
