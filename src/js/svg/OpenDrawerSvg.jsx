//
//	jballands/jonathanballands.me
//	OpenDrawerSvg.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';

export default class OpenDrawerSvg extends React.Component {
	static displayName = 'OpenDrawerSvg';

	static propTypes = {
		color: PropTypes.string,
		height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		strokeWidth: PropTypes.number,
		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	};

	static defaultProps = {
		color: '#fff',
		strokeWidth: 2,
		width: 35,
		height: 35,
	};

	render() {
		return (
			<svg
				width="26px"
				height="23px"
				viewBox="0 0 26 23"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width={this.props.width}
				height={this.props.height}>
				<rect
					stroke={this.props.color}
					strokeWidth={this.props.strokeWidth}
					fill="transparent"
					x="1.55371094"
					y="1.3203125"
					width="9"
					height="20"
				/>
				<g
					transform="translate(13.553711, 6.320312)"
					fillRule="nonzero"
					fill={this.props.color}>
					<polygon
						id="Shape"
						points="6.54708284 0.00532741547 5.25623908 1.28755648 8.05646776 4.08778517 0.641483974 4.08778517 0.641483974 5.89777754 8.05646776 5.89777754 5.25623908 8.69800622 6.54708284 9.98023529 11.5232017 4.99278135"
					/>
				</g>
			</svg>
		);
	}
}
