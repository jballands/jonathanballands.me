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

const mapStateToProps = ({ kinesis }) => ({
	filteredEntries: kinesis.get('filteredEntries'),
	searchTerms: kinesis.get('searchTerms'),
	selectedEntry: kinesis.get('selectedEntry'),
	sortOrder: kinesis.get('sortOrder'),
});

const mapDispatchToProps = dispatch => ({
	chooseEntry: uri => dispatch(chooseEntry(uri)),
	searchKinesisPosts: terms => dispatch(searchKinesisPosts(terms)),
	setSortOrder: sortOrder => dispatch(setSortOrder(sortOrder)),
});

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

	handleChooseEntry = id => {
		const { chooseEntry } = this.props;
		chooseEntry(id);
	};

	render() {
		const {
			searchKinesisPosts,
			filteredEntries,
			history,
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
				history={history}
			/>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(
	KinesisBrowserContainer,
);
