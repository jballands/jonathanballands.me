//
//	jballands/jonathanballands.me
//	MarkdownHeader.js
//
//	© 2019 Jonathan Ballands
//

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class MarkdownHeading extends PureComponent {
	static displayName = 'MarkdownHeading';

	static propTypes = {
		children: PropTypes.node,
		level: PropTypes.number,
	};

	render() {
		const children = React.Children.toArray(this.props.children);
		const anchor = children
			.reduce((acc, curr) => (acc += curr), '')
			.toLowerCase()
			.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\?']/g, '')
			.replace(/\s/g, '-');

		return React.createElement(
			`h${this.props.level}`,
			{ id: anchor },
			this.props.children,
		);
	}
}
