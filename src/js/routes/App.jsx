//
//	jballands/jonathanballands.me
//	App.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import About from 'routes/About';
import Kinesis from 'routes/Kinesis';

import ContentScroller from 'components/ContentScroller';
import NavigationBar from 'components/NavigationBar';
import RouteWithFooter from 'components/RouteWithFooter';

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
		transition: opacity 300ms ease;
	}
`;

export default class App extends React.Component {
	static propTypes = {
		location: PropTypes.object,
		history: PropTypes.object,
	};

	render() {
		const { history, location } = this.props;
		const topLevelPath = location.pathname.split('/')[1];

		return (
			<AppContainer>
				<NavigationBar />
				<RouteWrapper>
					<ContentScroller history={history} location={location}>
						<TransitionGroup>
							<CSSTransition
								key={topLevelPath}
								classNames="fade"
								timeout={300}>
								<Switch location={location}>
									<RouteWithFooter exact path="/">
										{props => <About {...props} />}
									</RouteWithFooter>
									<RouteWithFooter path="/kinesis">
										{props => <Kinesis {...props} />}
									</RouteWithFooter>
									<RouteWithFooter>
										{props => <div>R'uh oh</div>}
									</RouteWithFooter>
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					</ContentScroller>
				</RouteWrapper>
			</AppContainer>
		);
	}
}
