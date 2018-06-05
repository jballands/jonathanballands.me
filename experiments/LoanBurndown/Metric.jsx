//
//	jballands/jonathanballands.me
//	Metric.jsx
//
//	© 2018 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import styled from 'styled-components';

const MetricContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
`;

const Title = styled.div`
	font-size: 18px;
	margin-bottom: 5px;
`;

const Value = styled.div.attrs({
	style: props => ({
		fontSize: props.fontSize,
	}),
})``;

export default class Metric extends React.Component {
	static displayName = 'Metric';

	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object,
		size: PropTypes.oneOf(['big', 'small']),
		title: PropTypes.string,
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	};

	render() {
		const { size, title, value, style, className } = this.props;

		return (
			<MetricContainer className={className} style={style}>
				{title && <Title>{title}</Title>}
				{value && <Value fontSize="48px">{value}</Value>}
			</MetricContainer>
		);
	}
}
