//
//	jballands/jonathanballands.me
//	Chart.jsx
//
//	© 2018 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Immutable from 'immutable';
import styled from 'styled-components';
import { extent } from 'd3-array';
import { axisBottom, axisLeft } from 'd3-axis';
import { easeCubicOut } from 'd3-ease';
import { format } from 'd3-format';
import { select } from 'd3-selection';
import { scaleLinear, scaleTime } from 'd3-scale';
import { area, curveBasis } from 'd3-shape';
import 'd3-transition';
import { dataGroupedByProperty } from 'posts/LoanBurndown/utils';

const Svg = styled.svg`
	width: 100%;
	height: 600px;
	* {
		font-size: 13px;
		font-family: Bodytext;
	}
	overflow: hidden;
`;

const OriginalArea = styled.path`
	fill: url(#original-gradient);
`;

const ProjectedArea = styled.path`
	fill: url(#projection-gradient);
`;

const WIDTH = 865;
const HEIGHT = 600;
const MARGINS = {
	top: 6,
	right: 4,
	bottom: 25,
	left: 60,
};

export default class Chart extends React.Component {
	static displayName = 'Chart';

	static propTypes = {
		color: PropTypes.string,
		data: ImmutablePropTypes.mapContains({
			original: ImmutablePropTypes.list,
		}),
		extrapolate: PropTypes.bool,
		inputColumn: PropTypes.string,
		outputColumn: PropTypes.string,
	};

	linearScaleContainer = React.createRef();
	timeScaleContainer = React.createRef();
	originalArea = React.createRef();
	projectedArea = React.createRef();

	timeScale = scaleTime();
	linearScale = scaleLinear();

	componentDidMount() {
		this.renderAxes();
		this.renderLines();
	}

	componentDidUpdate() {
		this.renderAxes();
		this.renderLines();
	}

	renderAxes = () => {
		const timeAxis = axisBottom().scale(this.timeScale);
		const linearAxis = axisLeft()
			.scale(this.linearScale)
			.tickFormat(format('$,.3s'));
		// .tickFormat(t => `$${(t / 1000).toFixed(1)}k`);

		select(this.timeScaleContainer.current)
			.transition()
			.duration(800)
			.ease(easeCubicOut)
			.call(timeAxis);
		select(this.linearScaleContainer.current)
			.transition()
			.duration(800)
			.ease(easeCubicOut)
			.call(linearAxis);
	};

	renderLines = () => {
		const { data, extrapolate, inputColumn, outputColumn } = this.props;

		const areaFn = area()
			.curve(curveBasis)
			.x(d => this.timeScale(new Date(d[inputColumn])))
			.y0(this.linearScale.range()[0])
			.y1(d => this.linearScale(d[outputColumn]));

		select(this.originalArea.current)
			.transition()
			.duration(500)
			.ease(easeCubicOut)
			.attr('d', areaFn(data.get('original').toJS()));

		select(this.projectedArea.current)
			.transition()
			.duration(500)
			.ease(easeCubicOut)
			.attr(
				'd',
				areaFn(data.get('extrapolated', Immutable.List()).toJS()),
			)
			.attr('opacity', extrapolate ? 1 : 0);
	};

	render() {
		const { color } = this.props;

		const { data, extrapolate, inputColumn, outputColumn } = this.props;

		const originalDataByProperty = dataGroupedByProperty(
			data.get('original'),
		);
		const extrapolatedDataByProperty = dataGroupedByProperty(
			data.get('extrapolated', Immutable.List()),
		);
		const mergedDataByProperty = extrapolate
			? originalDataByProperty.map((d, property) =>
					d.concat(
						extrapolatedDataByProperty.get(
							property,
							Immutable.List(),
						),
					),
			  )
			: originalDataByProperty;

		this.timeScale
			.domain(
				extent(
					mergedDataByProperty
						.get(inputColumn) // Get reference to data
						.map(d => new Date(d)) // d3 timeScale accepts JS dates
						.toSet() // Ensure uniqueness
						.toJS(), // Make d3 understand it
				),
			)
			.range([MARGINS.left, WIDTH - MARGINS.right]);
		this.linearScale
			.domain(
				extent(
					mergedDataByProperty
						.get(outputColumn) // Get reference to data
						.push([0]) // Add 0 because we want this zero-based
						.toJS(), // Make d3 understand it
				),
			)
			.range([HEIGHT - MARGINS.bottom, MARGINS.top]);

		const operatingWidth = WIDTH - MARGINS.right - MARGINS.left;
		const operatingHeight = HEIGHT - MARGINS.bottom - MARGINS.top;

		return (
			<Svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
				<defs>
					<linearGradient
						id="original-gradient"
						x1="0%"
						y1="0%"
						x2="0%"
						y2="100%">
						<stop offset="0%" stopColor={color} />
						<stop
							offset="100%"
							stopColor={color}
							stopOpacity={0.1}
						/>
					</linearGradient>
					<linearGradient
						id="projection-gradient"
						x1="0%"
						y1="0%"
						x2="0%"
						y2="100%">
						<stop offset="0%" stopColor="#c6efef" />
						<stop
							offset="100%"
							stopColor="#c6efef"
							stopOpacity={0.2}
						/>
					</linearGradient>
				</defs>

				<OriginalArea innerRef={this.originalArea} />
				<ProjectedArea innerRef={this.projectedArea} />
				<g
					ref={this.linearScaleContainer}
					style={{
						transform: `translate(${this.timeScale(
							this.timeScale.domain()[0],
						)}px, 0)`, // Translate to the left by the 0th value on the timeScale
					}}
				/>
				<g
					ref={this.timeScaleContainer}
					style={{
						transform: `translate(0 ,${this.linearScale(
							this.linearScale.domain()[0],
						)}px)`, // Translate up by the 0th value on the linearScale
					}}
				/>
			</Svg>
		);
	}
}
