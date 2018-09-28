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
	text-transform: uppercase;
	font-size: 16px;
	letter-spacing: 1px;
	color: white;
	font-weight: 700;

	&:not(:first-child) {
		margin-left: 40px;
	}

	& > span:hover:after,
	&.navigation-bar-current-route > span:after {
		visibility: visible;
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
		transform: scaleX(0);
		transition: all 0.2s ease-out 0s;
	}
`;

const StyledExternalink = StyledLink.withComponent('a');

const Children = styled.span`
	position: relative;
`;

export default class NavigationBarItem extends React.Component {
	static contextTypes = {
		router: PropTypes.object,
	};

	static propTypes = {
		children: PropTypes.node,
		external: PropTypes.bool,
		link: PropTypes.string,
	};

	render() {
		const route = this.context.router.route.location.pathname;
		const { children, external, link } = this.props;

		if (external) {
			return (
				<StyledExternalink
					className="navigation-bar-item"
					href={link}
					target="_blank">
					<Children>{children}</Children>
				</StyledExternalink>
			);
		}

		// Do some logic to determine if the current route is part of the base link
		// We treat / special, though, since that doesn't have subroutes
		let isCurrentRoute = false;
		if (link === '/') {
			isCurrentRoute = route === '/';
		} else {
			isCurrentRoute = route.startsWith(link);
		}

		const curr = isCurrentRoute ? ' navigation-bar-current-route' : '';

		return (
			<StyledLink className={`navigation-bar-item ${curr}`} to={link}>
				<Children>{children}</Children>
			</StyledLink>
		);
	}
}
