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
	height: 470,
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
		const sectorData = [
			{
				id: 'tuition',
				displayName: 'College Tuition',
				data: tuition7817,
				color: '#4286f4',
			},
			{
				id: 'medical',
				displayName: 'Medical Care',
				data: medical7817,
				color: '#41d9f4',
			},
			{
				id: 'foodHome',
				displayName: 'Eating at Home',
				data: foodHome7817,
				color: '#09a00c',
			},
			{
				id: 'foodAway',
				displayName: 'Eating Out',
				data: foodAway7817,
				color: '#35c69d',
			},
			{
				id: 'cars',
				displayName: 'New Cars',
				data: cars7817,
				color: '#730077',
			},
			{
				id: 'furniture',
				displayName: 'Furniture',
				data: furniture7817,
				color: '#cc0a67',
			},
			{
				id: 'apparel',
				displayName: 'Clothing',
				data: apparel7817,
				color: '#f237d9',
			},
			{
				id: 'housing',
				displayName: 'Housing',
				data: housing7817,
				color: '#0ed69d',
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

						{sectorData.map(sector => (
							<g key={sector.id}>
								<path
									d={sector.d}
									stroke={sector.color}
									fill="transparent"
									strokeWidth={1}
									key={sector.id}
								/>
								<LineLabel
									x={x(
										this.stringToDate(
											this.last(sector.data).Label,
										),
									)}
									y={y(this.last(sector.data).Value)}
									color={sector.color}
									className={sector.id}>
									{sector.displayName}
								</LineLabel>
							</g>
						))}
					</GraphContainer>
				</Svg>
			</CPIOverTimeContainer>
		);
	}
}
