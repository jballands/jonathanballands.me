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

import LoadingAnimation from 'components/LoadingAnimation';

const ContentContainer = styled.div`
	width: 100%;
	height: 100%;
	background: #00d2a0;
	position: relative;
`;

const BackgroundGradient = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 500px;
	background: #00d2a0;
	background: -webkit-linear-gradient(top, #00e9b2, #00d2a0);
	background: -o-linear-gradient(top, #00e9b2, #00d2a0);
	background: -moz-linear-gradient(top, #00e9b2, #00d2a0);
	background: linear-gradient(to bottom, #00e9b2, #00d2a0);
`;

export default class BlogContent extends React.Component {
	static displayName = 'BlogContent';

	static propTypes = {
		content: PropTypes.string,
		contentLoading: PropTypes.bool,
		selectedEntry: PropTypes.object.isRequired,
	};

	render() {
		const { content, contentLoading, selectedEntry } = this.props;

		animateScroll.scrollToTop({ duration: 300 });

		return (
			<ContentContainer>
				<BackgroundGradient />
			</ContentContainer>
		);
	}
}
