//
//	jballands/jonathanballands.me
//	LoadingAnimation.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LoadingContainer = styled.div`
	display: inline-flex;
	flex-flow: column nowrap;
	align-items: center;
	width: 250px;
`;

const Text = styled.div`
	color: ${props => props.color};
	font-size: 14px;
	margin-top: 7px;
	text-align: center;
`;

const LoadingAnimationContainer = styled.div`
	width: 100%;
	max-width: 300px;
	height: 3px;
	position: relative;
`;

const Animation = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: ${props => props.color};
	height: 100%;
	width: 100%;
	animation-iteration-count: infinite;
	animation-duration: ${props => props.duration}s;
	animation-timing-function: ease;
`;

const AnimationLeft = Animation.extend`
	@keyframes bounceLeft {
		0% {
			transform: scaleX(0);
			opacity: 1;
		}
		25% {
			transform: scaleX(1);
			opacity: 1;
		}
		26% {
			opacity: 0;
		}
		75% {
			opacity: 0;
		}
		76% {
			opacity: 1;
			transform: scaleX(1);
		}
		100% {
			transform: scaleX(0);
			opacity: 1;
		}
	}

	animation-name: bounceLeft;
	transform-origin: 0% 50%;
`;

const AnimationRight = Animation.extend`
	@keyframes bounceRight {
		0% {
			transform: scaleX(1);
			opacity: 0;
		}
		25% {
			opacity: 0;
		}
		26% {
			transform: scaleX(1);
			opacity: 1;
		}
		50% {
			transform: scaleX(0);
			opacity: 1;
		}
		75% {
			transform: scaleX(1);
			opacity: 1;
		}
		76% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	transform-origin: 100% 50%;
	animation-name: bounceRight;
`;

export default class LoadingAnimation extends React.Component {
	static displayName = 'LoadingAnimation';

	static propTypes = {
		className: PropTypes.string,
		color: PropTypes.string,
		duration: PropTypes.number,
		style: PropTypes.object,
		text: PropTypes.string,
	};

	static defaultProps = {
		color: 'black',
		duration: 1.5,
		text: 'Gimme a sec',
	};

	render() {
		const { className, color, duration, style, text } = this.props;

		return (
			<LoadingContainer className={className} style={style}>
				<LoadingAnimationContainer>
					<AnimationLeft color={color} duration={duration} />
					<AnimationRight color={color} duration={duration} />
				</LoadingAnimationContainer>
				{text && <Text color={color}>{text}</Text>}
			</LoadingContainer>
		);
	}
}
