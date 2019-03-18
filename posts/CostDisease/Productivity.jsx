//
//	jballands/jonathanballands.me
//	Productivity.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { scaleLinear } from 'd3-scale';
import Slider from '@jballands/vespyr/lib/Slider';

import Arrow from './Arrow';

const ProductivityContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
`;

const IOControls = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

const RightArrow = styled(Arrow)`
	margin: 0 30px;
	max-width: 35px;
`;

const DownArrow = styled(Arrow)`
	margin: 25px 0;
	fill: ${props => props.color};
`;

const AnonTitle = styled.div`
	margin: 10px 0;
	font-size: 14px;
	text-transform: uppercase;
`;

const ProductivityBarContainer = styled.div`
	margin-top: 10px;
	max-width: 500px;
	width: 100%;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	font-size: 10px;
	text-transform: uppercase;

	span {
		margin: 0 5px;
	}
`;

const ProductivityBarOutline = styled.div`
	border: 1px solid black;
	padding: 2px;
	width: 100%;
	display: inline-block;
`;

const ProductivityBar = styled.div`
	width: ${props => props.width}%;
	height: 10px;
	background: ${props => props.color};
	transition: width 500ms ease;
`;

export default class Productivity extends React.Component {
	static displayName = 'Productivity';

	static propTypes = {
		primaryColor: PropTypes.string,
	};

	state = {
		input: 5,
		output: 5,
	};

	onInputSliderChange = val => {
		this.setState({
			input: val,
		});
	};

	onOutputSliderChange = val => {
		this.setState({
			output: val,
		});
	};

	formatValue = val => {
		if (val === 1) {
			return '1 unit';
		}
		return `${val} units`;
	};

	render() {
		const p = scaleLinear()
			.domain([0.1, 10])
			.range([1, 100])
			.clamp(true);

		return (
			<ProductivityContainer>
				<IOControls>
					<Slider
						accentColor="#5cdb71"
						min={1}
						max={10}
						title="Input"
						formatter={this.formatValue}
						value={this.state.input}
						onChange={this.onInputSliderChange}
						leftLabel="Less"
						rightLabel="More"
					/>
					<RightArrow />
					<Slider
						accentColor="#6bbbff"
						min={1}
						max={10}
						title="Output"
						formatter={this.formatValue}
						value={this.state.output}
						onChange={this.onOutputSliderChange}
						leftLabel="Less"
						rightLabel="More"
					/>
				</IOControls>

				<DownArrow
					rotate="90deg"
					width={50}
					color={this.props.primaryColor}
				/>

				<AnonTitle>Productivity</AnonTitle>
				<ProductivityBarContainer>
					<span>Min</span>
					<ProductivityBarOutline>
						<ProductivityBar
							color={this.props.primaryColor}
							width={p(this.state.output / this.state.input)}
						/>
					</ProductivityBarOutline>
					<span>Max</span>
				</ProductivityBarContainer>
			</ProductivityContainer>
		);
	}
}
