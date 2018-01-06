//
//	jballands/jonathanballands.me
//	CarCPIOverTime.jsx
//
//	© 2017 Jonathan Ballands
//

/* eslint-disable react/jsx-no-bind */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { extent } from 'd3-array';
import { curveBasis, line } from 'd3-shape';
import { scaleLinear, scaleTime } from 'd3-scale';

import Axis from 'experiments/common/Axis';

import cars7817 from './cars7817.json';

const VIEWBOX = {
	width: 500,
	height: 250,
};

const MARGINS = {
	top: 0,
	left: 52,
	right: 60,
	bottom: 35,
};

const DIMENSIONS = {
	width: VIEWBOX.width - MARGINS.left - MARGINS.right,
	height: VIEWBOX.height - MARGINS.top - MARGINS.bottom,
};

const CPIOverTimeContainer = styled.div`
	position: relative;
	width: 100%;
`;

const Svg = styled.svg`
	width: 100%;
	* {
		font-family: 'Roboto', sans-serif;
	}
`;

const GraphContainer = styled.g`
	transform: translate(${MARGINS.left}px, ${DIMENSIONS.height}px);
	width: ${VIEWBOX.width - MARGINS.right}px;
`;

const StyledAxis = styled(Axis)`
	path,
	line {
		stroke: ${props => props.color};
	}

	text {
		fill: ${props => props.color};
	}

	.axis-label {
		fill: ${props => props.color};
	}
`;

const LineLabel = styled.text`
	font-size: 9px;
	font-style: italic;
	fill: ${props => props.color};
	transform: translate(5px, 2px);

	&.foodHome {
		transform: translate(5px, 5px);
	}

	&.furniture {
		transform: translate(5px, 4px);
	}
`;

export default class CPIOverTime extends React.Component {
	static displayName = 'CPIOverTime';

	static propTypes = {
		primaryColor: PropTypes.string,
	};

	last = array => {
		if (array.length <= 0) {
			return null;
		}
		return array[array.length - 1];
	};

	stringToDate = str => {
		const s = str.split(' ');
		return Date.parse(`${s[1]} 1, ${s[0]}`);
	};

	render() {
		const x = scaleTime().range([0, DIMENSIONS.width]);
		const y = scaleLinear().range([0, -DIMENSIONS.height + MARGINS.top]);

		const lineFn = line()
			.curve(curveBasis)
			.x(d => x(this.stringToDate(d.Label)))
			.y(d => y(d.Value));

		x.domain(extent(cars7817, d => this.stringToDate(d.Label))).nice();
		y.domain([0, 750]);

		return (
			<CPIOverTimeContainer>
				<Svg viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}>
					<GraphContainer>
						<StyledAxis
							color={this.props.primaryColor}
							scale={x}
							orientation="bottom"
							numberOfTicks={6}
							label="← Time →"
						/>
						<StyledAxis
							color={this.props.primaryColor}
							scale={y}
							orientation="left"
							numberOfTicks={6}
							label="← CPI →"
						/>

						<path
							d={lineFn(cars7817)}
							stroke={this.props.primaryColor}
							fill="transparent"
							strokeWidth={1}
						/>
					</GraphContainer>
				</Svg>
			</CPIOverTimeContainer>
		);
	}
}
