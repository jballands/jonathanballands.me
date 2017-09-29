//
//	jballands/jonathanballands.me
//	index.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from 'routes/App';

import rootReducer from 'reducers/index';

import 'styles/normalize.scss';
import 'styles/fonts.scss';

class JonathanBallandsMe extends React.Component {
	render() {
		const store = createStore(
			rootReducer,
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__(),
		);

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
