import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import KinesisMarkdown from 'components/KinesisMarkdown';
import ExplainationPanel from 'experiments/common/ExplainationPanel';

import CPIOverTime from './CPIOverTime';
import Productivity from './Productivity';
import SellingWidgets from './SellingWidgets';
import {
	introMd,
	baumolMd,
	productivityMd,
	realisticExampleMd,
	cpiVizExplainationMd,
	revenueExplainationMd,
} from './markdown';

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
	margin: 10px 0 50px 0;
	width: 100%;
	text-align: center;
`;

const Visualization = styled.div`
	margin: 50px 0;
	display: flex;
	flex-flow: column;
`;

const VisualizationTitle = styled.div`
	font-size: 28px;
	margin-bottom: 5px;
	color: ${props => props.color};
`;

const VisualizationSubtitle = styled.div`
	font-size: 16px;
	color: ${props => props.color};
`;

const VisualizationCredit = styled.div`
	margin: 15px 0;
	font-size: 14px;
	color: ${props => props.color};
	font-style: italic;
	align-self: flex-end;
`;

const MarkdownForExplaiantions = styled(KinesisMarkdown)`
	font-size: 11pt;
`;

export default class CostDiseaseExperiment extends React.Component {
	static displayName = 'CostDiseaseExperiment';

	static propTypes = {
		primaryColor: PropTypes.string,
		secondaryColor: PropTypes.string,
	};

	renderCPIOverTimeExplaination = () => (
		<MarkdownForExplaiantions
			color={this.props.primaryColor}
			content={cpiVizExplainationMd}
		/>
	);

	renderRevenueExplaination = () => (
		<MarkdownForExplaiantions
			color={this.props.primaryColor}
			content={revenueExplainationMd}
		/>
	);

	render() {
		return (
			<div>
				<Title color={this.props.primaryColor}>
					Cost Disease Explained
				</Title>
				<Subtitle color={this.props.primaryColor}>
					And how it explains rising healthcare and education costs.
				</Subtitle>

				<KinesisMarkdown
					color={this.props.primaryColor}
					content={introMd}
				/>

				<Visualization>
					<ExplainationPanel
						color={this.props.primaryColor}
						link="cpi-graph"
						renderExplaination={this.renderCPIOverTimeExplaination}>
						<VisualizationTitle
							color={this.props.primaryColor}
							id="cpi-graph">
							Consumer Price Index of Various Sectors
						</VisualizationTitle>
						<VisualizationSubtitle color={this.props.primaryColor}>
							From 1978 to 2017
						</VisualizationSubtitle>
					</ExplainationPanel>
					<CPIOverTime primaryColor={this.props.primaryColor} />
					<VisualizationCredit color={this.props.primaryColor}>
						Source: The United States Department of Labor
					</VisualizationCredit>
				</Visualization>

				<KinesisMarkdown
					color={this.props.primaryColor}
					content={baumolMd}
				/>

				<KinesisMarkdown
					color={this.props.primaryColor}
					content={productivityMd}
				/>

				<Visualization>
					<Productivity primaryColor={this.props.primaryColor} />
				</Visualization>

				<KinesisMarkdown
					color={this.props.primaryColor}
					content={realisticExampleMd}
				/>

				<Visualization>
					<ExplainationPanel
						color={this.props.primaryColor}
						link="selling-widgets"
						renderExplaination={this.renderRevenueExplaination}>
						<VisualizationTitle
							id="selling-widgets"
							color={this.props.primaryColor}>
							Selling Widgets on the Market
						</VisualizationTitle>
						<VisualizationSubtitle color={this.props.primaryColor}>
							How Factors You Can Change Influence Revenue
						</VisualizationSubtitle>
					</ExplainationPanel>
					<SellingWidgets primaryColor={this.props.primaryColor} />
				</Visualization>
			</div>
		);
	}
}
