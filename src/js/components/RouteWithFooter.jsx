//
//	jballands/jonathanballands.me
//	RouteWithFooter.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import FooterWrapper from 'components/FooterWrapper';

export default class RouteWithFooter extends React.Component {
	static displayName = 'RouteWithFooter';

	static propTypes = {
		children: PropTypes.func,
	};

	renderChildren = props => {
		return <FooterWrapper>{this.props.children(props)}</FooterWrapper>;
	};

	render() {
		return <Route {...this.props} render={this.renderChildren} />;
	}
}
