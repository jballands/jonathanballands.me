//
//	jballands/jonathanballands.me
//	KinesisHelpIcon.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HelpSvg from 'svg/HelpSvg';

const StyledLink = styled(Link)``;

export default class KinesisHelpIcon extends React.Component {
	static displayName = 'KinesisHelpIcon';

	static propTypes = {
		closeDrawer: PropTypes.func,
		color: PropTypes.string,
		linkTo: PropTypes.string,
		onClick: PropTypes.func,
	};

	handleOnClick = () => {
		const { closeDrawer, onClick } = this.props;
		closeDrawer && closeDrawer();
		onClick && onClick();
	};

	render() {
		return (
			<StyledLink to={this.props.linkTo} onClick={this.handleOnClick}>
				<HelpSvg width={20} height={20} color={this.props.color} />
			</StyledLink>
		);
	}
}
