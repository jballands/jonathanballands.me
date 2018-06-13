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
	font-size: 16px;
	margin-bottom: 5px;
	color: #606060;
`;

const Value = styled.div.attrs({
	style: props => ({
		fontSize: props.fontSize,
	}),
})`
	transition: color 300ms;
	color: ${props => props.color};
`;

export default class Metric extends React.Component {
	static displayName = 'Metric';

	static propTypes = {
		className: PropTypes.string,
		color: PropTypes.stirng,
		style: PropTypes.object,
		size: PropTypes.oneOf(['big', 'small']),
		title: PropTypes.string,
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	};

	render() {
		const { color, size, title, value, style, className } = this.props;

		const styles = {
			fontSize: size === 'big' ? spring(48) : spring(18),
		};

		const valueColor = size === 'big' ? color : 'black';

		return (
			<MetricContainer className={className} style={style}>
				<Motion style={styles}>
					{interpolated => (
						<div>
							{title && <Title>{title}</Title>}
							{value && (
								<Value
									color={valueColor}
									fontSize={`${interpolated.fontSize}px`}>
									{value}
								</Value>
							)}
						</div>
					)}
				</Motion>
			</MetricContainer>
		);
	}
}
