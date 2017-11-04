//
//	jballands/jonathanballands.me
//	LinkedInSvg.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';

import Svg from './Svg';

export default class LinkedInSvg extends React.Component {
	static propTypes = {
		color: PropTypes.string,
		height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	};

	static defaultProps = {
		color: '#fff',
		width: 15,
		height: 15,
	};

	render() {
		return (
			<Svg viewBox="0 0 37 31" {...this.props}>
				<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<path
						d="M30.9538832,0 L2.46908801,0 C1.1057132,0 0,1.07933839 0,2.40957562 L0,31.2277754 C0,32.5573364 1.1057132,33.6366748 2.46908801,33.6366748 L30.9538832,33.6366748 C32.3192868,33.6366748 33.425,32.5566601 33.425,31.2277754 L33.425,2.40957562 C33.425,1.07866211 32.3186105,0 30.9538832,0 L30.9538832,0 Z M10.1313085,28.1581533 L5.08289934,28.1581533 L5.08289934,12.9696439 L10.1313085,12.9696439 L10.1313085,28.1581533 L10.1313085,28.1581533 Z M7.60744208,10.8948255 L7.57362822,10.8948255 C5.88023015,10.8948255 4.7846611,9.72824734 4.7846611,8.27087001 C4.7846611,6.78103136 5.91404401,5.64691452 7.64057967,5.64691452 C9.3677916,5.64691452 10.4302231,6.78103136 10.4640369,8.27087001 C10.4640369,9.72824734 9.36711533,10.8948255 7.60744208,10.8948255 L7.60744208,10.8948255 Z M28.3360142,28.1581533 L23.287605,28.1581533 L23.287605,20.030654 C23.287605,17.9896495 22.5572256,16.5965185 20.7306009,16.5965185 C19.3361173,16.5965185 18.505649,17.5358675 18.139783,18.4434315 C18.0065564,18.7673682 17.9740951,19.220474 17.9740951,19.6749322 L17.9740951,28.157477 L12.9256859,28.157477 C12.9256859,28.157477 12.9919611,14.3925311 12.9256859,12.9689676 L17.9740951,12.9689676 L17.9740951,15.1188528 C18.6449621,14.0841487 19.8446778,12.6105407 22.5247643,12.6105407 C25.8459616,12.6105407 28.3366904,14.7820668 28.3366904,19.4477031 L28.3366904,28.1581533 L28.3360142,28.1581533 Z"
						fill={this.props.color}
					/>
				</g>
			</Svg>
		);
	}
}
