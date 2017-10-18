//
//	jballands/jonathanballands.me
//	CollapseSvg.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
	* {
		transition: fill 300ms ease;
	}
`;

export default class CollapseSvg extends React.Component {
	static displayName = 'CollapseSvg';

	static propTypes = {
		color: PropTypes.string,
		height: PropTypes.number,
		width: PropTypes.number,
	};

	static defaultProps = {
		color: 'white',
		width: 30,
		height: 30,
	};

	render() {
		return (
			<Svg viewBox="0 0 18 17" version="1.1" {...this.props}>
				<g
					transform="translate(8.835938, 9.056641) rotate(270.000000) translate(-8.835938, -9.056641) translate(1.835938, 2.556641)"
					fillRule="nonzero"
					fill={this.props.color}>
					<polygon points="7.44979044 0 5.82141782 1.61750536 9.35384821 5.14993575 0 5.14993575 0 7.43320358 9.35384821 7.43320358 5.82141782 10.965634 7.44979044 12.5831393 13.7270611 6.29156966" />
				</g>
				<path
					d="M1.3359375,1.05664062 L16.3359375,1.05664062"
					stroke={this.props.color}
					strokeWidth="2"
					strokeLinecap="square"
				/>
			</Svg>
		);
	}
}
