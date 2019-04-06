//
//	jballands/jonathanballands.me
//	BackgroundGradient.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { white } from 'helpers/palette';

const BackgroundGradientContainer = styled.div`
	flex: 1 0;
	height: 100%;
	background: white;
	position: relative;
	overflow: hidden;
`;

const Gradient = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: ${props => props.height};
	background: linear-gradient(to bottom, ${props => props.color}, ${white});
	transition: background 750ms ease;
`;

const Content = styled.div`
	flex: 1 0;
	display: flex;
	flex-flow: column nowrap;
	position: relative;
`;

export default class BackgroundGradient extends React.Component {
	static displayName = 'BackgroundGradient';

	static propTypes = {
		backgroundColor: PropTypes.string.isRequired,
		children: PropTypes.node,
		height: PropTypes.string,
	};

	static defaultProps = {
		height: '500px',
	};

	render() {
		const { backgroundColor, children, height } = this.props;

		return (
			<BackgroundGradientContainer>
				<Gradient color={backgroundColor} height={height} />
				<Content>{children}</Content>
			</BackgroundGradientContainer>
		);
	}
}
