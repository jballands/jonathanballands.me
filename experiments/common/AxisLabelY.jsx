//
//	jballands/jonathanballands.me
//	AxisLabelX.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AxisLabelYContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const Children = styled.div`
	flex: 1 0;
	width: 100%;
	height: 100%;
`;

const LabelLeft = styled.div`
	transform: rotate(-90deg);
	padding-right: ${props => props.margins.top}px;
	padding-left: ${props => props.margins.bottom}px;
`;

const LabelRight = styled.div`transform: rotate(90deg);`;

export default class AxisLabelX extends React.Component {
	static displayName = 'AxisLabelX';

	static propTypes = {
		children: PropTypes.node,
		label: PropTypes.node,
		margins: PropTypes.object,
		orientation: PropTypes.oneOf(['left', 'right']),
	};

	render() {
		return (
			<AxisLabelYContainer>
				{this.props.orientation === 'left' && (
					<LabelLeft margins={this.props.margins}>
						{this.props.label}
					</LabelLeft>
				)}
				<Children>{this.props.children}</Children>
				{this.props.orientation === 'right' && (
					<LabelRight margins={this.props.margins}>
						{this.props.label}
					</LabelRight>
				)}
			</AxisLabelYContainer>
		);
	}
}
