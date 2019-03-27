//
//	jballands/jonathanballands.me
//	ContentScroller.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { animateScroll } from 'react-scroll';

export default class ContentScroller extends React.Component {
	static displayName = 'ContentScroller';

	static propTypes = {
		children: PropTypes.node,
		history: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
	};

	unlisten = null;

	componentDidMount() {
		const { history, location } = this.props;

		this.unlisten = history.listen(this.scrollToHash);
		this.scrollToHash(location);
	}

	componentWillUnmount() {
		this.unlisten();
	}

	scrollToHash = location => {
		const animateOptions = { duration: 1000, smooth: 'easeOutQuint' };

		if (location.hash) {
			const element = document.getElementById(location.hash.slice(1));
			const offset = element
				? element.getBoundingClientRect().top - 25
				: 0;
			animateScroll.scrollMore(offset, animateOptions);
		} else {
			animateScroll.scrollToTop(animateOptions);
		}
	};

	render() {
		return this.props.children;
	}
}
