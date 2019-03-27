//
//	jballands/jonathanballands.me
//	KinesisContent.jsx
//
//	© 2019 Jonathan Ballands
//

import React, { Suspense, lazy, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import styled from 'styled-components';

import BackgroundGradient from 'components/BackgroundGradient';
import LoadingAnimation from 'components/LoadingAnimation';
import { selectEntry } from 'actions/KinesisActions';

const mapStateToProps = ({ kinesis }) => ({
	content: kinesis.get('content'),
	contentLoading: kinesis.get('contentLoading'),
	filteredEntries: kinesis.get('filteredEntries'),
});

const actions = {
	selectEntry,
};

const StyledLoadingAnimation = styled(LoadingAnimation)`
	width: 100%;
	margin-top: 100px;
	height: calc(100vh - 240px);
`;

const KinesisContainer = styled.div`
	margin: 70px auto;
	padding: 0 20px;
	width: 75%;
	max-width: 865px;
	min-width: 400px;
`;

const KinesisContent = ({
	filteredEntries,
	selectedEntry,
	selectEntry,
	history,
	location,
}) => {
	const {
		primaryColor,
		secondaryColor,
		name,
		date,
		resource,
		props,
	} = selectedEntry;

	useEffect(() => {
		selectEntry(selectedEntry.get('id'));
	});

	const Resource = lazy(resource);

	return (
		<BackgroundGradient backgroundColor={secondaryColor}>
			<KinesisContainer>
				<Suspense
					fallback={
						<StyledLoadingAnimation
							color={primaryColor}
							text={name}
						/>
					}>
					<Resource
						name={name}
						date={date}
						hashtags={selectedEntry.getReadableHashtags()}
						primaryColor={primaryColor}
						secondaryColor={secondaryColor}
						{...props}
					/>
				</Suspense>
			</KinesisContainer>
		</BackgroundGradient>
	);
};

KinesisContent.propTypes = {
	filteredEntries: ImmutablePropTypes.orderedMap,
	selectedEntry: PropTypes.object,
	selectEntry: PropTypes.func,
};

export default connect(
	mapStateToProps,
	actions,
)(KinesisContent);
