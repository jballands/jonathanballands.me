//
//	jballands/jonathanballands.me
//	CPIOverTime.jsx
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
import _concat from 'lodash.concat';

import Axis from 'experiments/common/Axis';
import AxisLabelX from 'experiments/common/AxisLabelX';
import AxisLabelY from 'experiments/common/AxisLabelY';

import tuition7817 from './tuition7817.json';
import medical7817 from './medical7817.json';
import furniture7817 from './furniture7817.json';
import foodAway7817 from './foodAway7817.json';
import foodHome7817 from './foodHome7817.json';
import cars7817 from './cars7817.json';
import apparel7817 from './apparel7817.json';
import housing7817 from './housing7817.json';

const VIEWBOX = {
	width: 500,
	height: 300,
};

const MARGINS = {
	top: 0,
	left: 30,
	right: 13,
	bottom: 20,
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
`;

const AxisLabel = styled.span`
	font-style: italic;
	color: ${props => props.color};
	display: flex;
	flex-flow: row nowrap;
`;

export default class CPIOverTime extends React.Component {
	static displayName = 'CPIOverTime';

	static propTypes = {
		primaryColor: PropTypes.string,
	};

	stringToDate = str => {
		const s = str.split(' ');
		return Date.parse(`${s[1]} 1, ${s[0]}`);
	};

	render() {
		const sectorData = [
			{
				id: 'tuition',
				data: tuition7817,
				color: '#4286f4',
			},
			{
				id: 'medical',
				data: medical7817,
				color: '#f4df42',
			},
			{
				id: 'foodHome',
				data: foodHome7817,
				color: '#4ee891',
			},
			{
				id: 'foodAway',
				data: foodAway7817,
				color: '#41f4c1',
			},
			{
				id: 'cars',
				data: cars7817,
				color: '#002777',
			},
			{
				id: 'furniture',
				data: furniture7817,
				color: '#f237d9',
			},
			{
				id: 'apparel',
				data: apparel7817,
				color: '#730077',
			},
			{
				id: 'housing',
				data: housing7817,
				color: '#e06d9b',
			},
		];
		const allData = _concat(...sectorData.map(d => d.data));

		const x = scaleTime().range([0, DIMENSIONS.width]);
		const y = scaleLinear().range([0, -DIMENSIONS.height + MARGINS.top]);

		const lineFn = line()
			.curve(curveBasis)
			.x(d => x(this.stringToDate(d.Label)))
			.y(d => y(d.Value));

		x.domain(extent(allData, d => this.stringToDate(d.Label))).nice();
		y.domain(extent(allData, d => +d.Value)).nice();

		sectorData.map(sector => {
			sector.d = lineFn(sector.data);
			return sector;
		});

		return (
			<CPIOverTimeContainer>
				<AxisLabelY
					margins={MARGINS}
					label={
						<AxisLabel color={this.props.primaryColor}>
							Consumer Price Index
						</AxisLabel>
					}
					orientation="left">
					<AxisLabelX
						margins={MARGINS}
						label={
							<AxisLabel color={this.props.primaryColor}>
								Time
							</AxisLabel>
						}>
						<Svg viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}>
							<GraphContainer>
								<StyledAxis
									color={this.props.primaryColor}
									scale={x}
									orientation="bottom"
									numberOfTicks={6}
								/>
								<StyledAxis
									color={this.props.primaryColor}
									scale={y}
									orientation="left"
									numberOfTicks={9}
								/>

								{sectorData.map(sector => (
									<path
										d={sector.d}
										stroke={sector.color}
										fill="transparent"
										strokeWidth={1}
										key={sector.id}
									/>
								))}
							</GraphContainer>
						</Svg>
					</AxisLabelX>
				</AxisLabelY>
			</CPIOverTimeContainer>
		);
	}
}
