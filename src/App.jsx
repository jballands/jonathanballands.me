//
//	jballands/jonathanballands.me
//	App.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';

import About from 'routes/About';
import Kinesis from 'routes/Kinesis';
import PageNotFound from 'routes/404';

import ContentScroller from 'components/ContentScroller';
import NavigationBar from 'components/NavigationBar';
import RouteWithFooter from 'components/RouteWithFooter';

import entries from 'helpers/kinesisEntries';

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

	.fade-enter {
		opacity: 0;
		z-index: 1000;
	}
	.fade-exit {
		opacity: 1;
	}
	.fade-enter.fade-enter-active {
		opacity: 1;
		transition: opacity 350ms ease;
	}
`;

export default class App extends React.Component {
	static propTypes = {
		location: PropTypes.object,
		history: PropTypes.object,
	};

	render() {
		const { history, location } = this.props;

		return (
			<AppContainer>
				<NavigationBar location={location} />
				<RouteWrapper>
					<ContentScroller history={history} location={location}>
						<Switch location={location}>
							<RouteWithFooter exact path="/">
								{props => <About {...props} />}
							</RouteWithFooter>
							<Route exact path="/kinesis">
								{() => (
									<Redirect
										to={`/kinesis/${entries
											.first()
											.get('id')}`}
									/>
								)}
							</Route>
							<RouteWithFooter path="/kinesis/:kinesisId">
								{props => <Kinesis {...props} />}
							</RouteWithFooter>
							<RouteWithFooter>
								{props => <PageNotFound {...props} />}
							</RouteWithFooter>
						</Switch>
					</ContentScroller>
				</RouteWrapper>
			</AppContainer>
		);
	}
}
