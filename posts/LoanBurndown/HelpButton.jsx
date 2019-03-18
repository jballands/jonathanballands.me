//
//	jballands/jonathanballands.me
//	HelpButton.jsx
//
//	© 2018 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HelpSvg from 'svg/HelpSvg';
import { linkShade } from 'helpers/palette';

const HelpButtonContainer = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;
	font-style: italic;
	color: ${props => props.color};
	align-self: center;

	svg {
		fill: ${props => props.color};
		margin-right: 7px;
	}

	&:hover {
		color: ${props => linkShade(props.color)};

		svg {
			fill: ${props => linkShade(props.color)};
			margin-right: 7px;
		}

		cursor: pointer;
	}
`;

export default class HelpButton extends React.Component {
	static displayName = 'HelpButton';

	static propTypes = {
		color: PropTypes.string,
		onClick: PropTypes.func,
	};

	render() {
		<HelpButtonContainer color={this.props.color}>
			<HelpSvg width={22} height={22} />Help
		</HelpButtonContainer>;
	}
}
