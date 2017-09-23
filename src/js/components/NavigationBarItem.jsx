//
//  jonathanballands.me
//  NavigationBar/index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
	font-family: 'Roboto', sans-serif;
	text-transform: uppercase;
	font-size: 16px;
	letter-spacing: 1px;
	color: white;

	&:not(:first-child) {
		margin-left: 40px;
	}

	& > span:hover:after,
	&.navigation-bar-current-route > span:after {
		visibility: visible;
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
	}

	& > span:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		bottom: 0;
		left: 0;
		background-color: white;
		visibility: hidden;
		-webkit-transform: scaleX(0);
		transform: scaleX(0);
		-webkit-transition: all 0.2s ease-out 0s;
		transition: all 0.2s ease-out 0s;
	}
`;

const Children = styled.span`position: relative;`;

export default class NavigationBarItem extends React.Component {
	static contextTypes = {
		router: PropTypes.object,
	};

	render() {
		const route = this.context.router.route.location.pathname;
		const { children, link } = this.props;

		// Do some logic to determine if the current route is part of the base link
		// We treat / special, though, since that doesn't have subroutes
		let isCurrentRoute = false;
		if (link === '/') {
			isCurrentRoute = route === '/';
		} else {
			isCurrentRoute = route.startsWith(this.props.link);
		}

		const curr = isCurrentRoute ? ' navigation-bar-current-route' : '';

		return (
			<StyledLink className={`navigation-bar-item ${curr}`} to={link}>
				<Children>{children}</Children>
			</StyledLink>
		);
	}
}
