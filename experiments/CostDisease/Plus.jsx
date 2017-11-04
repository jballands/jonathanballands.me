//
//	jballands/jonathanballands.me
//	Plus.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';

import Svg from 'svg/Svg';

export default class Plus extends React.Component {
	static displayName = 'Plus';

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
					d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"
					fill={this.props.color}
				/>
			</Svg>
		);
	}
}
