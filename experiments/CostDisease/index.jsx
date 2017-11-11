import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import KinesisPost from 'components/KinesisPost';
import ExplainationPanel from 'experiments/common/ExplainationPanel';

import CPIOverTime from './CPIOverTime';
import Productivity from './Productivity';
import SellingWidgets from './SellingWidgets';

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
	margin: 10px 0 75px 0;
	width: 100%;
	text-align: center;
`;

const Visualization = styled.div`
	margin: 75px 0;
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
				a good or service at a point in time.
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

	renderRevenueExplaination = () => (
		<ExplainationContainer color={this.props.primaryColor}>
			<p>
				This visualization represents the supply chain of a company that
				makes <a href="https://en.wikipedia.org/wiki/Widget">
					widgets
				</a>.
			</p>
			<p>
				You've negotiatied a deal with the manufactuer of raw materials
				for widgets where the price of raw materials is $200/unit. This
				cannot be changed. You've also done some market research and
				found that nobody will buy widgets that cost $100 or more.
			</p>
			<p>
				Play with the input and productivty sliders, and determine which
				slider has a greater affect on output (and therefore revenue).
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
						In economics,{' '}
						<a href="http://www.investopedia.com/terms/p/productivity.asp">
							productivity
						</a>{' '}
						is the relationship between how much <b>input</b> we
						need to make some amount of <b>output</b>. Generally
						speaking, more productivity is seen as a good thing
						because it increases everyone's living standards by
						being able to pay people more money.
					</p>

					<blockquote>
						<p>
							Productivity is the ratio of inputs (the amount of
							something we need) to outputs (the amount of
							something we produce).
						</p>
					</blockquote>

					<p>
						An <b>input</b> is anything that is required in order to
						start production on an <b>output</b>. For example,
						inputs for manufacturing cars include raw materials (to
						actually make the cars), workers to put the raw
						materials together, and assets (like tools and robots)
						to help the workers build the cars.
					</p>
					<p>
						Generally speaking, input usually requires{' '}
						<a href="https://www.investopedia.com/terms/c/capital.asp">
							captial
						</a>{' '}
						to attain, while output is simply the product of input.
						And the amount of input required to make some amount of
						output is called productivity.
					</p>

					<h2>A Simple Look at Productivity</h2>

					<p>
						Below is a program that visualizes the input/output
						ratio as productivity. Play around with the sliders and
						take a mental note of what happens to productivity as
						you do.
					</p>
				</StyledKinesisPost>

				<Visualization>
					<Productivity primaryColor={this.props.primaryColor} />
				</Visualization>

				<StyledKinesisPost color={this.props.primaryColor}>
					<p>
						As you play around with the visualization and notice the
						productivity bar bouncing up and down, consider this:
						what exactly do you have to do in order to maximize
						productivity?
					</p>
					<p>
						The simple answer is that you have to decrease the
						amount of input you need while also increasing the
						amount of output you produce. You have make more with
						less; it almost looks as if you need to be able to make
						more product out of thin air!This sounds impossible,
						until you consider the role <b>technology</b> plays in
						producing goods and services.
					</p>
					<p>
						If you only consider input to be the indicator of how
						much output you can make, that means the only possible
						way for you to make more stuff would be to buy more raw
						materials, hire more workers, or acquire more assets.
					</p>
					<p>
						However: if we had another "lever" for you to pull, a
						technology lever, then not only can you increase output
						by having more input, but you can also increase output
						by having better technology.
					</p>
					<p>
						And having better technology corresponds to an increase
						in productivity.
					</p>

					<blockquote>
						<p>
							If there were only inputs and outputs, you could
							only increase output with more raw materials,
							workers, etc. But if you're able to have better
							technology, you can make more output without
							increasing input.
						</p>
					</blockquote>

					<h2>A More Realistic Example</h2>

					<p />
				</StyledKinesisPost>

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

				<StyledKinesisPost color={this.props.primaryColor}>
					<p>The big take away here is that, as </p>

					<h1>The Productivity Paradox</h1>

					<p />
				</StyledKinesisPost>
			</div>
		);
	}
}
