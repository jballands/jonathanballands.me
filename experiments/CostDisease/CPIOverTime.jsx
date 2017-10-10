//
//	jballands/jonathanballands.me
//	CPIOverTime.jsx
//
//	© 2017 Jonathan Ballands
//

/* eslint-disable react/jsx-no-bind */

import React from 'react';
import styled from 'styled-components';
import { extent, max, min } from 'd3-array';
import { axisBottom, axisLeft } from 'd3-axis';
import { curveBasis, line } from 'd3-shape';
import { scaleLinear, scaleTime } from 'd3-scale';
import _concat from 'lodash.concat';

import Axis from 'experiments/common/Axis';
import tuition7817 from './tuition7817.json';

const VIEWBOX = {
	width: 500,
	height: 300,
};

const MARGINS = {
	top: 20,
	left: 45,
	right: 20,
	bottom: 10,
};

const DIMENSIONS = {
	width: VIEWBOX.width - MARGINS.left - MARGINS.right,
	height: VIEWBOX.height - MARGINS.top - MARGINS.bottom,
};

const Svg = styled.svg`
	* {
		font-family: 'Roboto', sans-serif;
	}
`;

const GraphContainer = styled.g`
	transform: translate(${MARGINS.left}px, ${DIMENSIONS.height}px);
	width: ${VIEWBOX.width - MARGINS.right}px;
`;

export default class CPIOverTime extends React.Component {
	static displayName = 'CPIOverTime';

	stringToDate = str => {
		const s = str.split(' ');
		return Date.parse(`${s[0]} 1, ${s[1]}`);
	};

	render() {
		const allData = _concat(tuition7817);

		const x = scaleTime().range([0, DIMENSIONS.width]);
		const y = scaleLinear().range([0, -DIMENSIONS.height + MARGINS.top]);

		const lineFn = line()
			.curve(curveBasis)
			.x(d => x(this.stringToDate(d.Label)))
			.y(d => y(d.Value));

		x.domain(extent(allData, d => this.stringToDate(d.Label)));
		y.domain(extent(allData, d => +d.Value));

		const d = lineFn(allData);

		return (
			<Svg viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}>
				<GraphContainer>
					<Axis scale={x.nice()} orientation="bottom" />
					<Axis scale={y.nice()} orientation="left" />
					<path d={d} stroke="black" fill="transparent" />
				</GraphContainer>
			</Svg>
		);
	}
}
