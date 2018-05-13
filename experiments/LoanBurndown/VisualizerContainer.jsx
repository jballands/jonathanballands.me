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
			</VisualizerContainerContainer>
		);
	}
}
