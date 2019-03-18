//
//	jballands/jonathanballands.me
//	Kinesis.jsx
//
//	© 2017 Jonathan Ballands
//

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route, Redirect } from 'react-router-dom';

import KinesisBrowser from 'components/KinesisBrowser';
import KinesisContent from 'components/KinesisContent';

import entries from 'helpers/kinesisEntries';

const KinesisContainer = styled.div`
	width: 100%;
	background: #fff;
	display: flex;
	flex-flow: row nowrap;
`;

export default class Kinesis extends Component {
	static propTypes = {
		history: PropTypes.object,
		match: PropTypes.object,
	};

	render() {
		const { history, match } = this.props;

		return (
			<KinesisContainer>
				<KinesisBrowser history={history} match={match} />
				<Route exact path="/kinesis">
					{() => (
						<Redirect to={`kinesis/${entries.first().get('id')}`} />
					)}
				</Route>
				<Route
					path={`${match.url}/:kinesisId`}
					component={KinesisContent}
				/>
			</KinesisContainer>
		);
	}
}
