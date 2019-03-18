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
import { BrowserRouter, Route } from 'react-router-dom';

import App from 'src/App';

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
				<BrowserRouter>
					<Route path="/" component={App} />
				</BrowserRouter>
			</Provider>
		);
	}
}

render(<JonathanBallandsMe />, document.getElementById('reactroot'));

if (module.hot) {
	module.hot.accept();
}
