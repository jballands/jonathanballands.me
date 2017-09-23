//
//	jballands/jonathanballands.me
//	LinkSvg.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';

export default class LinkSvg extends React.Component {
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
			<svg
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="0 0 91 91"
				width={this.props.width}
				height={this.props.height}>
				<polyline
					style={style}
					points="88.5,67.8 88.5,88.5 2.5,88.5 2.5,2.5 24.2,2.5 "
				/>
				<polyline style={style} points="45.5,2.5 88.5,2.5 88.5,45.5 " />
				<line style={style} x1="88.5" y1="2.5" x2="45.5" y2="45.5" />
			</svg>
		);
	}
}
