//
//	jballands/jonathanballands.me
//	RouteWithFooter.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import _omit from 'lodash.omit';

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
		const props = _omit(this.props, ['children']);
		return <Route {...props} render={this.renderChildren} />;
	}
}
