//
//	jballands/jonathanballands.me
//	RightArrow.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';

import Svg from 'svg/Svg';

export default class RightArrow extends React.Component {
	static displayName = 'RightArrow';

	static propTypes = {
		color: PropTypes.string,
		rotate: PropTypes.number,
		width: PropTypes.number,
	};

	static defaultProps = {
		color: 'black',
		rotate: 0,
		width: 30,
	};

	render() {
		return (
			<Svg
				viewBox="0 0 24 24"
				version="1.1"
				{...this.props}
				transform={`rotate(${this.props.rotate})`}>
				<path d="M24 12l-9-8v6h-15v4h15v6z" />
			</Svg>
		);
	}
}
