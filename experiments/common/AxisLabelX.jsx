//
//	jballands/jonathanballands.me
//	AxisLabelX.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AxisLabelXContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const Children = styled.div`
	flex: 1 0;
	width: 100%;
	height: 100%;
`;

const Label = styled.div`
	padding-left: ${props => props.margins.left}px;
	padding-right: ${props => props.margins.right}px;
`;

export default class AxisLabelX extends React.Component {
	static displayName = 'AxisLabelX';

	static propTypes = {
		children: PropTypes.node,
		label: PropTypes.node,
		margins: PropTypes.object,
	};

	render() {
		return (
			<AxisLabelXContainer>
				<Children>{this.props.children}</Children>
				<Label margins={this.props.margins}>{this.props.label}</Label>
			</AxisLabelXContainer>
		);
	}
}
