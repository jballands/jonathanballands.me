//
//	jballands/jonathanballands.me
//	KinesisContent.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BackgroundGradient from 'components/BackgroundGradient';
import KinesisArticle from 'components/KinesisArticle';
import LoadingAnimation from 'components/LoadingAnimation';

import { Type } from '~/kinesis.config.js';

const StyledLoadingAnimation = styled(LoadingAnimation)`margin-top: 100px;`;

export default class KinesisContent extends React.Component {
	static displayName = 'KinesisContent';

	static propTypes = {
		content: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
		contentLoading: PropTypes.bool,
		selectedEntry: PropTypes.object.isRequired,
	};

	renderContent = () => {
		const { content, contentLoading, selectedEntry } = this.props;

		if (contentLoading) {
			return (
				<StyledLoadingAnimation
					color={selectedEntry.primaryColor}
					text={selectedEntry.name}
				/>
			);
		}

		if (selectedEntry.type === Type.article) {
			return (
				<KinesisArticle
					content={content}
					selectedEntry={selectedEntry}
				/>
			);
		} else if (selectedEntry.type === Type.experiment) {
			return React.createElement(content);
		}
		return <div>Ruh oh!</div>;
	};

	render() {
		const { selectedEntry } = this.props;

		return (
			<BackgroundGradient backgroundColor={selectedEntry.secondaryColor}>
				{this.renderContent()}
			</BackgroundGradient>
		);
	}
}