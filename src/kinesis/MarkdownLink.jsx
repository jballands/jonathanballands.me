//
//	jballands/jonathanballands.me
//	MarkdownLink.js
//
//	© 2019 Jonathan Ballands
//

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class MarkdownLink extends PureComponent {
	static displayName = 'MarkdownLink';

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
