//
//	jballands/jonathanballands.me
//	BlogContentContainer.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';

import { chooseEntry } from 'actions/BlogActions';

import BlogContent from 'components/BlogContent';

function mapStateToProps(state) {
	return {
		content: state.blog.content,
		contentLoading: state.blog.contentLoading,
		filteredEntries: state.blog.filteredEntries,
		selectedEntry: state.blog.selectedEntry,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		chooseEntry: id => dispatch(chooseEntry(id)),
	};
}

class BlogContentContainer extends React.Component {
	static displayName = 'BlogContentContainer';

	static propTypes = {
		chooseEntry: PropTypes.func,
		content: PropTypes.string,
		contentLoading: PropTypes.bool,
		filteredEntries: PropTypes.instanceOf(Immutable.OrderedMap),
		history: PropTypes.object,
		match: PropTypes.object,
		selectedEntry: PropTypes.object,
	};

	componentDidMount() {
		const { filteredEntries, history, match, selectedEntry } = this.props;

		// When the component mounts, we need to initialize the state to have
		// a selected blog entry by default

		// blogId is an optional param here in the route. This if-block
		// is executed when you open up a route that already has a blogId
		// associated with it, in which case we just choose it
		const blogId = match.params.blogId;
		if (blogId && blogId !== '') {
			return this.props.chooseEntry(blogId);
		}

		// An entry may already be chosen implicitly in the Redux state. This
		// if-block is executed when you leave the blog page but stay on my
		// website and then click back to the blog tab
		if (selectedEntry !== null) {
			history.push(`${match.url}/${selectedEntry.id}`);
			return this.props.chooseEntry(selectedEntry.id);
		}

		// This if-block gets executed when you open the blog page up for the
		// first time, which case we just pick the latest available blog and
		// move on
		const firstEntry =
			filteredEntries.keySeq().size > 0
				? filteredEntries.get(filteredEntries.keySeq().get(0))
				: null;

		if (firstEntry !== null) {
			history.push(`${match.url}/${firstEntry.id}`);
			this.props.chooseEntry(firstEntry.id);
		}
	}

	render() {
		const { content, contentLoading, selectedEntry } = this.props;

		if (!selectedEntry) {
			return null;
		}
		return (
			<BlogContent
				selectedEntry={selectedEntry}
				content={content}
				contentLoading={contentLoading}
			/>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(
	BlogContentContainer,
);
