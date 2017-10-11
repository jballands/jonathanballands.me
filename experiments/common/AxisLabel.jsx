//
//	jballands/jonathanballands.me
//	AxisLabel.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { max, min } from 'd3-array';

const Transformer = styled.g`
	transform: translate(
			${props => props.transMajor}px,
			${props => props.transMinor}px
		)
		rotate(${props => props.rotate}deg);
`;

export default class AxisLabel extends React.Component {
	static displayName = 'AxisLabel';

	static propTypes = {
		children: PropTypes.node,
		height: PropTypes.number,
		orientation: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
			.isRequired,
		scale: PropTypes.func,
		viewport: PropTypes.object,
	};

	calculateRotation = () => {
		switch (this.props.orientation) {
			case 'top':
			case 'bottom':
				return 0;
			case 'left':
				return 90;
			case 'right':
				return -90;
		}
	};

	render() {
		const { children, height, scale, viewport } = this.props;

		const range = scale.range();
		const biggest = max(range);
		const smallest = min(range);

		const major = (biggest - smallest) / 2;
		const minor = viewport.height - height;

		return (
			<Transformer
				transMajor={major}
				transMinor={minor}
				rotate={this.calculateRotation()}>
				{children}
			</Transformer>
		);
	}
}
