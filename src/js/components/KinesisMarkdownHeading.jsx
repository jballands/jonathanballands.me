//
//	jballands/jonathanballands.me
//	KinesisMarkdownHeader.js
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';

export default class KinesisMarkdownHeading extends React.PureComponent {
	static displayName = 'KinesisMarkdownHeading';

	static propTypes = {
		children: PropTypes.node,
		level: PropTypes.string,
	};

	render() {
		const children = React.Children.toArray(this.props.children);
		const anchor = children
			.reduce((acc, curr) => (acc += curr), '')
			.toLowerCase()
			.replace(/\W/g, '-');

		console.log('rawr');

		return React.createElement(
			`h${this.props.level}`,
			{ id: anchor },
			this.props.children,
		);
	}
}
