//
//	jballands/jonathanaballands.me
//	Graph.jsx
//
//	© 2018 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactSVG from 'react-svg';

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
	data: loanBurndown.get('data'),
	problems: loanBurndown.get('problems'),
});

class Visualization extends React.Component {
	static displayName = 'Visualization';

	static propTypes = {
		columns: PropTypes.object,
		data: PropTypes.object,
		primaryColor: PropTypes.string,
		problems: PropTypes.object,
	};

	renderError = () => {
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
		if (this.props.problems.size > 0) {
			return this.renderError();
		}
		return <div>Ok</div>;
	}
}

export default connect(mapStateToProps)(Visualization);
