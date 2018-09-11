//
//	jballands/jonathanballands.me
//	ApertureViz/ApertureSpiral.jsx
//
//	© 2018 Jonathan Ballands
//

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spring, Motion } from 'react-motion';
import { scaleLog } from 'd3-scale';
import { curveBasis, lineRadial } from 'd3-shape';

const Svg = styled.svg`
	width: 500px;
	height: 500px;
	* {
		font-family: 'Roboto', sans-serif;
	}
	overflow: hidden;
`;

const Lens = styled.circle`
	fill: none;
	stroke: red;
	stroke-width: 2px;
`;

const LensOutline = styled.circle`
	fill: none;
	stroke: #ccc;
	stroke-width: 1px;
`;

const SpiralPath = styled.path`
	fill: none;
	stroke: blue;
	stroke-width: 2px;
`;

const WIDTH = 500;
const HEIGHT = 500;
const OFFSET = 25;

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

		const radius = f => {
			return (smallestDimension - OFFSET * 2) / (f * 2);
		};

		const theta = scaleLog()
			.domain([minFStop, maxFStop])
			.range([0, 10]);

		const spiral = lineRadial()
			.radius(radius)
			.angle(theta)
			.curve(curveBasis);

		return (
			<Svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
				<g>
					{fStops.map(s => {
						return (
							<LensOutline
								cx={smallestDimension / 2}
								cy={smallestDimension / 2}
								r={radius(s)}
							/>
						);
					})}
					<Motion style={{ radius: spring(radius(fStop)) }}>
						{interpolated => (
							<Lens
								cx={smallestDimension / 2}
								cy={smallestDimension / 2}
								r={interpolated.radius}
							/>
						)}
					</Motion>
					<SpiralPath
						id="spiral"
						d={spiral(fStops)}
						transform={`translate(${WIDTH / 2}, ${HEIGHT / 2})`}
					/>
				</g>
			</Svg>
		);
	}
}
