//
//	jballands/jonathanballands.me
//	VisualizerContainer.jsx
//
//	© 2018 Jonathan Ballands
//

import React from 'react';
import styled from 'styled-components';
import Controls from './Controls';
import Visualization from './Visualization';
import HelpSvg from 'svg/HelpSvg';
import { linkShade } from 'helpers/palette';

const VisualizerContainerContainer = styled.div`
	width: 100%;
	padding-bottom: 50px;
	display: flex;
	flex-flow: column nowrap;
`;

const VisualizerControlsContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	margin-bottom: 100px;
`;

const VisualizationContainer = styled.div`
	width: 100%;
	margin-bottom: 20px;
`;

const HelpButton = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;
	font-style: italic;
	color: ${props => props.color};
	align-self: center;

	svg {
		fill: ${props => props.color};
		margin-right: 7px;
	}

	&:hover {
		color: ${props => linkShade(props.color)};

		svg {
			fill: ${props => linkShade(props.color)};
			margin-right: 7px;
		}

		cursor: pointer;
	}
`;

export default class VisualizerContainer extends React.Component {
	static displayName = 'VisualizerContainer';

	render() {
		return (
			<VisualizerContainerContainer>
				<VisualizerControlsContainer>
					<Controls {...this.props} />
				</VisualizerControlsContainer>
				<VisualizationContainer>
					<Visualization {...this.props} />
				</VisualizationContainer>
				<HelpButton color={this.props.primaryColor}>
					<HelpSvg width={22} height={22} />Help
				</HelpButton>
			</VisualizerContainerContainer>
		);
	}
}
