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
	width: 100%;
	height: 100%;
	background: white;
	position: relative;
`;

const Gradient = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 500px;
	background: -webkit-linear-gradient(top, ${props => props.color}, ${white});
	background: -o-linear-gradient(top, ${props => props.color}, ${white});
	background: -moz-linear-gradient(top, ${props => props.color}, ${white});
	background: linear-gradient(to bottom, ${props => props.color}, ${white});
`;

const Content = styled.div`
	flex: 1 0;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	position: relative;
`;

export default class BackgroundGradient extends React.Component {
	static displayName = 'BackgroundGradient';

	static propTypes = {
		backgroundColor: PropTypes.string.isRequired,
		children: PropTypes.node,
	};

	render() {
		return (
			<BackgroundGradientContainer>
				<Gradient color={this.props.backgroundColor} />
				<Content>{this.props.children}</Content>
			</BackgroundGradientContainer>
		);
	}
}
