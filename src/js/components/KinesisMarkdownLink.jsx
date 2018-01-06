//
//	jballands/jonathanballands.me
//	KinesisMarkdownLink.js
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';

export default class KinesisMarkdownLink extends React.PureComponent {
	static displayName = 'KinesisMarkdownLink';

	static propTypes = {
		href: PropTypes.string,
		children: PropTypes.node,
	};

	render() {
		const { href, children } = this.props;

		// Is this an anchor tag?
		if (href.startsWith('#')) {
			return <a href={href}>{children}</a>;
		}
		return (
			<a href={href} target="_blank">
				{children}
			</a>
		);
	}
}
