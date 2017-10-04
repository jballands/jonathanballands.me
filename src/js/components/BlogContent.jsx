//
//	jballands/jonathanballands.me
//	BlogContent.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { animateScroll } from 'react-scroll';
import styled from 'styled-components';

import BackgroundGradient from 'components/BackgroundGradient';
import BlogEntry from 'components/BlogEntry';
import LoadingAnimation from 'components/LoadingAnimation';

import { frostedMint, puertoRico } from 'helpers/palette';

const StyledLoadingAnimation = styled(LoadingAnimation)`margin-top: 100px;`;

export default class BlogContent extends React.Component {
	static displayName = 'BlogContent';

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
					color={puertoRico}
					text={selectedEntry.name}
				/>
			);
		}
		return <BlogEntry content={content} selectedEntry={selectedEntry} />;
	};

	render() {
		// animateScroll.scrollToTop({ duration: 300 });

		return (
			<BackgroundGradient backgroundColor={frostedMint}>
				{this.renderContent()}
			</BackgroundGradient>
		);
	}
}
