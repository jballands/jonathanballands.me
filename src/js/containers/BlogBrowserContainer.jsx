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

import {
	searchBlogPosts,
	setSortOrder,
	chooseEntry,
} from 'actions/BlogActions';

import BlogBrowser from 'components/BlogBrowser';

function mapStateToProps(state) {
	return {
		filteredEntries: state.blog.filteredEntries,
		searchTerms: state.blog.searchTerms,
		selectedEntry: state.blog.selectedEntry,
		sortOrder: state.blog.sortOrder,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		chooseEntry: uri => dispatch(chooseEntry(uri)),
		searchBlogPosts: terms => dispatch(searchBlogPosts(terms)),
		setSortOrder: sortOrder => dispatch(setSortOrder(sortOrder)),
	};
}

class BlogBrowserContainer extends React.Component {
	static displayName = 'BlogBrowserContainer';

	static propTypes = {
		chooseEntry: PropTypes.func,
		filteredEntries: PropTypes.instanceOf(Immutable.Map),
		searchBlogPosts: PropTypes.func,
		searchTerms: PropTypes.string,
		selectedEntry: PropTypes.object,
		setSortOrder: PropTypes.func,
		sortOrder: PropTypes.string,
	};

	render() {
		const {
			chooseEntry,
			searchBlogPosts,
			filteredEntries,
			searchTerms,
			selectedEntry,
			setSortOrder,
			sortOrder,
		} = this.props;

		return (
			<BlogBrowser
				chooseEntry={chooseEntry}
				searchBlogPosts={searchBlogPosts}
				filteredEntries={filteredEntries}
				searchTerms={searchTerms}
				selectedEntry={selectedEntry}
				setSortOrder={setSortOrder}
				sortOrder={sortOrder}
			/>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(
	BlogBrowserContainer,
);
