//
//	jballands/jonathanballands.me
//	KinesisContent.jsx
//
//	© 2019 Jonathan Ballands
//

import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { chooseEntry } from 'actions/KinesisActions';

import BackgroundGradient from 'components/BackgroundGradient';
import ContentScroller from 'components/ContentScroller';
import LoadingAnimation from 'components/LoadingAnimation';

import entries from 'helpers/kinesisEntries';

const mapStateToProps = ({ kinesis }) => ({
	content: kinesis.get('content'),
	contentLoading: kinesis.get('contentLoading'),
	filteredEntries: kinesis.get('filteredEntries'),
	selectedEntry: kinesis.get('selectedEntry'),
});

const mapDispatchToProps = dispatch => ({
	chooseEntry: id => dispatch(chooseEntry(id)),
});

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

class KinesisContent extends Component {
	static displayName = 'KinesisContent';

	static propTypes = {
		chooseEntry: PropTypes.func,
		content: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
		contentLoading: PropTypes.bool,
		filteredEntries: ImmutablePropTypes.orderedMap,
		history: PropTypes.object,
		location: PropTypes.object,
		match: PropTypes.object,
		selectedEntry: PropTypes.object,
	};

	chooseEntryBasedOnRoute = () => {
		this.props.chooseEntry(
			entries.get(this.props.match.params.kinesisId).get('id'),
		);
	};

	componentDidMount() {
		// When this component mounts, just choose an entry
		this.chooseEntryBasedOnRoute();
	}

	componentDidUpdate(prevProps) {
		// We only react when the route changes
		if (this.props.location.pathname !== prevProps.location.pathname) {
			this.chooseEntryBasedOnRoute();
		}
	}

	render() {
		const {
			selectedEntry,
			selectedEntry: {
				primaryColor,
				secondaryColor,
				name,
				date,
				hashtags,
				resource,
				props,
			},
		} = this.props;

		if (!selectedEntry) {
			return null;
		}

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
							hashtags={hashtags}
							primaryColor={primaryColor}
							secondaryColor={secondaryColor}
							{...props}
						/>
					</Suspense>
				</KinesisContainer>
			</BackgroundGradient>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(KinesisContent);
