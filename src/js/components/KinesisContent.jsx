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
import KinesisEntry from 'components/KinesisEntry';
import LoadingAnimation from 'components/LoadingAnimation';

const StyledLoadingAnimation = styled(LoadingAnimation)`margin-top: 100px;`;

export default class KinesisContent extends React.Component {
	static displayName = 'KinesisContent';

	static propTypes = {
		content: PropTypes.string,
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
		return <KinesisEntry content={content} selectedEntry={selectedEntry} />;
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
