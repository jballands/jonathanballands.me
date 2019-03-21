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

import BackgroundGradient from 'components/BackgroundGradient';
import ContentScroller from 'components/ContentScroller';
import LoadingAnimation from 'components/LoadingAnimation';

const mapStateToProps = ({ kinesis }) => ({
	content: kinesis.get('content'),
	contentLoading: kinesis.get('contentLoading'),
	filteredEntries: kinesis.get('filteredEntries'),
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
		selectedEntry: PropTypes.object,
	};

	render() {
		const { selectedEntry } = this.props;

		console.log(selectedEntry);

		const {
			selectedEntry: {
				primaryColor,
				secondaryColor,
				name,
				date,
				resource,
				props,
			},
		} = this.props;

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
	}
}

export default connect(mapStateToProps)(KinesisContent);
