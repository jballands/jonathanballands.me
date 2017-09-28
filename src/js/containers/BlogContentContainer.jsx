//
//	jballands/jonathanballands.me
//	BlogContentContainer.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { chooseEntry } from 'actions/BlogActions';

import BlogContent from 'components/BlogContent';

function mapStateToProps(state) {
	return {
		selectedEntry: state.blog.selectedEntry,
	};
}

class BlogContentContainer extends React.Component {
	static displayName = 'BlogContentContainer';

	static propTypes = {
		selectedEntry: PropTypes.object,
	};

	render() {
		const { selectedEntry } = this.props;
		return <BlogContent selectedEntry={selectedEntry} />;
	}
}

export default connect(mapStateToProps)(BlogContentContainer);
