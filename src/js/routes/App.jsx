//
//	jballands/jonathanballands.me
//	App.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import About from 'routes/About';
import Kinesis from 'routes/Kinesis';
import Blog from 'routes/Blog';

import NavigationBar from 'components/NavigationBar';
import FooterWrapper from 'components/FooterWrapper';
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
`;

export default class App extends React.Component {
	render() {
		const { location } = this.props;

		return (
			<AppContainer>
				<NavigationBar />
				<RouteWrapper>
					<Switch location={location}>
						<RouteWithFooter exact path="/">
							{props => <About {...props} />}
						</RouteWithFooter>
						<RouteWithFooter path="/kinesis">
							{props => <Kinesis {...props} />}
						</RouteWithFooter>
						<RouteWithFooter path="/blog">
							{props => <Blog {...props} />}
						</RouteWithFooter>
						<RouteWithFooter>
							{props => <div>R'uh oh</div>}
						</RouteWithFooter>
					</Switch>
				</RouteWrapper>
			</AppContainer>
		);
	}
}
