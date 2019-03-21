//
//	jballands/jonathanballands.me
//	Kinesis.jsx
//
//	© 2019 Jonathan Ballands
//

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
		const { match } = this.props;

		const selectedEntry = entries.get(match.params.kinesisId);

		return (
			<KinesisContainer>
				<KinesisBrowser selectedEntry={selectedEntry} />
				<KinesisContent selectedEntry={selectedEntry} />
			</KinesisContainer>
		);
	}
}
