//
//	jballands/jonathanballands.me
//	ApertureViz/ApertureSpiral.jsx
//
//	© 2018 Jonathan Ballands
//

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { scaleLinear } from 'd3-scale';

const Svg = styled.svg`
	width: 500px;
	height: 500px;
	* {
		font-family: 'Roboto', sans-serif;
		font-size: 13px;
	}
	overflow: hidden;
	background: rgba(255, 0, 0, 0.1);
`;

const WIDTH = 500;
const HEIGHT = 500;

export default class ApertureSprial extends PureComponent {
	static displayName = 'ApertureSpiral';

	static propTypes = {
		focalLength: PropTypes.number.isRequired,
		fStop: PropTypes.number.isRequired,
		maxFStop: PropTypes.number.isRequired,
	};

	render() {
		const { focalLength, fStop, maxFStop } = this.props;

		const smallestDimension = WIDTH > HEIGHT ? HEIGHT : WIDTH;

		const radius = scaleLinear()
			.domain([1, maxFStop])
			.range([smallestDimension, 0]);

		const angle = scaleLinear()
			.domain([0, 1])
			.range([0, 360]);

		return (
			<Svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
				<g />
			</Svg>
		);
	}
}
