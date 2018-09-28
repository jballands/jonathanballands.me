//
//	jballands/jonathanballands.me
//	EmploymentSectors.jsx
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

import services4017 from './services4017.json';
import manufacturing4017 from './manufacturing4017.json';

const VIEWBOX = {
	width: 500,
	height: 400,
};

const MARGINS = {
	top: 0,
	left: 75,
	right: 64,
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
`;

export default class EmploymentSectors extends React.Component {
	static displayName = 'EmploymentSectors';

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
				id: 'services',
				displayName: 'Services',
				data: services4017,
				color: '#a769ff',
			},
			{
				id: 'manufacturing',
				displayName: 'Manufacturing',
				data: manufacturing4017,
				color: '#ff69f5',
			},
		];
		const allData = _concat(...sectorData.map(d => d.data));

		const x = scaleTime().range([0, DIMENSIONS.width]);
		const y = scaleLinear().range([0, -DIMENSIONS.height + MARGINS.top]);

		const lineFn = line()
			.curve(curveBasis)
			.x(d => x(this.stringToDate(d.Label)))
			.y(d => y(d.Value / 1000));

		x.domain(extent(allData, d => this.stringToDate(d.Label))).nice();
		y.domain(extent(allData, d => +d.Value / 1000)).nice();

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
							label="← Employees (millions) →"
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
									y={y(this.last(sector.data).Value / 1000)}
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
