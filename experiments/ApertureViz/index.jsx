//
//	jballands/jonathanballands.me
//	ApertureViz/index.jsx
//
//	© 2018 Jonathan Ballands
//

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from '@jballands/vespyr/lib/Slider';
import ApertureSprial from './ApertureSprial';
import { STOP_128 } from './utils';

const ApertureVizContainer = styled.div``;

export default class ApertureViz extends Component {
	static displayName = 'ApertureViz';

	static propTypes = {
		primaryColor: PropTypes.string.isRequired,
	};

	state = {
		fStopValue: 1,
	};

	onfStopChange = value => {
		this.setState({
			fStopValue: value,
		});
	};

	fStopSliderFormatter = index => {
		return `f/${
			STOP_128[index - 1] < 10
				? Math.trunc(STOP_128[index - 1] * 10) / 10
				: Math.floor(STOP_128[index - 1])
		}`;
	};

	render() {
		const { primaryColor } = this.props;

		return (
			<ApertureVizContainer>
				<Slider
					value={this.state.fStopValue}
					onChange={this.onfStopChange}
					title="f-Stop"
					accentColor={primaryColor}
					min={1}
					max={STOP_128.length}
					formatter={this.fStopSliderFormatter}
					showValue
				/>
				<ApertureSprial
					focalLength={50}
					fStop={this.state.fStopValue}
					maxFStop={STOP_128[STOP_128.length - 1]}
				/>
			</ApertureVizContainer>
		);
	}
}
