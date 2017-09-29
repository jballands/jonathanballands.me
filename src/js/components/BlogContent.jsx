//
//	jballands/jonathanballands.me
//	BlogContent.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { animateScroll } from 'react-scroll';
import Markdown from 'react-markdown';

import LoadingAnimation from 'components/LoadingAnimation';

export default class BlogContent extends React.Component {
	static displayName = 'BlogContent';

	static propTypes = {
		selectedEntry: PropTypes.object.isRequired,
	};

	render() {
		const { selectedEntry } = this.props;

		animateScroll.scrollToTop({ duration: 300 });

		return (
			<div>
				<LoadingAnimation />
				<img src="https://media3.giphy.com/media/OQBZYsrOTPRjW/giphy.gif" />
			</div>
		);
	}
}
