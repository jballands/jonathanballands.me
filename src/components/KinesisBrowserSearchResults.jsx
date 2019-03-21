//
//	jballands/jonathanballands.me
//	KinesisBrowserSearchResults.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import styled from 'styled-components';

import KinesisBrowserSearchResult from 'components/KinesisBrowserSearchResult';

import { alto, silver } from 'helpers/palette';
import { filter } from 'rsvp';

const KinesisBrowserSearchResultsContainer = styled.div`
	margin-top: 25px;
	overflow-y: auto;
	flex: 1 0;
	border-top: 1px solid ${alto};
`;

const NoSearchResultsContainer = styled.div`
	margin-top: 25px;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	border-top: 1px solid ${alto};
`;

const NoSearchResultsTitle = styled.div`
	margin-top: 25px;
	color: ${props => props.color};
	font-size: 21px;
	text-transform: uppercase;
	font-weight: 700;
`;

const NoSearchResultsDetails = styled.div`
	color: ${silver};
	font-size: 13px;
	margin-top: 12px;
`;

export default class KinesisBrowserSearchResults extends React.Component {
	static displayName = 'KinesisBrowserSearchResults';

	static propTypes = {
		chooseEntry: PropTypes.func,
		filteredEntries: PropTypes.instanceOf(Immutable.OrderedMap),
		selectedEntry: PropTypes.object,
	};

	handleChooseKinesisEntry = id => {
		const { chooseEntry } = this.props;
		chooseEntry(id);
	};

	render() {
		const { filteredEntries, match, selectedEntry } = this.props;

		if (filteredEntries.size <= 0) {
			return (
				<NoSearchResultsContainer>
					<NoSearchResultsTitle color={selectedEntry.primaryColor}>
						No Results 😢
					</NoSearchResultsTitle>
					<NoSearchResultsDetails>
						Try a different search, or type something more broad
					</NoSearchResultsDetails>
				</NoSearchResultsContainer>
			);
		}

		return (
			<KinesisBrowserSearchResultsContainer>
				{filteredEntries
					.map(result => {
						if (result.get('hidden')) {
							return null;
						}

						return (
							<KinesisBrowserSearchResult
								key={result.get('id')}
								result={result}
								onClick={this.handleChooseKinesisEntry}
								active={
									selectedEntry
										? selectedEntry.get('id') ===
										  result.get('id')
										: false
								}
							/>
						);
					})
					.valueSeq()}
			</KinesisBrowserSearchResultsContainer>
		);
	}
}
