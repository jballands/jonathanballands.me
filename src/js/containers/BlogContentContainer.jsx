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

function mapDispatchToProps(dispatch) {
	return {
		chooseEntry: uri => dispatch(chooseEntry(uri)),
	};
}

class BlogContentContainer extends React.Component {
	static displayName = 'BlogContentContainer';

	static propTypes = {
		chooseEntry: PropTypes.func,
		selectedEntry: PropTypes.object,
	};

	componentDidMount() {
		// TODO: I don't really like this...
		// The redux store should just automagically have the correct selection when the route changes
		const uri = this.props.match.params.blogId;
		if (uri && uri !== '') {
			this.props.chooseEntry(this.props.match.params.blogId);
		}
	}

	render() {
		const { selectedEntry } = this.props;
		return <BlogContent selectedEntry={selectedEntry} />;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(
	BlogContentContainer,
);
