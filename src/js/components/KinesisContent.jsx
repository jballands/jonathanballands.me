//
//	jballands/jonathanballands.me
//	KinesisContent.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

import BackgroundGradient from 'components/BackgroundGradient';
import ContentScroller from 'components/ContentScroller';
import KinesisMarkdown from 'components/KinesisMarkdown';
import LoadingAnimation from 'components/LoadingAnimation';

import { Type } from '~/kinesis.config.js';

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
	font-weight: 700;
	color: ${props => props.color};
	font-family: 'Raleway', sans-serif;
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

export default class KinesisContent extends React.Component {
	static displayName = 'KinesisContent';

	static propTypes = {
		content: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
		contentLoading: PropTypes.bool,
		history: PropTypes.object,
		location: PropTypes.object,
		selectedEntry: PropTypes.object.isRequired,
	};

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

		return (
			<BackgroundGradient backgroundColor={selectedEntry.secondaryColor}>
				<KinesisContainer>
					{this.renderLoadingOrContent()}
				</KinesisContainer>
			</BackgroundGradient>
		);
	}
}
