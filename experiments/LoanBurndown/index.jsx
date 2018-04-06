import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import BoldButton from '@jballands/vespyr/lib/BoldButton';

import * as data from './data';

const BurndownAppContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

const BurndownLogo = styled(ReactSVG)`
	width: 250px;
	fill: ${props => props.color};
	stroke: ${props => props.color};
`;

const BurndownTitle = styled.div`
	font-family: 'Raleway', sans-serif;
	text-transform: uppercase;
	font-size: 48px;
	font-weight: 700;
	margin-top: 50px;
	color: ${props => props.color};
`;

const BurndownDescription = styled.div`
	margin: 50px 0 25px 0;
	width: 540px;
	line-height: 1.5em;
	text-align: center;
`;

const UploadCSV = styled(BoldButton)`
	font-size: 16px;
`;

export default class LoanBurndown extends React.Component {
	static displayName = 'LoanBurndown';

	static propTypes = {
		primaryColor: PropTypes.string,
		secondaryColor: PropTypes.string,
	};

	render() {
		const { primaryColor } = this.props;

		return (
			<BurndownAppContainer>
				<BurndownLogo
					path="/assets/burndown.svg"
					color={primaryColor}
				/>
				<BurndownTitle color={primaryColor}>
					Loan Burndown Visualizer
				</BurndownTitle>

				<BurndownDescription>
					Getting to $0.00 on a loan is an exciting thought for most
					people. This app will visualize how your loan payments are
					progressing, as well as when you can expect to hit that
					magic number.
				</BurndownDescription>

				<UploadCSV accentColor={primaryColor}>
					Choose .CSV file
				</UploadCSV>
			</BurndownAppContainer>
		);
	}
}
