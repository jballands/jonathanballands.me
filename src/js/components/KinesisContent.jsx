//
//	jballands/jonathanballands.me
//	KinesisContent.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

import { chooseEntry } from 'actions/KinesisActions';

import BackgroundGradient from 'components/BackgroundGradient';
import ContentScroller from 'components/ContentScroller';
import KinesisMarkdown from 'components/KinesisMarkdown';
import LoadingAnimation from 'components/LoadingAnimation';

import entries from 'helpers/kinesisEntries';

import { Type } from '~/kinesis.config.js';

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

const KinesisArticleTitle = styled.div`
	font-size: 42px;
	color: ${props => props.color};
	font-family: Hero;
	text-transform: uppercase;
`;

const KinesisArticleSubtitle = styled.div`
	display: flex;
	flex-flow: column nowrap;
	color: ${props => props.color};
	margin-top: 5px;
`;

const KinesisArticleMarkdown = styled(KinesisMarkdown)`
	margin-top: 35px;
`;

class KinesisContent extends React.Component {
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

	renderContent = () => {
		const { content, selectedEntry } = this.props;

		if (selectedEntry.type === Type.article) {
			return (
				<div>
					<KinesisArticleTitle color={selectedEntry.primaryColor}>
						{selectedEntry.name}
					</KinesisArticleTitle>

					<KinesisArticleSubtitle color={selectedEntry.primaryColor}>
						<div>
							{selectedEntry.date &&
								moment(selectedEntry.date).format(
									'MMMM Do, YYYY',
								)}
						</div>
						<div>{selectedEntry.getReadableHashtags()}</div>
					</KinesisArticleSubtitle>
					<KinesisArticleMarkdown
						color={selectedEntry.primaryColor}
						content={content}
					/>
				</div>
			);
		} else if (selectedEntry.type === Type.experiment) {
			return React.createElement(content, {
				primaryColor: selectedEntry.primaryColor,
				secondaryColor: selectedEntry.secondaryColor,
			});
		}
		return <div>Ruh oh!</div>;
	};

	renderLoadingOrContent = () => {
		const { contentLoading, history, location, selectedEntry } = this.props;

		if (contentLoading) {
			return (
				<StyledLoadingAnimation
					color={selectedEntry.primaryColor}
					text={selectedEntry.name}
				/>
			);
		}
		return (
			<ContentScroller history={history} location={location}>
				{this.renderContent()}
			</ContentScroller>
		);
	};

	render() {
		const { selectedEntry } = this.props;

		if (!selectedEntry) {
			return null;
		}

		return (
			<BackgroundGradient backgroundColor={selectedEntry.secondaryColor}>
				<KinesisContainer>
					{this.renderLoadingOrContent()}
				</KinesisContainer>
			</BackgroundGradient>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(KinesisContent);
