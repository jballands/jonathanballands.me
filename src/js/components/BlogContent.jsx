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

import BlogEntry from 'components/BlogEntry';
import LoadingAnimation from 'components/LoadingAnimation';

import { frostedMint, puertoRico, white } from 'helpers/palette';

const ContentContainer = styled.div`
	width: 100%;
	height: 100%;
	background: white;
	position: relative;
`;

const BackgroundGradient = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 500px;
	background: -webkit-linear-gradient(top, ${frostedMint}, ${white});
	background: -o-linear-gradient(top, ${frostedMint}, ${white});
	background: -moz-linear-gradient(top, ${frostedMint}, ${white});
	background: linear-gradient(to bottom, ${frostedMint}, ${white});
`;

const Content = styled.div`
	flex: 1 0;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	position: relative;
`;

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
		animateScroll.scrollToTop({ duration: 300 });

		return (
			<ContentContainer>
				<BackgroundGradient />
				<Content>{this.renderContent()}</Content>
			</ContentContainer>
		);
	}
}
