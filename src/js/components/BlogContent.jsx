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
			<Route>
				<div>{this.props.selectedEntry.name}</div>
			</Route>
		);
	}
}
