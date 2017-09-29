//
//	jballands/jonathanballands.me
//	FadingComponent.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const FadingComponentContainer = styled(TransitionGroup)`
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

export default class Fade extends React.Component {
	static displayName = 'Fade';

	static propTypes = {
		children: PropTypes.node,
	};

	render() {
		return (
			<FadingComponentContainer>
				<CSSTransition classNames="fade" timeout={300}>
					{this.props.children}
				</CSSTransition>
			</FadingComponentContainer>
		);
	}
}
