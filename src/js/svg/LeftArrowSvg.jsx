//
//	jballands/jonathanballands.me
//	LeftArrowSvg.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
	* {
		transition: fill 300ms ease;
	}
`;

export default class LeftArrowSvg extends React.Component {
	static displayName = 'LeftArrowSvg';

	static propTypes = {
		color: PropTypes.string,
		height: PropTypes.number,
		width: PropTypes.number,
	};

	static defaultProps = {
		color: 'white',
		width: 30,
		height: 30,
	};

	render() {
		return (
			<Svg
				width={this.props.width}
				height={this.props.height}
				viewBox="0 0 17 16"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg">
				<polygon
					fill={this.props.color}
					points="8.75274114 0 6.83957 1.90040322 10.9898141 6.05064731 0 6.05064731 0 8.73325327 10.9898141 8.73325327 6.83957 12.8834974 8.75274114 14.7839006 16.1278915 7.39195029"
					transform="rotate(180 8 7.5)"
				/>
			</Svg>
		);
	}
}
