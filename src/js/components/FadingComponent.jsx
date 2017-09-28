//
//	jballands/jonathanballands.me
//	FadingComponent.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const FadingComponentContainer = styled.div`
	.fading-component-enter {
		opacity: 0;
		z-index: 1000;
	}
	.fading-component-exit {
		opacity: 1;
	}
	.fading-component-enter.fading-component-enter-active {
		opacity: 1;
		transition: opacity 300ms ease;
	}
`;

export default class FadingComponent extends React.Component {
	static displayName = 'FadingComponent';

	static propTypes = {
		children: PropTypes.node,
	};

	render() {
		return (
			<FadingComponentContainer>
				<CSSTransition classNames="fading-component" timeout={300}>
					{this.props.children}
				</CSSTransition>
			</FadingComponentContainer>
		);
	}
}
