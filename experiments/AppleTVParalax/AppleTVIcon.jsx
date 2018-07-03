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
		}px 0px rgba(0,0,0,0.75)`,
	}),
})`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
`;

const Shine = styled.div.attrs({})`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: 5px;
	background: linear-gradient(
		135deg,
		rgba(255, 255, 255, 0.6) 0%,
		rgba(255, 255, 255, 0) 60%
	);
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

		const dx = raw.x - center.x;
		const dy = raw.y - center.y;
		const arad = Math.atan2(dy, dx);
		const rawAngle = (arad * 180) / Math.PI - 90;
		const angle = rawAngle < 0 ? rawAngle + 360 : rawAngle;

		const rotateScaleX = scaleLinear()
			.domain([0, 190])
			.range([25, -25]);
		const rotateScaleY = scaleLinear()
			.domain([0, 320])
			.range([25, -25]);

		return {
			dx,
			dy,
			rx: rotateScaleX(raw.y),
			ry: rotateScaleY(raw.x),
			angle,
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
		const { dx, dy, isOver, rx, ry } = this.state;

		const styles = {
			scale: isOver ? spring(1.1) : spring(1),
			rx: isOver ? spring(rx) : spring(0),
			ry: isOver ? spring(ry) : spring(0),
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
								<Shine dx={dx} dy={dy} />
							</IconContainer>
						</Fragment>
					)}
				</Motion>
			</Root>
		);
	}
}
