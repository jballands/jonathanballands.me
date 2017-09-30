//
//	jballands/jonathanballands.me
//	MagnifyingGlassSvg.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';

export default class MagnifyingGlassSvg extends React.Component {
	static displayName = 'MagnifyingGlassSvg';

	static propTypes = {
		color: PropTypes.string,
		height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	};

	static defaultProps = {
		color: '#fff',
		width: 30,
		height: 30,
	};

	render() {
		return (
			<svg
				width={this.props.width}
				height={this.props.height}
				viewBox="0 0 25 25"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg">
				<path
					fill={this.props.color}
					d="M24.7972812,21.8920938 L18.5922812,15.6870938 C19.7592812,14.0820938 20.4492812,12.1080938 20.4492812,9.97609375 C20.4492812,4.61109375 16.0842812,0.24609375 10.7182812,0.24609375 C5.35328125,0.24609375 0.98828125,4.61109375 0.98828125,9.97609375 C0.98828125,15.3420938 5.35328125,19.7060938 10.7182812,19.7060938 C12.7522812,19.7060938 14.6412812,19.0790938 16.2052812,18.0080938 L22.4432812,24.2460938 L24.7972812,21.8920938 L24.7972812,21.8920938 Z M3.84228125,9.97609375 C3.84228125,6.18409375 6.92728125,3.09909375 10.7192813,3.09909375 C14.5112812,3.09909375 17.5962813,6.18409375 17.5962813,9.97609375 C17.5962813,13.7680938 14.5112812,16.8530937 10.7192813,16.8530937 C6.92628125,16.8530937 3.84228125,13.7680937 3.84228125,9.97609375 L3.84228125,9.97609375 Z"
				/>
			</svg>
		);
	}
}
