//
//	jballands/jonathanballands.me
//	Output.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { scaleLinear } from 'd3-scale';
import Slider from '@jballands/vespyr/lib/Slider';
import TextInput from '@jballands/vespyr/lib/TextInput';

import Arrow from './Arrow';
import Multiply from './Multiply';

const RevenueContainer = styled.div`
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
	margin-top: 15px;
`;

const StyledMultiply = styled(Multiply)`
	margin: 0 30px;
	max-width: 20px;
`;

const DownArrow = styled(Arrow)`
	@keyframes color {
		from {
			fill: ${props => props.flashColor};
		}
		to {
			fill: #e5e5e5;
		}
	}

	margin: 25px 0;
	animation: color 550ms ease;
	fill: #e5e5e5;
`;

const AnonTitle = styled.div`
	margin: 10px 0;
	font-size: 14px;
	text-transform: uppercase;
`;

const PriceError = styled.div`
	margin: 10px 0;
	font-size: 14px;
	color: #d0011b;
`;

const OutputValue = styled.div`
	font-size: 28px;
	color: #6bbbff;
`;

const Price = styled(TextInput)`
	width: 135px;
	input {
		font-size: 28px;
	}
`;

const DollarSign = styled.span`font-size: 28px;`;

const RevenueValue = styled.div`
	font-size: 28px;
	color: #b042f4;
	margin-top: 10px;
`;

const RevenueBarContainer = styled.div`
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

const RevenueBarOutline = styled.div`
	border: 1px solid black;
	padding: 2px;
	width: 100%;
	display: inline-block;
`;

const RevenueBar = styled.div`
	width: ${props => props.width}%;
	height: 10px;
	background: #b042f4;
	transition: width 500ms ease;
`;

export default class Revenue extends React.Component {
	static displayName = 'Revenue';

	static propTypes = {
		primaryColor: PropTypes.string,
	};

	state = {
		input: 5,
		productivity: 5,
		output: 5,
		price: 75,
		validPrice: 75,
		invalidPrice: false,
		priceError: null,
	};

	onInputSliderChange = val => {
		this.setState({
			input: val,
		});
	};

	onProductivitySliderChange = val => {
		this.setState({
			productivity: val,
		});
	};

	onOutputSliderChange = val => {
		this.setState({
			output: val,
		});
	};

	onUpdatePrice = val => {
		// Is this a price?
		const pricePattern = new RegExp(/^\d+(\.\d{2})?$/g);
		let valid = pricePattern.test(val);
		let error = !valid ? 'Enter a valid price.' : null;

		// Is this price too high?
		const validPriceRange = parseInt(val, 10) < 100;
		valid = valid && validPriceRange;
		error = !validPriceRange ? 'Enter a price less than $100.' : error;

		valid
			? this.setState({
					price: val,
					validPrice: val,
					invalidPrice: !valid,
					priceError: error,
				})
			: this.setState({
					price: val,
					invalidPrice: !valid,
					priceError: error,
				});
	};

	formatInput = val => {
		if (val === 1) {
			return '1 unit';
		}
		return `${val} units`;
	};

	formatProductivity = val => {
		if (val === 1) {
			return '1 person';
		}
		return `${val} people`;
	};

	render() {
		const p = scaleLinear()
			.domain([0, 9999])
			.range([1, 100])
			.clamp(true);

		const output = this.state.input * this.state.productivity;
		const revenue = output * this.state.validPrice;

		return (
			<RevenueContainer>
				<IOControls>
					<Slider
						accentColor="#5cdb71"
						min={1}
						max={10}
						title="Input"
						formatter={this.formatInput}
						value={this.state.input}
						onChange={this.onInputSliderChange}
						showValue
					/>
					<StyledMultiply />
					<Slider
						accentColor={this.props.primaryColor}
						min={1}
						max={10}
						title="Productivity"
						formatter={this.formatProductivity}
						value={this.state.productivity}
						onChange={this.onProductivitySliderChange}
						showValue
					/>
				</IOControls>

				<DownArrow
					rotate={90}
					width={50}
					flashColor={this.props.primaryColor}
					key={`${output}-first`}
				/>

				<AnonTitle>Output</AnonTitle>
				<OutputValue>{output} units</OutputValue>

				<DownArrow
					rotate={90}
					width={50}
					flashColor={this.props.primaryColor}
					key={`${output}-second`}
				/>

				<Price
					accentColor="#00e2b4"
					type="number"
					title="Price"
					invalid={this.state.invalidPrice}
					value={this.state.price}
					onUpdate={this.onUpdatePrice}
					icon={<DollarSign>$</DollarSign>}
				/>

				<PriceError>{this.state.priceError}</PriceError>

				<DownArrow
					rotate={90}
					width={50}
					flashColor={this.props.primaryColor}
					key={revenue}
				/>

				<AnonTitle>Possible Revenue</AnonTitle>

				<RevenueBarContainer>
					<RevenueBarOutline>
						<RevenueBar width={p(revenue)} />
					</RevenueBarOutline>
					<span>$$$$$</span>
				</RevenueBarContainer>

				<RevenueValue>${revenue.toFixed(2)}</RevenueValue>
			</RevenueContainer>
		);
	}
}
