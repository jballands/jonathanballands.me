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
			<div style={{ flex: '0 1 100%' }}>
				<img src="http://cpascount.org/wp-content/uploads/2016/05/austin-aerial-2.jpg" />
				<img src="http://cpascount.org/wp-content/uploads/2016/05/austin-aerial-2.jpg" />
			</div>
		);
	}
}

export default connect(mapStateToProps)(BlogContentContainer);
