//
//	jballands/jonathanaballands.me
//	Graph.jsx
//
//	© 2018 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import Chart from './Chart';

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

const mapStateToProps = ({ loanBurndown }) => ({
	columns: loanBurndown.get('columns'),
	data: loanBurndown.get('graphingData'),
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
		data: ImmutablePropTypes.mapContains({
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
			data,
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
			<Chart
				color={primaryColor}
				data={data}
				extrapolate={extrapolate}
				inputColumn={inputColumn}
				outputColumn={outputColumn}
			/>
		);
	}
}

export default connect(mapStateToProps)(Visualization);
