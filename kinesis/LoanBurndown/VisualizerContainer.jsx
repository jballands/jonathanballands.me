//
//	jballands/jonathanballands.me
//	VisualizerContainer.jsx
//
//	© 2018 Jonathan Ballands
//

import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
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
	margin-bottom: 25px;
`;

export default class VisualizerContainer extends Component {
	static displayName = 'VisualizerContainer';

	static propTypes = {
		primaryColor: propTypes.string,
	};

	render() {
		return (
			<Fragment>
				<VisualizerContainerContainer>
					<VisualizerControlsContainer>
						<Controls {...this.props} />
					</VisualizerControlsContainer>
					<VisualizationContainer>
						<Visualization {...this.props} />
					</VisualizationContainer>
				</VisualizerContainerContainer>
			</Fragment>
		);
	}
}
