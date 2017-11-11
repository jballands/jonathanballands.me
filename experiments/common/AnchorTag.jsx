import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LinkSvg from 'svg/LinkSvg';

const AnchorTagContainer = styled.div``;

export default class AnchorTag extends React.Component {
	static displayName = 'AnchorTag';

	static propTypes = {
		className: PropTypes.string,
		color: PropTypes.string,
		id: PropTypes.string,
		style: PropTypes.object,
	};

	render() {
		return (
			<AnchorTagContainer
				className={this.props.className}
				style={this.props.style}>
				<a href={`#${this.props.id}`}>
					<LinkSvg color={this.props.color} />
				</a>
			</AnchorTagContainer>
		);
	}
}
