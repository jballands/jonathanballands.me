//
//	jballands/jonathanballands.me
//	Kinesis.jsx
//
//	© 2019 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
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

const mapStateToProps = ({ kinesis }) => ({
	selectedEntry: kinesis.get('selectedEntry'),
});

const Kinesis = ({ history, match, location, selectedEntry }) => {
	if (!match.params.kinesisId) {
		// If there's a selected entry, use that; otherwise, just use the first entry
		const entryId = selectedEntry || entries.first().get('id');

		return <Redirect to={`/kinesis/${entryId}`} />;
	}

	const entryId = entries.get(match.params.kinesisId);

	return (
		<KinesisContainer>
			<KinesisBrowser selectedEntry={entryId} />
			<KinesisContent
				selectedEntry={entryId}
				history={history}
				location={location}
			/>
		</KinesisContainer>
	);
};

Kinesis.propTypes = {
	history: PropTypes.object,
	match: PropTypes.object,
	selectedEntry: PropTypes.string,
};

export default connect(mapStateToProps)(Kinesis);
