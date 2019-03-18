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
import { curveNatural, lineRadial } from 'd3-shape';
import { formatStop, radiansToDegrees } from './utils';

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

const Radius = styled.line`
	fill: none;
	stroke: red;
	stroke-width: 2px;
`;

const RadiusText = styled.text`
	text-anchor: middle;
`;

const LensOutline = styled.circle`
	fill: none;
	stroke: #ccc;
	stroke-width: 1px;
`;

const SpiralPath = styled.path`
	fill: none;
	stroke: blue;
	stroke-width: 1px;
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

		const originX = WIDTH / 2;
		const originY = HEIGHT / 2;

		const radius = f => {
			return (smallestDimension - OFFSET * 2) / (f * 2);
		};

		const theta = scaleLog()
			.domain([minFStop, maxFStop])
			.range([0, 10]);

		const spiral = lineRadial()
			.radius(radius)
			.angle(theta)
			.curve(curveNatural);

		return (
			<Svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
				<Motion
					style={{
						r: spring(radius(fStop)),
						a: spring(theta(fStop)),
					}}>
					{({ r, a }) => {
						const x2 = originX + r * Math.sin(a);
						const y2 = originY - r * Math.cos(a);

						const xText = originX + (r + 7) * Math.sin(a);
						const yText = originY - (r + 7) * Math.cos(a);

						return (
							<g>
								<Lens cx={originX} cy={originY} r={r} />
								<Radius
									x1={originX}
									y1={originY}
									x2={x2}
									y2={y2}
								/>
								<RadiusText
									transform={`translate(${xText}, ${yText})rotate(${radiansToDegrees(
										a,
									)})`}>
									{formatStop(fStop)}
								</RadiusText>
							</g>
						);
					}}
				</Motion>

				<g>
					<SpiralPath
						id="spiral"
						d={spiral(fStops)}
						transform={`translate(${originX}, ${originY})`}
					/>
				</g>
			</Svg>
		);
	}
}
