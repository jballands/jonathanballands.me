import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import KinesisPost from 'components/KinesisPost';
import ExplainationPanel from 'experiments/common/ExplainationPanel';

import { shark } from 'helpers/palette';

import CPIOverTime from './CPIOverTime';

const Title = styled.div`
	font-size: 58px;
	font-weight: 700;
	color: ${props => props.color};
	font-family: 'Raleway', sans-serif;
	text-transform: uppercase;
	text-align: center;
`;

const Subtitle = styled.div`
	font-size: 21px;
	color: ${props => props.color};
	margin-top: 10px;
	width: 100%;
	text-align: center;
`;

const Visualization = styled.div`margin: 40px 0;`;

const GraphTitle = styled.div`
	font-size: 28px;
	margin-bottom: 5px;
	color: ${props => props.color};
`;

const GraphSubtitle = styled.div`
	font-size: 16px;
	color: ${props => props.color};
`;

const StyledKinesisPost = styled(KinesisPost)`margin-top: 40px;`;

const CPIOverTimeExplainationContainer = styled.div`
	color: ${shark};
	font-size: 15px;
	font-style: italic;
	padding: 10px;
	background: white;
`;

export default class CostDiseaseExperiment extends React.Component {
	static displayName = 'CostDiseaseExperiment';

	static propTypes = {
		primaryColor: PropTypes.string,
		secondaryColor: PropTypes.string,
	};

	renderCPIOverTimeExplaination = () => (
		<CPIOverTimeExplainationContainer>
			<p>Hello world!</p>
		</CPIOverTimeExplainationContainer>
	);

	render() {
		return (
			<div>
				<Title color={this.props.primaryColor}>
					Curing the Cost Disease
				</Title>
				<Subtitle color={this.props.primaryColor}>
					A case on why more expensive healthcare and education isn't
					a bad thing.
				</Subtitle>
				<StyledKinesisPost color={this.props.primaryColor}>
					<p>
						Before you blow up on me, hear me out for just a second.
					</p>
				</StyledKinesisPost>

				<Visualization>
					<ExplainationPanel
						color={this.props.primaryColor}
						renderExplaination={this.renderCPIOverTimeExplaination}>
						<GraphTitle color={this.props.primaryColor}>
							Consumer Price Index (CPI) of Various Sectors
						</GraphTitle>
						<GraphSubtitle color={this.props.primaryColor}>
							From 1978 to 2017
						</GraphSubtitle>
					</ExplainationPanel>
					<CPIOverTime primaryColor={this.props.primaryColor} />
				</Visualization>
			</div>
		);
	}
}
