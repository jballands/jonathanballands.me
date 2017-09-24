//
//	jballands/jonathanballands.me
//	BlogBrowserContainer.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';

import { searchBlogPosts, setSortOrder } from 'actions/BlogActions';

import BlogBrowser from 'components/BlogBrowser';

function mapStateToProps(state) {
	return {
		searchTerms: state.blog.searchTerms,
		searchResults: state.blog.searchResults,
		sortOrder: state.blog.sortOrder,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		searchBlogPosts: terms => dispatch(searchBlogPosts(terms)),
		setSortOrder: sortOrder => dispatch(setSortOrder(sortOrder)),
	};
}

class BlogBrowserContainer extends React.Component {
	static displayName = 'BlogBrowserContainer';

	static propTypes = {
		searchBlogPosts: PropTypes.func,
		searchResults: PropTypes.instanceOf(Immutable.Map),
		searchTerms: PropTypes.string,
		setSortOrder: PropTypes.func,
		sortOrder: PropTypes.string,
	};

	render() {
		const {
			searchBlogPosts,
			searchResults,
			searchTerms,
			setSortOrder,
			sortOrder,
		} = this.props;

		return (
			<BlogBrowser
				searchBlogPosts={searchBlogPosts}
				searchResults={searchResults}
				searchTerms={searchTerms}
				setSortOrder={setSortOrder}
				sortOrder={sortOrder}
			/>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(
	BlogBrowserContainer,
);
