//
//	jballands/jonathanballands.me
//	Kinesis.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import KinesisBrowserContainer from 'containers/KinesisBrowserContainer';
import KinesisContentContainer from 'containers/KinesisContentContainer';

const KinesisContainer = styled.div`
	width: 100%;
	background: #fff;
	display: flex;
	flex-flow: row nowrap;
`;

export default class Kinesis extends React.Component {
	static propTypes = {
		history: PropTypes.object,
		match: PropTypes.object,
	};

	render() {
		const { history, match } = this.props;

		return (
			<KinesisContainer>
				<KinesisBrowserContainer history={history} match={match} />
				<Route
					path={`${match.url}/:kinesisId?`}
					component={KinesisContentContainer}
				/>
			</KinesisContainer>
		);
	}
}
