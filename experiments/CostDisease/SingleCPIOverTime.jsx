//
//	jballands/jonathanballands.me
//	SingleCPIOverTime.jsx
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

export default class SingleCPIOverTime extends React.Component {
	static displayName = 'SingleCPIOverTime';

	static propTypes = {
		data: PropTypes.array,
		primaryColor: PropTypes.string,
		range: PropTypes.array,
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
		const { data, primaryColor, range } = this.props;

		const x = scaleTime().range([0, DIMENSIONS.width]);
		const y = scaleLinear().range([0, -DIMENSIONS.height + MARGINS.top]);

		const lineFn = line()
			.curve(curveBasis)
			.x(d => x(this.stringToDate(d.Label)))
			.y(d => y(d.Value));

		x.domain(extent(data, d => this.stringToDate(d.Label))).nice();
		y.domain(range);

		return (
			<CPIOverTimeContainer>
				<Svg viewBox={`0 0 ${VIEWBOX.width} ${VIEWBOX.height}`}>
					<GraphContainer>
						<StyledAxis
							color={primaryColor}
							scale={x}
							orientation="bottom"
							numberOfTicks={6}
							label="← Time →"
						/>
						<StyledAxis
							color={primaryColor}
							scale={y}
							orientation="left"
							numberOfTicks={6}
							label="← CPI →"
						/>

						<path
							d={lineFn(data)}
							stroke={primaryColor}
							fill="transparent"
							strokeWidth={1}
						/>
					</GraphContainer>
				</Svg>
			</CPIOverTimeContainer>
		);
	}
}
