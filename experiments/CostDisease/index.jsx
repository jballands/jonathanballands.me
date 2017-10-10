import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import KinesisPost from 'components/KinesisPost';

import { shark } from 'helpers/palette';

import CPIOverTime from './CPIOverTime';

const Title = styled.div`
	font-size: 56px;
	font-weight: 700;
	color: ${props => props.color};
	font-family: 'Raleway', sans-serif;
	text-transform: uppercase;
`;

const Subtitle = styled.div`
	font-size: 22px;
	font-weight: 700;
	color: ${props => props.color};
	margin-top: 10px;
`;

const StyledKinesisPost = styled(KinesisPost)`margin-top: 40px;`;

export default class CostDiseaseExperiment extends React.Component {
	static displayName = 'CostDiseaseExperiment';

	static propTypes = {
		primaryColor: PropTypes.string,
		secondaryColor: PropTypes.string,
	};

	render() {
		return (
			<div>
				<Title color={this.props.primaryColor}>
					Curing the Cost Disease
				</Title>
				<Subtitle color={this.props.primaryColor}>
					A case on why more expensive healthcare and education isn't
					a bad thing.
				</Subtitle>
				<StyledKinesisPost color={this.props.primaryColor}>
					<p>
						Before you blow up on me, hear me out for just a second.
					</p>
				</StyledKinesisPost>
				<CPIOverTime />
			</div>
		);
	}
}
