//
//	jballands/jonathanballands.me
//	LeftArrowSvg.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';

import Svg from './Svg';

export default class LeftArrowSvg extends React.Component {
	static displayName = 'LeftArrowSvg';

	static propTypes = {
		height: PropTypes.number,
		width: PropTypes.number,
	};

	static defaultProps = {
		width: 30,
		height: 30,
	};

	render() {
		return (
			<Svg viewBox="0 0 17 16" version="1.1" {...this.props}>
				<polygon
					points="8.75274114 0 6.83957 1.90040322 10.9898141 6.05064731 0 6.05064731 0 8.73325327 10.9898141 8.73325327 6.83957 12.8834974 8.75274114 14.7839006 16.1278915 7.39195029"
					transform="rotate(180 8 7.5)"
				/>
			</Svg>
		);
	}
}
