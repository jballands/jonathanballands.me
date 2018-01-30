//
//	jballands/jonathanballands.me
//	OpenDrawerSvg.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';

import Svg from './Svg';

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
			<Svg viewBox="0 0 25 22" version="1.1" {...this.props}>
				<g fillRule="evenodd">
					<path
						d="M10.0537109,0.8203125 L10.0537109,21.8203125 L0.05371094,21.8203125 L0.05371094,0.8203125 L10.0537109,0.8203125 Z M1.7179362,2.47998047 L1.7179362,20.1373698 L8.36295573,20.1373698 L8.36295573,2.47998047 L1.7179362,2.47998047 Z"
						fillRule="nonzero"
					/>
					<polygon
						fillRule="nonzero"
						points="19.1007938 6.32563942 17.8099501 7.60786848 20.6101788 10.4080972 13.195195 10.4080972 13.195195 12.2180895 20.6101788 12.2180895 17.8099501 15.0183182 19.1007938 16.3005473 24.0769127 11.3130934"
					/>
				</g>
			</Svg>
		);
	}
}
