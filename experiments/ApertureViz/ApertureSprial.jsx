//
//	jballands/jonathanballands.me
//	ApertureViz/ApertureSpiral.jsx
//
//	© 2018 Jonathan Ballands
//

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { scaleLinear, scaleLog } from 'd3-scale';
import { curveBasis, lineRadial } from 'd3-shape';
import { formatStop } from './utils';

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

const Lens = styled.circle`
	fill: none;
	stroke: red;
	stroke-width: 2px;
`;

const SpiralPath = styled.path`
	fill: none;
	stroke: black;
	stroke-width: 2px;
	font: 8px;
`;

const SpiralText = styled.text``;

const WIDTH = 500;
const HEIGHT = 500;
const OFFSET = 10;

export default class ApertureSprial extends PureComponent {
	static displayName = 'ApertureSpiral';

	static propTypes = {
		focalLength: PropTypes.number.isRequired,
		fStop: PropTypes.number.isRequired,
		fStops: PropTypes.array.isRequired,
		minFStop: PropTypes.number.isRequired,
		maxFStop: PropTypes.number.isRequired,
	};

	render() {
		const { focalLength, fStop, fStops, minFStop, maxFStop } = this.props;

		const smallestDimension = WIDTH > HEIGHT ? HEIGHT : WIDTH;
		const maxRadius = smallestDimension / 2 - OFFSET;

		const circleRadius = scaleLog()
			.domain([minFStop, maxFStop])
			.range([maxRadius, OFFSET]);

		const spiralRadius = scaleLinear()
			.domain([minFStop, maxFStop])
			.range([maxRadius, OFFSET]);

		const theta = scaleLinear()
			.domain([minFStop, maxFStop])
			.range([0, 2 * Math.PI]);

		const spiral = lineRadial()
			.angle(theta)
			.radius(spiralRadius)
			.curve(curveBasis);

		return (
			<Svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
				<g>
					<Lens
						cx={maxRadius + OFFSET}
						cy={maxRadius + OFFSET}
						r={`${circleRadius(fStop)}px`}
					/>
					<SpiralPath
						id="spiral"
						d={spiral(fStops)}
						transform={`translate(${WIDTH / 2}, ${HEIGHT / 2})`}
					/>
				</g>
				<g>
					{fStops.map((s, i) => {
						return (
							<SpiralText dy="13" key={s}>
								<textPath
									href="#spiral"
									startOffset={`${(i / (fStops.length - 1)) *
										100}%`}>
									{formatStop(s)}
								</textPath>
							</SpiralText>
						);
					})}
				</g>
			</Svg>
		);
	}
}
