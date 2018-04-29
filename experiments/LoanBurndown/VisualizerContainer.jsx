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
	padding-bottom: 500px;
`;

const VisualizerControlsContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	margin-bottom: 100px;
`;

export default class VisualizerContainer extends React.Component {
	static displayName = 'VisualizerContainer';

	render() {
		return (
			<VisualizerContainerContainer>
				<VisualizerControlsContainer>
					<Controls {...this.props} />
				</VisualizerControlsContainer>
				<Visualization {...this.props} />
			</VisualizerContainerContainer>
		);
	}
}
