//
//	jballands/jonathanballands.me
//	Multiply.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';

import Svg from 'svg/Svg';

export default class Multiply extends React.Component {
	static displayName = 'Multiply';

	static propTypes = {
		color: PropTypes.string,
		height: PropTypes.number,
		width: PropTypes.number,
	};

	static defaultProps = {
		color: 'black',
		width: 30,
		height: 30,
	};

	render() {
		return (
			<Svg viewBox="0 0 24 24" version="1.1" {...this.props}>
				<path
					d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
					fill={this.props.color}
				/>
			</Svg>
		);
	}
}
