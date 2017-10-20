import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import KinesisPost from 'components/KinesisPost';
import ExplainationPanel from 'experiments/common/ExplainationPanel';

import CPIOverTime from './CPIOverTime';
import Productivity from './Productivity';

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

const Visualization = styled.div`margin: 15px 0;`;

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
	font-size: 13px;
	color: ${props => props.color};
`;

const StyledKinesisPost = styled(KinesisPost)`margin-top: 40px;`;

const ExplainationContainer = styled(KinesisPost)`font-size: 14px;`;

export default class CostDiseaseExperiment extends React.Component {
	static displayName = 'CostDiseaseExperiment';

	static propTypes = {
		primaryColor: PropTypes.string,
		secondaryColor: PropTypes.string,
	};

	renderCPIOverTimeExplaination = () => (
		<ExplainationContainer color={this.props.primaryColor}>
			<p>
				The{' '}
				<a href="https://en.wikipedia.org/wiki/Consumer_price_index">
					Consumer Price Index
				</a>, or CPI, is a number that represents the relative price of
				a good or service, adjusted for inflation.
			</p>
			<p>
				For example, suppose the price of lemonade in 1980 was $1. Let's
				arbitrarily set the CPI of lemonade in 1980 to 100. In 2017, the
				price of lemonade is $2. So, the CPI of lemonade in 2017 is 200,
				since it costs 2x more to buy lemonade in 2017 than it did in
				1980.
			</p>
		</ExplainationContainer>
	);

	renderProductivityExplaination = () => (
		<ExplainationContainer color={this.props.primaryColor}>
			<p>
				The{' '}
				<a href="https://en.wikipedia.org/wiki/Consumer_price_index">
					Consumer Price Index
				</a>, or CPI, is a number that represents the relative price of
				a good or service, adjusted for inflation.
			</p>
			<p>
				For example, suppose the price of lemonade in 1980 was $1. Let's
				arbitrarily set the CPI of lemonade in 1980 to 100. In 2017, the
				price of lemonade is $2. So, the CPI of lemonade in 2017 is 200,
				since it costs 2x more to buy lemonade in 2017 than it did in
				1980.
			</p>
		</ExplainationContainer>
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

				<StyledKinesisPost color={this.props.primaryColor}>
					<p>
						Ever wonder why in our high-tech, relatively progressive
						world, why the price of things like education and
						healthcare are constantly getting more expensive, while
						things like clothing and furniture are relatively
						stagnant, or even getting cheaper?
					</p>
					<p>
						Your thoughts can be substantiated in data. The cost of
						college tuition has increased more than 7 times in the
						past 27 years, while the cost of healthcare has
						increased more than 5 times. Meanwhile, the cost of
						goods like clothing and furniture has pretty much stayed
						the same.
					</p>
				</StyledKinesisPost>

				<Visualization>
					<ExplainationPanel
						color={this.props.primaryColor}
						renderExplaination={this.renderCPIOverTimeExplaination}>
						<VisualizationTitle color={this.props.primaryColor}>
							Consumer Price Index (CPI) of Various Sectors
						</VisualizationTitle>
						<VisualizationSubtitle color={this.props.primaryColor}>
							From 1978 to 2017
						</VisualizationSubtitle>
						<VisualizationCredit color={this.props.primaryColor}>
							Source: The United States Department of Labor
						</VisualizationCredit>
					</ExplainationPanel>
					<CPIOverTime primaryColor={this.props.primaryColor} />
				</Visualization>

				<StyledKinesisPost color={this.props.primaryColor}>
					<p>
						Back in the 1960s, an economist named{' '}
						<a href="https://en.wikipedia.org/wiki/William_Baumol">
							William Baumol
						</a>{' '}
						noticed this phenomenon in the arts, in particular
						musicians. To play a quartet in the 1960s requires the
						same amount of <em>productivity</em> as it did in the
						1800s, yet musicians were earning a lot more in the 60s
						than in the 1800s.
					</p>
					<p>
						Welcome to{' '}
						<a href="https://en.wikipedia.org/wiki/Baumol%27s_cost_disease">
							Baumol's Cost Disease
						</a>. It's an economic theory that potentially explains
						why the cost of services, like education, has
						skyrocketed proportionally to goods, like clothing. But
						to understand how this theory could make sense, we need
						to understand some basic concepts in economics.
					</p>

					<h1>Productivity, Economically Speaking</h1>

					<p>
						<a href="http://www.investopedia.com/terms/p/productivity.asp">
							Productivity
						</a>, in economics, tells us how much stuff we can
						produce if we have a certain amount of things to help
						us. The amount of things we have is called the input,
						and the amount of stuff we make is the output.
					</p>

					<p>
						If there is a lot of output with little input, we are
						being super productive! But if there is a lot of input
						creating little output... well, we aren't really being
						that productive at all.
					</p>
					<blockquote>
						<p>Productivity is the radio of inputs to outputs.</p>
					</blockquote>
				</StyledKinesisPost>

				<Visualization>
					<ExplainationPanel
						color={this.props.primaryColor}
						renderExplaination={
							this.renderProductivityExplaination
						}>
						<VisualizationTitle color={this.props.primaryColor}>
							How Input/Output Ratio Affects Productivity
						</VisualizationTitle>
					</ExplainationPanel>
					<Productivity primaryColor={this.props.primaryColor} />
				</Visualization>
			</div>
		);
	}
}
