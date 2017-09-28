//
//	jballands/jonathanballands.me
//	BlogContent.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export default class BlogContent extends React.Component {
	static displayName = 'BlogContent';

	static propTypes = {
		selectedEntry: PropTypes.object,
	};

	render() {
		console.log(this.props);

		return (
			<div>
				<div style={{ marginBottom: '1000px' }}>
					<span>{this.props.selectedEntry.name}</span>
					<br />
					<span>Scroll down...</span>
				</div>

				<img src="https://media3.giphy.com/media/OQBZYsrOTPRjW/giphy.gif" />
			</div>
		);
	}
}
