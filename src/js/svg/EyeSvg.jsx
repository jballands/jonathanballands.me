//
//	jballands/jonathanballands.me
//	EyeSvg.jsx
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

export default class EyeSvg extends React.Component {
	static displayName = 'EyeSvg';

	static propTypes = {
		color: PropTypes.string,
		height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	};

	static defaultProps = {
		color: '#fff',
		width: 35,
		height: 35,
	};

	render() {
		return (
			<Svg
				width={this.props.width}
				height={this.props.height}
				viewBox="0 0 17 11"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg">
				<path
					fill={this.props.color}
					d="M8.32484619,1.38574219 C11.6166768,1.38574219 13.9114658,3.47266992 14.9098931,4.59789258 C13.9391807,5.87069678 11.6443916,8.31445313 8.32484619,8.31445313 C5.26235596,8.31445313 2.83037842,5.86446094 1.75781396,4.56809912 C2.79227051,3.42694043 5.09537402,1.38574219 8.32484619,1.38574219 L8.32484619,1.38574219 Z M8.32484619,0 C3.08050488,0 0,4.53899854 0,4.53899854 C0,4.53899854 3.35003174,9.70019531 8.32484619,9.70019531 C13.6828184,9.70019531 16.6289062,4.53899854 16.6289062,4.53899854 C16.6289062,4.53899854 13.6557964,0 8.32484619,0 Z M8.31445312,4.85009766 L5.98640625,3.34587451 C5.70579346,3.77891895 5.54296875,4.29580078 5.54296875,4.85009766 C5.54296875,6.3806499 6.78390088,7.62158203 8.31445312,7.62158203 C9.84500537,7.62158203 11.0859375,6.3806499 11.0859375,4.85009766 C11.0859375,3.31954541 9.84500537,2.07861328 8.31445312,2.07861328 C7.80034277,2.07861328 7.31810449,2.21857324 6.90584619,2.46246387 L8.31445312,4.85009766 Z"
				/>
			</Svg>
		);
	}
}
