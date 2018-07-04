//
//	jballands/jonathanballands.me
//	AppleTVIcon.jsx
//
//	© 2018 Jonathan Ballands
//

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';
import { scaleLinear } from 'd3-scale';

const Root = styled.div`
	width: 320px;
	height: 190px;
	position: relative;
`;

const IconContainer = styled.div.attrs({
	style: props => ({
		transform: `rotateX(${props.rx}deg) rotateY(${props.ry}deg) scale3d(${
			props.scale
		}, ${props.scale}, ${props.scale})`,
		boxShadow: `0px ${props.length}px ${
			props.spread
		}px 0px rgba(0,0,0,0.75)`,
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

const Shadow = styled.div.attrs({
	style: props => ({
		boxShadow: `0px ${props.length}px ${
			props.spread
		}px 0px rgba(0,0,0,0.6)`,
	}),
})`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
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

const Shine = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: 5px;
	linear-gradient: ;
`;

const MOUSE_OFFSET = 0.52;

export default class AppleTVIcon extends Component {
	static displayName = 'AppleTVIcon';

	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object,
	};

	state = {
		isOver: false,
		dx: 0,
		dy: 0,
		rx: 0,
		ry: 0,
		angle: 0,
	};

	root = React.createRef();

	getCalculations = ({ pageX, pageY }) => {
		const offsets = this.root.current.getBoundingClientRect();
		const raw = {
			x: pageX - offsets.left - MOUSE_OFFSET,
			y: pageY - offsets.top - MOUSE_OFFSET,
		};
		const center = {
			x: raw.x / 2,
			y: raw.y / 2,
		};

		// const dx = raw.x - center.x;
		// const dy = raw.y - center.y;

		// These values calculate the rotation angle of the icon
		const rotateScaleX = scaleLinear()
			.domain([0, 190])
			.range([-15, 15]);
		const rotateScaleY = scaleLinear()
			.domain([0, 320])
			.range([15, -15]);

		const shineScaleX = scaleLinear()
			.domain([0, 320])
			.range([0, 100]);
		const shineScaleY = scaleLinear()
			.domain([0, 160, 320])
			.range([25, 25, 100])
			.clamp(true);
		const shineScaleBrightness = scaleLinear()
			.domain([160, 0])
			.range([0, 0.6]);

		const shadowScaleDarkness = scaleLinear()
			.domain([150, 190])
			.range([0, 0.6]);

		return {
			dx: raw.x,
			dy: raw.y,
			rx: rotateScaleX(raw.y),
			ry: rotateScaleY(raw.x),
			sx: shineScaleX(raw.x),
			sy: shineScaleY(raw.y),
			sb: shineScaleBrightness(raw.y),
			sd: shadowScaleDarkness(raw.y),
		};
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
		const { dx, isOver, rx, ry, sx, sy, sb, sd } = this.state;

		const styles = {
			scale: isOver ? spring(1.1) : spring(1),
			rx: isOver ? spring(rx) : spring(0),
			ry: isOver ? spring(ry) : spring(0),
			sx: isOver ? spring(sx) : spring(0),
			sy: isOver ? spring(sy) : spring(0),
			sb: isOver ? spring(sb) : spring(0),
			sd: isOver ? spring(sd) : spring(0),
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
							<IconContainer
								scale={interpolated.scale}
								rx={interpolated.rx}
								ry={interpolated.ry}
								length={interpolated.shadowLength}
								spread={interpolated.shadowSpread}>
								<Shine
									sx={interpolated.sx}
									sy={interpolated.sy}
									sb={interpolated.sb}
								/>
								<Shade sd={interpolated.sd} />
							</IconContainer>
						</Fragment>
					)}
				</Motion>
			</Root>
		);
	}
}
