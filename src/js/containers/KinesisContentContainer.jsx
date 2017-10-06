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
		// a selected Kinesis entry by default

		// kinesisId is an optional param here in the route. This if-block
		// is executed when you open up a route that already has a kinesisId
		// associated with it, in which case we just choose it
		const kinesisId = match.params.kinesisId;
		if (kinesisId && kinesisId !== '') {
			return this.props.chooseEntry(kinesisId);
		}

		// An entry may already be chosen implicitly in the Redux state. This
		// if-block is executed when you leave the Kinesis page but stay on my
		// website and then click back to the Kinesis tab
		if (selectedEntry !== null) {
			history.push(`${match.url}/${selectedEntry.id}`);
			return this.props.chooseEntry(selectedEntry.id);
		}

		// This if-block gets executed when you open the Kinesis page up for the
		// first time, which case we just pick the latest available Kinesis and
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
			<KinesisContent
				selectedEntry={selectedEntry}
				content={content}
				contentLoading={contentLoading}
			/>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(
	KinesisContentContainer,
);
