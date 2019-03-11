//
//	jballands/jonathanballands.me
//	Axis.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { axisLeft, axisRight, axisTop, axisBottom } from 'd3-axis';
import { select } from 'd3-selection';
import styled from 'styled-components';

const AxisContainer = styled.g`
	.axis-label {
		font-size: 9px;
	}

	text {
		font-size: 10px;
		font-family: Bodytext;
	}
`;

export default class Axis extends React.Component {
	static displayName = 'Axis';

	static propTypes = {
		className: PropTypes.string,
		label: PropTypes.string,
		labelPadding: PropTypes.number,
		orientation: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
			.isRequired,
		numberOfTicks: PropTypes.number,
		rotateTicks: PropTypes.number,
		scale: PropTypes.func.isRequired,
		style: PropTypes.object,
		tickFormatter: PropTypes.func,
		tickSize: PropTypes.number,
		tickPadding: PropTypes.number,
		ticks: PropTypes.number,
	};

	static defaultProps = {
		labelPadding: 15,
		tickSize: 6,
		tickPadding: 3,
	};

	componentDidMount() {
		this.renderAxis();
	}

	componentDidUpdate() {
		this.renderAxis();
	}

	determineOrientation = () => {
		switch (this.props.orientation) {
			case 'bottom':
				return axisBottom();
			case 'left':
				return axisLeft();
			case 'top':
				return axisTop();
			case 'right':
				return axisRight();
			default:
				return null;
		}
	};

	labelTransformWithDimensions = dimensions => {
		const { labelPadding, orientation } = this.props;

		let xTransform, yTransform, rotate;

		if (orientation === 'bottom' || orientation === 'top') {
			rotate = 0;
			xTransform = dimensions.width / 2;

			if (orientation === 'top') {
				yTransform = -dimensions.height - labelPadding;
			} else {
				yTransform = dimensions.height + labelPadding;
			}
		} else {
			yTransform = -dimensions.height / 2;

			if (orientation === 'left') {
				rotate = -90;
				xTransform = -dimensions.width - labelPadding;
			} else {
				rotate = 90;
				xTransform = dimensions.width + labelPadding;
			}
		}

		return `translate(${xTransform},${yTransform})rotate(${rotate})`;
	};

	renderAxis = () => {
		const {
			label,
			scale,
			tickSize,
			tickPadding,
			ticks,
			numberOfTicks,
		} = this.props;

		const axis = this.determineOrientation()
			.scale(scale)
			.tickSize([tickSize])
			.tickPadding([tickPadding])
			.ticks(ticks)
			.tickArguments([numberOfTicks]);

		const axisDimensions = select(this.refs.axis)
			.call(axis)
			.node()
			.getBBox();

		select(this.refs.axisLabel)
			.append('text')
			.attr('text-anchor', 'middle')
			.attr(
				'transform',
				this.labelTransformWithDimensions(axisDimensions),
			)
			.text(label);
	};

	render() {
		return (
			<AxisContainer
				ref="axisContainer"
				className={this.props.className}
				style={this.props.style}>
				<g ref="axis" />
				<g ref="axisLabel" className="axis-label" />
			</AxisContainer>
		);
	}
}
