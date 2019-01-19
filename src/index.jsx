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
import { Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from 'routes/App';

import storeConfiguration from 'helpers/configureStore';

import 'normalize.css';

class JonathanBallandsMe extends React.Component {
	store = null;

	constructor() {
		super();
		this.store = storeConfiguration.store;
	}

	render() {
		return (
			<Provider store={this.store}>
				<Router history={createHistory()}>
					<Route path="/" component={App} />
				</Router>
			</Provider>
		);
	}
}

render(<JonathanBallandsMe />, document.getElementById('reactroot'));
