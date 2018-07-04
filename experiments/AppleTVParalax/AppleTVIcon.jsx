//
//	jballands/jonathanballands.me
//	AppleTVIcon.jsx
//
//	© 2018 Jonathan Ballands
//

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Measure from 'react-measure';
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';
import { scaleLinear } from 'd3-scale';

const Root = styled.div`
	width: 320px;
	height: 190px;
	position: relative;
`;

const DropShadow = styled.div.attrs({
	style: props => ({
		boxShadow: `0px ${props.length}px ${
			props.spread
		}px 0px rgba(0,0,0,0.75)`,
	}),
})`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: transparent;
`;

const IconContainer = styled.div.attrs({
	style: props => ({
		transform: `rotateX(${props.rx}deg) rotateY(${props.ry}deg) scale3d(${
			props.scale
		}, ${props.scale}, ${props.scale})`,
	}),
})`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: red;
	border-radius: 5px;
	transform-style: preserve-3d;
`;

const Shine = styled.div.attrs({
	style: props => ({
		background: `radial-gradient(
			circle at ${props.sx}% ${props.sy}%,
			rgba(255, 255, 255, ${props.sb}),
			transparent
		)`,
	}),
})`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: 5px;
`;

const Shade = styled.div.attrs({
	style: props => ({
		background: `radial-gradient(
			circle at ${props.hx}% ${props.hy}%,
			rgba(0, 0, 0, ${props.hb}),
			transparent 135%
		)`,
	}),
})`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: 5px;
`;

const MOUSE_OFFSET = 0.52;

export default class AppleTVIcon extends PureComponent {
	static displayName = 'AppleTVIcon';

	static propTypes = {
		className: PropTypes.string,
		layers: PropTypes.arrayOf(PropTypes.node),
		style: PropTypes.object,
	};

	state = {
		isOver: false,
		dx: 0,
		dy: 0,
		rx: 0,
		ry: 0,
		sx: 0,
		sy: 0,
		sb: 0,
		hx: 0,
		hy: 0,
		hb: 0,
		width: 0,
		height: 0,
	};

	root = React.createRef();

	getCalculations = ({ pageX, pageY }) => {
		const offsets = this.root.current.getBoundingClientRect();
		const raw = {
			x: pageX - offsets.left - MOUSE_OFFSET,
			y: pageY - offsets.top - MOUSE_OFFSET,
		};
		// const center = {
		// 	x: raw.x / 2,
		// 	y: raw.y / 2,
		// };

		// const dx = raw.x - center.x;
		// const dy = raw.y - center.y;

		const { width, height } = this.state;

		// These values calculate the rotation angle of the icon
		const rotateScaleX = scaleLinear()
			.domain([0, height])
			.range([-12, 12]);
		const rotateScaleY = scaleLinear()
			.domain([0, width])
			.range([12, -12]);

		const shineScaleX = scaleLinear()
			.domain([0, width])
			.range([0, 100]);
		const shineScaleY = scaleLinear()
			.domain([0, height / 1.5, height])
			.range([5, 25, 100])
			.clamp(true);
		const shineScaleBrightness = scaleLinear()
			.domain([height, 0])
			.range([0, 0.6]);

		const shadowScaleX = scaleLinear()
			.domain([0, width])
			.range([0, 100]);
		const shadowScaleY = scaleLinear()
			.domain([0, height / 1.5, height])
			.range([0, 100, 100])
			.clamp(true);
		const shadowScaleDarkness = scaleLinear()
			.domain([height / 1.5, height])
			.range([0, 0.35]);

		return {
			dx: raw.x,
			dy: raw.y,
			rx: rotateScaleX(raw.y),
			ry: rotateScaleY(raw.x),
			sx: shineScaleX(raw.x),
			sy: shineScaleY(raw.y),
			sb: shineScaleBrightness(raw.y),
			hx: shadowScaleX(raw.x),
			hy: shadowScaleY(raw.y),
			hb: shadowScaleDarkness(raw.y),
		};
	};

	onMeasure = ({ bounds: { width, height } }) => {
		this.setState({
			width,
			height,
		});
	};

	onEnter = e => {
		const calcs = this.getCalculations(e);

		this.setState({
			isOver: true,
			...calcs,
		});
	};

	onMove = e => {
		const calcs = this.getCalculations(e);

		this.setState({
			...calcs,
		});
	};

	onLeave = () => {
		this.setState({
			isOver: false,
		});
	};

	onMouseEnter = e => {
		this.onEnter(e);
	};

	onMouseMove = e => {
		this.onMove(e);
	};

	onMouseLeave = () => {
		this.onLeave();
	};

	onTouchStart = () => {
		this.onEnter();
	};

	onTouchMove = () => {};

	onTouchEnd = () => {
		this.onLeave();
	};

	render() {
		const { className, style } = this.props;
		const { isOver, rx, ry, sx, sy, sb, hx, hy, hb } = this.state;

		const styles = {
			scale: isOver ? spring(1.1) : spring(1),
			rx: isOver ? spring(rx) : spring(0),
			ry: isOver ? spring(ry) : spring(0),
			sx: isOver ? spring(sx) : spring(50),
			sy: isOver ? spring(sy) : spring(0),
			sb: isOver ? spring(sb) : spring(0),
			hx: isOver ? spring(hx) : spring(50),
			hy: isOver ? spring(hy) : spring(100),
			hb: isOver ? spring(hb) : spring(0),
			shadowLength: isOver ? spring(25) : spring(0),
			shadowSpread: isOver ? spring(45) : spring(0),
		};

		return (
			<Root
				className={className}
				style={style}
				onMouseEnter={this.onMouseEnter}
				onMouseMove={this.onMouseMove}
				onMouseLeave={this.onMouseLeave}
				onTouchStart={this.onTouchStart}
				onTouchMove={this.onTouchMove}
				onTouchEnd={this.onTouchEnd}
				innerRef={this.root}>
				<Motion style={styles}>
					{interpolated => (
						<Fragment>
							<DropShadow
								length={interpolated.shadowLength}
								spread={interpolated.shadowSpread}
							/>
							<Measure bounds onResize={this.onMeasure}>
								{({ measureRef }) => (
									<IconContainer
										scale={interpolated.scale}
										rx={interpolated.rx}
										ry={interpolated.ry}
										innerRef={measureRef}>
										<Shine
											sx={interpolated.sx}
											sy={interpolated.sy}
											sb={interpolated.sb}
										/>
										<Shade
											hx={interpolated.hx}
											hy={interpolated.hy}
											hb={interpolated.hb}
										/>
									</IconContainer>
								)}
							</Measure>
						</Fragment>
					)}
				</Motion>
			</Root>
		);
	}
}
