//
//	jballands/jonathanballands.me
//	CollapseSvg.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';

import Svg from './Svg';

export default class CollapseSvg extends React.Component {
	static displayName = 'CollapseSvg';

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
			<Svg viewBox="0 0 16 16" version="1.1" {...this.props}>
				<g stroke="none" strokeWidth="1" fillRule="evenodd">
					<g fillRule="nonzero">
						<g transform="translate(7.835938, 8.556641) rotate(-90.000000) translate(-7.835938, -8.556641) translate(0.835938, 2.056641)">
							<polygon points="7.44979044 0 5.82141782 1.61750536 9.35384821 5.14993575 0 5.14993575 0 7.43320358 9.35384821 7.43320358 5.82141782 10.965634 7.44979044 12.5831393 13.7270611 6.29156966" />
						</g>
						<polygon points="0.3359375 1.55664062 15.3359375 1.55664062 15.3359375 0.0446524784 0.3359375 0.0446524784" />
					</g>
				</g>
			</Svg>
		);
	}
}
