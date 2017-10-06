//
//	jballands/jonathanballands.me
//	KinesisBrowserContainer.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';

import KinesisBrowser from 'components/KinesisBrowser';

import {
	searchKinesisPosts,
	setSortOrder,
	chooseEntry,
} from 'actions/KinesisActions';

function mapStateToProps(state) {
	return {
		filteredEntries: state.kinesis.filteredEntries,
		searchTerms: state.kinesis.searchTerms,
		selectedEntry: state.kinesis.selectedEntry,
		sortOrder: state.kinesis.sortOrder,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		chooseEntry: uri => dispatch(chooseEntry(uri)),
		searchKinesisPosts: terms => dispatch(searchKinesisPosts(terms)),
		setSortOrder: sortOrder => dispatch(setSortOrder(sortOrder)),
	};
}

class KinesisBrowserContainer extends React.Component {
	static displayName = 'KinesisBrowserContainer';

	static propTypes = {
		chooseEntry: PropTypes.func,
		filteredEntries: PropTypes.instanceOf(Immutable.Map),
		history: PropTypes.object,
		match: PropTypes.object,
		searchKinesisPosts: PropTypes.func,
		searchTerms: PropTypes.string,
		selectedEntry: PropTypes.object,
		setSortOrder: PropTypes.func,
		sortOrder: PropTypes.string,
	};

	handleChooseEntry = uri => {
		const { chooseEntry } = this.props;
		chooseEntry(uri);
	};

	render() {
		const {
			searchKinesisPosts,
			filteredEntries,
			match,
			searchTerms,
			selectedEntry,
			setSortOrder,
			sortOrder,
		} = this.props;

		if (!selectedEntry) {
			return null;
		}

		return (
			<KinesisBrowser
				chooseEntry={this.handleChooseEntry}
				searchKinesisPosts={searchKinesisPosts}
				filteredEntries={filteredEntries}
				searchTerms={searchTerms}
				selectedEntry={selectedEntry}
				setSortOrder={setSortOrder}
				sortOrder={sortOrder}
				match={match}
			/>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(
	KinesisBrowserContainer,
);
