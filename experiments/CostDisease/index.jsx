import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import KinesisMarkdown from 'components/KinesisMarkdown';
import ExplainationPanel from 'experiments/common/ExplainationPanel';

import CPIOverTime from './CPIOverTime';
import Productivity from './Productivity';
import SellingWidgets from './SellingWidgets';
import SingleCPIOverTime from './SingleCPIOverTime';
import {
	introMd,
	baumolMd,
	productivityMd,
	realisticExampleMd,
	cpiVizExplainationMd,
	revenueExplainationMd,
	realisticExampleTheoryMd,
	paradoxSallyMd,
	newCarCpiVizExplainationMd,
	paradoxBarbraMd,
	recreationCpiVizExplainationMd,
	paradoxExplanationMd,
} from './markdown';

import carsTrucks9817 from './carsTrucks9817.json';
import recreation9817 from './recreation9817.json';

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

const MarkdownForExplainations = styled(KinesisMarkdown)`
	font-size: 11pt;
`;

export default class CostDiseaseExperiment extends React.Component {
	static displayName = 'CostDiseaseExperiment';

	static propTypes = {
		primaryColor: PropTypes.string,
		secondaryColor: PropTypes.string,
	};

	renderCPIOverTimeExplaination = () => (
		<MarkdownForExplainations
			color={this.props.primaryColor}
			content={cpiVizExplainationMd}
		/>
	);

	renderRevenueExplaination = () => (
		<MarkdownForExplainations
			color={this.props.primaryColor}
			content={revenueExplainationMd}
		/>
	);

	renderNewCarCPIOverTimeExplaination = () => (
		<MarkdownForExplainations
			color={this.props.primaryColor}
			content={newCarCpiVizExplainationMd}
		/>
	);

	renderRecreationCpiVizExplainationMd = () => (
		<MarkdownForExplainations
			color={this.props.primaryColor}
			content={recreationCpiVizExplainationMd}
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

				<KinesisMarkdown
					color={this.props.primaryColor}
					content={realisticExampleTheoryMd}
				/>

				<KinesisMarkdown
					color={this.props.primaryColor}
					content={paradoxSallyMd}
				/>

				<Visualization>
					<ExplainationPanel
						color={this.props.primaryColor}
						link="new-car-cpi"
						renderExplaination={
							this.renderNewCarCPIOverTimeExplaination
						}>
						<VisualizationTitle
							color={this.props.primaryColor}
							id="new-car-cpi">
							New Cars & Trucks CPI
						</VisualizationTitle>
						<VisualizationSubtitle color={this.props.primaryColor}>
							From 1998 to 2017
						</VisualizationSubtitle>
					</ExplainationPanel>
					<SingleCPIOverTime
						data={carsTrucks9817}
						primaryColor={this.props.primaryColor}
						range={[90, 190]}
					/>
					<VisualizationCredit color={this.props.primaryColor}>
						Source: The United States Department of Labor
					</VisualizationCredit>
				</Visualization>

				<KinesisMarkdown
					color={this.props.primaryColor}
					content={paradoxBarbraMd}
				/>

				<Visualization>
					<ExplainationPanel
						color={this.props.primaryColor}
						link="new-car-cpi"
						renderExplaination={
							this.renderRecreationCpiVizExplainationMd
						}>
						<VisualizationTitle
							color={this.props.primaryColor}
							id="new-car-cpi">
							Recreational Services CPI
						</VisualizationTitle>
						<VisualizationSubtitle color={this.props.primaryColor}>
							From 1998 to 2017
						</VisualizationSubtitle>
					</ExplainationPanel>
					<SingleCPIOverTime
						data={recreation9817}
						primaryColor={this.props.primaryColor}
						range={[90, 190]}
					/>
					<VisualizationCredit color={this.props.primaryColor}>
						Source: The United States Department of Labor
					</VisualizationCredit>
				</Visualization>

				<KinesisMarkdown
					color={this.props.primaryColor}
					content={paradoxExplanationMd}
				/>
			</div>
		);
	}
}
