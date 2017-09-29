//
//	jballands/jonathanballands.me
//	BlogContent.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { animateScroll } from 'react-scroll';

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
				<div style={{ marginBottom: '1000px' }}>
					<span>{selectedEntry.name}</span>
					<br />
					<span>Scroll down...</span>
				</div>

				<img src="https://media3.giphy.com/media/OQBZYsrOTPRjW/giphy.gif" />
			</div>
		);
	}
}
