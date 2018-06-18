//
//	jballands/jonathanaballands.me
//	Visualization.jsx
//
//	© 2018 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { format } from 'd3-format';
import moment from 'moment';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import Chart from './Chart';
import Metric from './Metric';

const MILLISECONDS_IN_A_MONTH = 2629746000;

const ErrorContainer = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column;
	align-items: center;
`;

const Error = styled(ReactSVG)`
	fill: ${props => props.color};
	stroke: ${props => props.color};
`;

const ErrorTitle = styled.div`
	font-size: 36px;
	color: ${props => props.color};
	margin: 25px 0;
`;

const ErrorActionItemsContainer = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: flex-start;
	width: 650px;
`;

const ActionItemsInstructions = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;
	color: ${props => props.color};
`;

const PointerSE = styled(ReactSVG)`
	fill: ${props => props.color};
	width: 35px;
	margin-right: 15px;
`;

const ActionItemsList = styled.ul`
	li + li {
		margin-top: 10px;
	}
`;

const VisualizationContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: flex-start;
`;

const VisualizationMetrics = styled.div`
	display: flex;
	flex-flow: row;
	margin-bottom: 10px;
`;

const StyledMetric = styled(Metric).attrs({
	style: props => ({
		color: props.color,
	}),
})`
	& + & {
		margin-left: 30px;
	}
`;

const mapStateToProps = ({ loanBurndown }) => ({
	columns: loanBurndown.get('columns'),
	graphingData: loanBurndown.get('graphingData'),
	inputColumn: loanBurndown.get('inputColumn'),
	outputColumn: loanBurndown.get('outputColumn'),
	problems: loanBurndown.get('problems'),
	unloadable: loanBurndown.get('unloadable'),
	extrapolate: loanBurndown.get('extrapolate'),
});

class Visualization extends React.Component {
	static displayName = 'Visualization';

	static propTypes = {
		columns: PropTypes.object,
		graphingData: ImmutablePropTypes.mapContains({
			original: ImmutablePropTypes.list,
		}),
		extrapolate: PropTypes.bool,
		inputColumn: PropTypes.string,
		outputColumn: PropTypes.string,
		primaryColor: PropTypes.string,
		problems: PropTypes.object,
		unloadable: PropTypes.bool,
	};

	renderUnloadable = () => {
		const { primaryColor } = this.props;
		return (
			<ErrorContainer>
				<ErrorTitle color={primaryColor}>
					Unable to Visualize
				</ErrorTitle>
			</ErrorContainer>
		);
	};

	renderNeedsConfiguration = () => {
		const { primaryColor, problems } = this.props;
		return (
			<ErrorContainer>
				<Error
					path="/assets/warning-outline.svg"
					color={primaryColor}
					style={{ width: 200 }}
				/>
				<ErrorTitle color={primaryColor}>
					Configuration Needed
				</ErrorTitle>

				<ErrorActionItemsContainer>
					<ActionItemsInstructions color={primaryColor}>
						<PointerSE
							path="/assets/pointer-se.svg"
							color={primaryColor}
						/>
						You need to address the following for the visualization
						to work:
					</ActionItemsInstructions>
					<ActionItemsList>
						{problems.map(problem => <li>{problem}</li>)}
					</ActionItemsList>
				</ErrorActionItemsContainer>
			</ErrorContainer>
		);
	};

	render() {
		const {
			graphingData,
			extrapolate,
			inputColumn,
			outputColumn,
			primaryColor,
			problems,
			unloadable,
		} = this.props;

		if (unloadable) {
			return this.renderUnloadable();
		} else if (problems.size > 0) {
			return this.renderNeedsConfiguration();
		}

		return (
			<VisualizationContainer>
				<VisualizationMetrics>
					<StyledMetric
						color={primaryColor}
						title="Avg Rate"
						value={format('$,.2f')(
							graphingData.get('averageRatePerMillisecond') *
								MILLISECONDS_IN_A_MONTH,
						)}
						size={extrapolate ? 'small' : 'big'}
					/>
					<StyledMetric
						color={primaryColor}
						title="Balance Remaining"
						value={format('$,.2f')(
							graphingData
								.get('original')
								.last()
								.get(outputColumn),
						)}
						size={extrapolate ? 'small' : 'big'}
					/>
					<StyledMetric
						color="#10d3a3"
						title="Estimated Completion"
						value={moment(
							graphingData
								.get('extrapolated')
								.last()
								.get(inputColumn),
						).format('MMM GGGG')}
						size={extrapolate ? 'big' : 'none'}
					/>
					<StyledMetric
						color="#10d3a3"
						title="Months Left"
						value={moment(
							graphingData
								.get('extrapolated')
								.last()
								.get(inputColumn),
						).diff(
							moment(
								graphingData
									.get('extrapolated')
									.first()
									.get(inputColumn),
							),
							'months',
						)}
						size={extrapolate ? 'big' : 'none'}
					/>
				</VisualizationMetrics>
				<Chart
					color={primaryColor}
					data={graphingData.delete('averageRatePerMillisecond')}
					extrapolate={extrapolate}
					inputColumn={inputColumn}
					outputColumn={outputColumn}
				/>
			</VisualizationContainer>
		);
	}
}

export default connect(mapStateToProps)(Visualization);
