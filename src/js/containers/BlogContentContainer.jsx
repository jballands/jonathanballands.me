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
		filteredEntries: PropTypes.instanceOf(Immutable.OrderedMap),
		selectedEntry: PropTypes.object,
	};

	componentDidMount() {
		const { filteredEntries, history, match, selectedEntry } = this.props;

		// When the component mounts, we need to initialize the state to have
		// a selected blog entry by default

		// blogId is an optional param here in the route. If it's empty, we
		// just pick from first blog and move on
		const blogId = match.params.blogId;
		if (blogId && blogId !== '') {
			return this.props.chooseEntry(blogId);
		}

		// An entry may already be chosen implicitly in the Redux state. Hydrate
		// the route
		if (selectedEntry !== null) {
			history.push(`${match.url}/${selectedEntry.id}`);
			return this.props.chooseEntry(selectedEntry.id);
		}

		// If there's no param and there's no selected entry, then this is the first
		// time we've accessed this page, so we simply pick the first entry and go
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
		const { selectedEntry } = this.props;

		if (!selectedEntry) {
			return null;
		}
		return <BlogContent selectedEntry={selectedEntry} />;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(
	BlogContentContainer,
);
