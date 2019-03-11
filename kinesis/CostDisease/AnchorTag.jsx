import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { linkShade } from 'helpers/palette';

import LinkSvg from 'svg/LinkSvg';

const AnchorTagContainer = styled.div``;

const StyledLinkSvg = styled(LinkSvg)`
	fill: ${props => props.color};

	&:hover {
		fill: ${props => linkShade(props.color)};
	}
`;

export default class AnchorTag extends React.Component {
	static displayName = 'AnchorTag';

	static propTypes = {
		className: PropTypes.string,
		color: PropTypes.string,
		link: PropTypes.string,
		style: PropTypes.object,
	};

	render() {
		return (
			<AnchorTagContainer
				className={this.props.className}
				style={this.props.style}>
				<a href={`#${this.props.link}`}>
					<StyledLinkSvg color={this.props.color} />
				</a>
			</AnchorTagContainer>
		);
	}
}
