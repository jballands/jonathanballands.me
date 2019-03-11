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
import { formatStop, STOP_128 } from './utils';

const ApertureVizContainer = styled.div``;

export default class ApertureViz extends Component {
	static displayName = 'ApertureViz';

	static propTypes = {
		primaryColor: PropTypes.string.isRequired,
	};

	state = {
		fStopIndex: 0,
	};

	onfStopChange = value => {
		this.setState({
			fStopIndex: value - 1,
		});
	};

	fStopSliderFormatter = index => formatStop(STOP_128[index - 1]);

	render() {
		const { primaryColor } = this.props;

		return (
			<ApertureVizContainer>
				<Slider
					value={this.state.fStopIndex + 1}
					onChange={this.onfStopChange}
					title="f-Stop"
					accentColor={primaryColor}
					min={1}
					max={STOP_128.length}
					formatter={this.fStopSliderFormatter}
					showValue
				/>
				<Slider
					value={this.state.fStopIndex + 1}
					onChange={this.onfStopChange}
					title="Focal Length"
					accentColor={primaryColor}
					min={1}
					max={STOP_128.length}
					formatter={this.fStopSliderFormatter}
					showValue
				/>
				<Slider
					value={this.state.fStopIndex + 1}
					onChange={this.onfStopChange}
					title="Diameter"
					accentColor={primaryColor}
					min={1}
					max={STOP_128.length}
					formatter={this.fStopSliderFormatter}
					showValue
				/>
				<ApertureSprial
					focalLength={400}
					fStop={STOP_128[this.state.fStopIndex]}
					fStops={STOP_128}
					minFStop={1}
					maxFStop={128}
				/>
			</ApertureVizContainer>
		);
	}
}
