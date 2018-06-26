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
	color: #000;
`;

const Value = styled.div.attrs({
	style: props => ({
		fontSize: props.fontSize,
		opacity: props.opacity,
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
		size: PropTypes.oneOf(['big', 'small', 'none']),
		title: PropTypes.string,
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	};

	render() {
		const { color, size, title, value, style, className } = this.props;

		let styles;
		switch (size) {
			case 'big':
				styles = { fontSize: spring(48), opacity: spring(1) };
				break;

			case 'small':
				styles = {
					fontSize: spring(18),
					opacity: spring(1),
				};
				break;

			case 'none':
				styles = { fontSize: spring(48), opacity: spring(0) };
				break;
		}

		const valueColor = size === 'big' ? color : 'black';

		return (
			<MetricContainer className={className} style={style}>
				<Motion style={styles}>
					{interpolated => (
						<div style={{ opacity: interpolated.opacity }}>
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
