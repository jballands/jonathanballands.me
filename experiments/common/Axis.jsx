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

export default class Axis extends React.Component {
	static displayName = 'Axis';

	static propTypes = {
		className: PropTypes.string,
		orientation: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
			.isRequired,
		scale: PropTypes.func.isRequired,
		style: PropTypes.object,
		tickSize: PropTypes.number,
		tickPadding: PropTypes.number,
		ticks: PropTypes.number,
	};

	static defaultProps = {
		tickSize: 6,
		tickPadding: 3,
		ticks: undefined,
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

	renderAxis = () => {
		const axis = this.determineOrientation()
			.scale(this.props.scale)
			.tickSize([this.props.tickSize])
			.tickPadding([this.props.tickPadding])
			.ticks(this.props.ticks);

		select(this.refs.axis).call(axis);
	};

	render() {
		return (
			<g
				ref="axis"
				className={this.props.className}
				style={this.props.style}
			/>
		);
	}
}
