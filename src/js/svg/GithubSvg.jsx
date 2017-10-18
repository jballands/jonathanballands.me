//
//	jballands/jonathanballands.me
//	GithubSvg.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';

export default class GithubSvg extends React.Component {
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
			<svg viewBox="0 0 37 31" {...this.props}>
				<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
					<path
						fill={this.props.color}
						d="M18.278,0C8.185,0,0,8.185,0,18.278c0,8.077,5.237,14.927,12.501,17.343
	c0.913,0.167,1.247-0.396,1.247-0.878c0-0.437-0.017-1.878-0.025-3.402c-5.083,1.104-6.158-2.157-6.158-2.157
	c-0.831-2.108-2.029-2.672-2.029-2.672c-1.66-1.134,0.125-1.112,0.125-1.112c1.835,0.129,2.802,1.885,2.802,1.885
	c1.63,2.793,4.279,1.985,5.318,1.518c0.167-1.179,0.64-1.987,1.16-2.442c-4.057-0.463-8.326-2.03-8.326-9.033
	c0-1.998,0.712-3.626,1.881-4.907c-0.187-0.463-0.816-2.324,0.18-4.839c0,0,1.533-0.49,5.027,1.874
	c1.457-0.407,3.021-0.608,4.574-0.615c1.554,0.007,3.118,0.21,4.576,0.617c3.487-2.366,5.024-1.874,5.024-1.874
	c0.999,2.519,0.369,4.375,0.181,4.837c1.173,1.28,1.88,2.909,1.88,4.907c0,7.021-4.274,8.567-8.346,9.019
	c0.658,0.568,1.24,1.68,1.24,3.384c0,2.442-0.024,4.413-0.024,5.016c0,0.486,0.333,1.055,1.258,0.876
	c7.258-2.42,12.489-9.27,12.489-17.343C36.556,8.185,28.373,0,18.278,0z"
					/>
				</g>
			</svg>
		);
	}
}
