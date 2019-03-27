//
//	jballands/jonathanballands.me
//	App.jsx
//
//	© 2019 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import About from 'routes/About';
import Kinesis from 'routes/Kinesis';
import PageNotFound from 'routes/404';

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
		transition: opacity 350ms ease;
	}
`;

export default class App extends React.Component {
	static propTypes = {
		location: PropTypes.object,
	};

	render() {
		const { location } = this.props;
		const topLevelPath = location.pathname.split('/')[1];

		return (
			<AppContainer>
				<NavigationBar location={location} />
				<RouteWrapper>
					<TransitionGroup>
						{/* Timeout is higher here to make up for any inconsistencies between the CSS timer
							and this timer */}
						<CSSTransition
							key={topLevelPath}
							classNames="fade"
							timeout={300}>
							<Switch location={location}>
								<RouteWithFooter exact path="/">
									{props => <About {...props} />}
								</RouteWithFooter>
								<RouteWithFooter path="/kinesis/:kinesisId?">
									{props => <Kinesis {...props} />}
								</RouteWithFooter>
								<RouteWithFooter>
									{props => <PageNotFound {...props} />}
								</RouteWithFooter>
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				</RouteWrapper>
			</AppContainer>
		);
	}
}
