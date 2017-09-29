//
//	jballands/jonathanballands.me
//	LoadingAnimation.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import styled from 'styled-components';

const LoadingAnimationContainer = styled.div`
	width: 100%;
	max-width: 300px;
	height: 3px;
`;

const Animation = styled.div`
	@keyframes growerLeft {
		0% {
			transform: scaleX(0);
			transform-origin: left;
		}
		25% {
			transform: scaleX(1);
			transform-origin: left;
		}
	}

	background: black;
	height: 100%;
	width: 100%;
`;

export default class LoadingAnimation extends React.Component {
	static displayName = 'LoadingAnimation';

	static propTypes = {};

	render() {
		return (
			<LoadingAnimationContainer>
				<Animation />
			</LoadingAnimationContainer>
		);
	}
}
