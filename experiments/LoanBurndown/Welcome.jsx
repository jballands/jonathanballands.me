//
//	jballands/jonathanballands.me
//	Welcome.jsx
//
//	© 2018 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import KinesisMarkdown from 'components/KinesisMarkdown';
import BoldButton from '@jballands/vespyr/lib/BoldButton';
import { privacyMd } from './markdown';

import { loadCSV } from './actions';

const WelcomeContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	height: 100%;
	margin-bottom: 50px;
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

const UploadCSVButtonContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
`;

const UploadIcon = styled(ReactSVG)`
	width: 17px;
	fill: white;
	margin-right: 7px;
	padding-top: 2px;
`;

const PrivacyContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	font-size: 14px;
	margin-top: 15px;
`;

const PrivacyIcon = styled(ReactSVG)`
	width: 30px;
	fill: ${props => props.color};
	margin-right: 7px;
`;

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
	loadCSV: file => dispatch(loadCSV(file)),
});

class Welcome extends React.Component {
	static displayName = 'Welcome';

	static propTypes = {
		loadCSV: PropTypes.func,
		primaryColor: PropTypes.string,
		secondaryColor: PropTypes.string,
	};

	uploadCSVRef = null;

	bindUploadCSVRef = node => (this.uploadCSVRef = node);

	onUploadCSVClick = () => {
		if (this.uploadCSVRef) {
			this.uploadCSVRef.click();
		}
	};

	onCSVChosen = e => {
		this.props.loadCSV(e.target.files[0]);
	};

	render() {
		const { primaryColor } = this.props;

		return (
			<WelcomeContainer>
				<BurndownLogo
					path="/assets/burndown.svg"
					color={primaryColor}
				/>
				<BurndownTitle color={primaryColor}>
					Loan Burndown Visualizer
				</BurndownTitle>

				<BurndownDescription>
					This is an app that helps you visualize how payments on your
					loan are progressing, as well as give you an estimate on
					when you'll finish it.
				</BurndownDescription>

				<input
					type="file"
					accept=".csv"
					onChange={this.onCSVChosen}
					ref={this.bindUploadCSVRef}
					style={{ visibility: 'hidden' }}
				/>
				<UploadCSV
					accentColor={primaryColor}
					onClick={this.onUploadCSVClick}>
					<UploadCSVButtonContainer>
						<UploadIcon path="/assets/upload.svg" /> Choose .CSV
						file
					</UploadCSVButtonContainer>
				</UploadCSV>

				<PrivacyContainer>
					<PrivacyIcon
						path="/assets/privacy.svg"
						color={primaryColor}
					/>
					<KinesisMarkdown color={primaryColor} content={privacyMd} />
				</PrivacyContainer>
			</WelcomeContainer>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Welcome);
