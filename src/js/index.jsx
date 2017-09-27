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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import styled from 'styled-components';

import About from 'routes/About';
import Kinesis from 'routes/Kinesis';
import Blog from 'routes/Blog';

import NavigationBar from 'components/NavigationBar';
import FooterWrapper from 'components/FooterWrapper';

import rootReducer from 'reducers/index';

import 'styles/normalize.scss';
import 'styles/fonts.scss';

const AppContainer = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	align-items: center;
`;

const RouteWrapper = styled.div`
	width: 100%;
	flex: 1 0;
	position: relative;

	.anim-fade-enter {
		opacity: 0;
		z-index: 1000;
	}

	.anim-fade-leave {
		opacity: 1;
	}

	.anim-fade-enter.anim-fade-enter-active {
		opacity: 1;
		transition: opacity 300ms ease;
	}
`;

// -----------------------------------------------------------------------------

class App extends React.Component {
	shouldComponentUpdate(nextProps) {
		return false;
	}

	renderAbout = props => (
		<FooterWrapper>
			<About {...props} />
		</FooterWrapper>
	);

	renderKinesis = props => (
		<FooterWrapper>
			<Kinesis {...props} />
		</FooterWrapper>
	);

	renderBlog = props => (
		<FooterWrapper>
			<Blog {...props} />
		</FooterWrapper>
	);

	render() {
		const store = createStore(
			rootReducer,
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__(),
		);

		return (
			<Provider store={store}>
				<Router history={createHistory()}>
					<AppContainer>
						<NavigationBar />
						<RouteWrapper>
							<Switch key={location.key} location={location}>
								<Route
									exact
									path="/"
									render={this.renderAbout}
								/>
								<Route
									path="/kinesis"
									render={this.renderKinesis}
								/>
								<Route path="/blog" render={this.renderBlog} />
							</Switch>
						</RouteWrapper>
					</AppContainer>
				</Router>
			</Provider>
		);
	}
}

render(<App />, document.getElementById('reactroot'));
