//
//	jballands/jonathanballands.me
//	LinkWrapper.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LinkSvg from 'svg/LinkSvg';

const LinkWrapperContainer = styled.a`
	font-family: 'Droid Serif', 'serif';
	color: #fff;
	font-size: 17px;
	letter-spacing: 1px;
	margin-top: 50px;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	* + * {
		margin-left: 10px;
	}

	& > span {
		position: relative;
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

	&:hover > span:after {
		visibility: visible;
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
	}
`;

const LinkWrapperContainerRouterLink = LinkWrapperContainer.withComponent(Link);

export default class LinkWrapper extends React.Component {
	static defaultProps = {
		external: false,
	};

	render() {
		if (this.props.external === true) {
			return (
				<LinkWrapperContainer href={this.props.link}>
					<span>{this.props.children}</span>
					<LinkSvg />
				</LinkWrapperContainer>
			);
		}
		return (
			<LinkWrapperContainerRouterLink to={this.props.link}>
				<span>{this.props.children}</span>
			</LinkWrapperContainerRouterLink>
		);
	}
}
