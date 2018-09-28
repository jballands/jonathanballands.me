//
//	jballands/jonathanballands.me
//	CostDisease/index.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import KinesisMarkdown from 'components/KinesisMarkdown';
import ExplanationPanel from 'experiments/common/ExplanationPanel';

import CPIOverTime from './CPIOverTime';
import Productivity from './Productivity';
import SellingWidgets from './SellingWidgets';
import SingleCPIOverTime from './SingleCPIOverTime';
import EmploymentSectors from './EmploymentSectors';
import {
	introMd,
	baumolMd,
	productivityMd,
	realisticExampleMd,
	cpiVizExplanationMd,
	revenueExplanationMd,
	realisticExampleTheoryMd,
	paradoxSallyMd,
	newCarCpiVizExplanationMd,
	paradoxBarbraMd,
	recreationCpiVizExplanationMd,
	paradoxExplanationMd,
	implicationsMd,
	employmentVizExplanationMd,
	costDiseaseAndLowProductivityMd,
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
	font-weight: 700;
`;

const VisualizationSubtitle = styled.div`
	font-size: 16px;
	color: ${props => props.color};
	font-weight: 500;
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

	renderCPIOverTimeExplanation = () => (
		<MarkdownForExplainations
			color={this.props.primaryColor}
			content={cpiVizExplanationMd}
		/>
	);

	renderRevenueExplanation = () => (
		<MarkdownForExplainations
			color={this.props.primaryColor}
			content={revenueExplanationMd}
		/>
	);

	renderNewCarCPIOverTimeExplanation = () => (
		<MarkdownForExplainations
			color={this.props.primaryColor}
			content={newCarCpiVizExplanationMd}
		/>
	);

	renderRecreationCpiVizExplanationMd = () => (
		<MarkdownForExplainations
			color={this.props.primaryColor}
			content={recreationCpiVizExplanationMd}
		/>
	);

	renderEmploymentVizExplanationMd = () => (
		<MarkdownForExplainations
			color={this.props.primaryColor}
			content={employmentVizExplanationMd}
		/>
	);

	render() {
		return (
			<div>
				<Title color={this.props.primaryColor}>Cost Disease</Title>
				<Subtitle color={this.props.primaryColor}>
					And how it explains rising healthcare and education costs.
				</Subtitle>

				<KinesisMarkdown
					color={this.props.primaryColor}
					content={introMd}
				/>

				<Visualization>
					<ExplanationPanel
						color={this.props.primaryColor}
						link="cpi-graph"
						renderExplanation={this.renderCPIOverTimeExplanation}>
						<VisualizationTitle
							color={this.props.primaryColor}
							id="cpi-graph">
							Consumer Price Index of Various Sectors
						</VisualizationTitle>
						<VisualizationSubtitle color={this.props.primaryColor}>
							From 1978 to 2017
						</VisualizationSubtitle>
					</ExplanationPanel>
					<CPIOverTime primaryColor={this.props.primaryColor} />
					<VisualizationCredit color={this.props.primaryColor}>
						Source: The US Bureau of Labor Statistics
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
					<ExplanationPanel
						color={this.props.primaryColor}
						link="selling-widgets"
						renderExplanation={this.renderRevenueExplanation}>
						<VisualizationTitle
							id="selling-widgets"
							color={this.props.primaryColor}>
							Selling Widgets on the Market
						</VisualizationTitle>
						<VisualizationSubtitle color={this.props.primaryColor}>
							How Factors You Can Change Influence Revenue
						</VisualizationSubtitle>
					</ExplanationPanel>
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
					<ExplanationPanel
						color={this.props.primaryColor}
						link="new-car-cpi"
						renderExplanation={
							this.renderNewCarCPIOverTimeExplanation
						}>
						<VisualizationTitle color={this.props.primaryColor}>
							CPI for New Cars & Trucks
						</VisualizationTitle>
						<VisualizationSubtitle color={this.props.primaryColor}>
							From 1998 to 2017
						</VisualizationSubtitle>
					</ExplanationPanel>
					<SingleCPIOverTime
						data={carsTrucks9817}
						primaryColor={this.props.primaryColor}
						range={[90, 190]}
					/>
					<VisualizationCredit color={this.props.primaryColor}>
						Source: The US Bureau of Labor Statistics
					</VisualizationCredit>
				</Visualization>

				<KinesisMarkdown
					color={this.props.primaryColor}
					content={paradoxBarbraMd}
				/>

				<Visualization>
					<ExplanationPanel
						color={this.props.primaryColor}
						link="recreational-cpi"
						renderExplanation={
							this.renderRecreationCpiVizExplanationMd
						}>
						<VisualizationTitle
							color={this.props.primaryColor}
							id="recreational-cpi">
							CPI for Recreational Services
						</VisualizationTitle>
						<VisualizationSubtitle color={this.props.primaryColor}>
							From 1998 to 2017
						</VisualizationSubtitle>
					</ExplanationPanel>
					<SingleCPIOverTime
						data={recreation9817}
						primaryColor={this.props.primaryColor}
						range={[90, 190]}
					/>
					<VisualizationCredit color={this.props.primaryColor}>
						Source: The US Bureau of Labor Statistics
					</VisualizationCredit>
				</Visualization>

				<KinesisMarkdown
					color={this.props.primaryColor}
					content={paradoxExplanationMd}
				/>

				<KinesisMarkdown
					color={this.props.primaryColor}
					content={implicationsMd}
				/>

				<Visualization>
					<ExplanationPanel
						color={this.props.primaryColor}
						link="employment">
						<VisualizationTitle
							color={this.props.primaryColor}
							id="employment">
							Employment in Manufacturing vs Services
						</VisualizationTitle>
						<VisualizationSubtitle color={this.props.primaryColor}>
							From 1940 to 2017
						</VisualizationSubtitle>
					</ExplanationPanel>
					<EmploymentSectors primaryColor={this.props.primaryColor} />
					<VisualizationCredit color={this.props.primaryColor}>
						Source: The US Bureau of Labor Statistics
					</VisualizationCredit>
				</Visualization>

				<KinesisMarkdown
					color={this.props.primaryColor}
					content={costDiseaseAndLowProductivityMd}
				/>
			</div>
		);
	}
}
