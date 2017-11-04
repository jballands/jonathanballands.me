//
//	jballands/jonathanballands.me
//	LinkSvg.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';

import Svg from './Svg';

export default class LinkSvg extends React.Component {
	static displayName = 'LinkSvg';

	static propTypes = {
		color: PropTypes.string,
		height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		strokeWidth: PropTypes.number,
		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	};

	static defaultProps = {
		color: '#fff',
		strokeWidth: 18,
		width: 15,
		height: 15,
	};

	render() {
		const style = {
			fill: 'none',
			stroke: this.props.color,
			strokeWidth: this.props.strokeWidth,
			strokeMiterlimit: this.props.strokeWidth,
		};

		return (
			<Svg
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="0 0 91 91"
				{...this.props}>
				<polyline
					style={style}
					points="88.5,67.8 88.5,88.5 2.5,88.5 2.5,2.5 24.2,2.5 "
				/>
				<polyline style={style} points="45.5,2.5 88.5,2.5 88.5,45.5 " />
				<line style={style} x1="88.5" y1="2.5" x2="45.5" y2="45.5" />
			</Svg>
		);
	}
}
