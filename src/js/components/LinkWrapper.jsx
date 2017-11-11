//
//	jballands/jonathanballands.me
//	LinkWrapper.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LinkInTabSvg from 'svg/LinkInTabSvg';

import { shark } from 'helpers/palette';

const LinkWrapperContainer = styled.a`
	font-family: 'Droid Serif', 'serif';
	color: ${shark};
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
		color: ${shark};
		position: relative;
	}

	& > span:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		bottom: 0;
		left: 0;
		background-color: ${shark};
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
	static propTypes = {
		className: PropTypes.string,
		children: PropTypes.node,
		external: PropTypes.bool,
		link: PropTypes.string,
	};

	static defaultProps = {
		external: false,
	};

	render() {
		const { className, children, external, link } = this.props;

		if (external === true) {
			return (
				<LinkWrapperContainer className={className} href={link}>
					<span>{children}</span>
					<LinkInTabSvg color={shark} />
				</LinkWrapperContainer>
			);
		}
		return (
			<LinkWrapperContainerRouterLink className={className} to={link}>
				<span>{children}</span>
			</LinkWrapperContainerRouterLink>
		);
	}
}
