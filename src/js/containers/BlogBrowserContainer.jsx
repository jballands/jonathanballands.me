//
//	jballands/jonathanballands.me
//	BlogBrowserContainer.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { searchBlogPosts } from 'actions/BlogActions';

import BlogBrowser from 'components/BlogBrowser';

function mapStateToProps(state) {
	return {
		searchTerms: state.searchTerms,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		searchBlogPosts: terms => dispatch(searchBlogPosts(terms)),
	};
}

class BlogBrowserContainer extends React.Component {
	static displayName = 'BlogBrowserContainer';

	static propTypes = {
		searchBlogPosts: PropTypes.func,
		searchTerms: PropTypes.string,
	};

	render() {
		const { searchBlogPosts, searchTerms } = this.props;

		return (
			<BlogBrowser
				searchBlogPosts={searchBlogPosts}
				searchTerms={searchTerms}
			/>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(
	BlogBrowserContainer,
);
