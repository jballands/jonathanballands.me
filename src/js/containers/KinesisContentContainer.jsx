//
//	jballands/jonathanballands.me
//	KinesisContentContainer.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { connect } from 'react-redux';

import { chooseEntry } from 'actions/KinesisActions';

import KinesisContent from 'components/KinesisContent';

import entries from 'helpers/kinesisEntries';

function mapStateToProps(state) {
	return {
		content: state.kinesis.content,
		contentLoading: state.kinesis.contentLoading,
		filteredEntries: state.kinesis.filteredEntries,
		selectedEntry: state.kinesis.selectedEntry,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		chooseEntry: id => dispatch(chooseEntry(id)),
	};
}

class KinesisContentContainer extends React.Component {
	static displayName = 'KinesisContentContainer';

	static propTypes = {
		chooseEntry: PropTypes.func,
		content: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
		contentLoading: PropTypes.bool,
		filteredEntries: PropTypes.instanceOf(Immutable.OrderedMap),
		history: PropTypes.object,
		location: PropTypes.object,
		match: PropTypes.object,
		selectedEntry: PropTypes.object,
	};

	chooseEntryBasedOnRoute = () => {
		this.props.chooseEntry(
			entries.get(this.props.match.params.kinesisId).id,
		);
	};

	componentDidMount() {
		// When this component mounts, just choose an entry
		this.chooseEntryBasedOnRoute();
	}

	componentDidUpdate(prevProps) {
		// We only react when the route changes
		if (this.props.location.pathname !== prevProps.location.pathname) {
			this.chooseEntryBasedOnRoute();
		}
	}

	render() {
		const {
			content,
			contentLoading,
			history,
			location,
			selectedEntry,
		} = this.props;

		if (!selectedEntry) {
			return null;
		}
		return (
			<KinesisContent
				selectedEntry={selectedEntry}
				content={content}
				contentLoading={contentLoading}
				history={history}
				location={location}
			/>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(
	KinesisContentContainer,
);
