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
//import Slider from '@jballands/vespyr/lib/Slider';

const ProductivityContainer = styled.div``;

export default class Productivity extends React.Component {
	static displayName = 'Productivity';

	static propTypes = {};

	state = {
		input: 5,
	};

	onInputSliderChange = val => {
		this.setState({
			input: val,
		});
	};

	render() {
		return <ProductivityContainer>Hello world</ProductivityContainer>;
	}
}
