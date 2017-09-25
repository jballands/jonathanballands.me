//
//	jballands/jonathanballands.me
//	BlogContentContainer.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

		return (
			<div style={{ height: '1500px' }}>
				Hello world hi yes its me hello world let me see if i can peak
				out from behind this sidebar!
			</div>
		);
	}
}

export default connect(mapStateToProps)(BlogContentContainer);
