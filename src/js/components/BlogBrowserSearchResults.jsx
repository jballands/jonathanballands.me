//
//	jballands/jonathanballands.me
//	BlogBrowserSearchResults.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import styled from 'styled-components';

import BlogBrowserSearchResult from 'components/BlogBrowserSearchResult';

import { alto, puertoRico, shark } from 'helpers/palette';

const BlogBrowserSearchResultsContainer = styled.div`
	margin-top: 25px;
	overflow-y: scroll;
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
	color: ${puertoRico};
	font-size: 20px;
	text-transform: uppercase;
`;

const NoSearchResultsDetails = styled.div`
	color: ${shark};
	font-size: 14px;
	margin-top: 5px;
`;

export default class BlogBrowserSearchResults extends React.Component {
	static displayName = 'BlogBrowserSearchResults';

	static propTypes = {
		chooseEntry: PropTypes.func,
		closeDrawer: PropTypes.func,
		filteredEntries: PropTypes.instanceOf(Immutable.Map),
		match: PropTypes.object,
		selectedEntry: PropTypes.object,
	};

	handleChooseBlogEntry = id => {
		const { closeDrawer, chooseEntry } = this.props;

		closeDrawer();
		chooseEntry(id);
	};

	render() {
		const { filteredEntries, match, selectedEntry } = this.props;

		if (filteredEntries.size <= 0) {
			return (
				<NoSearchResultsContainer>
					<NoSearchResultsTitle>No Results :(</NoSearchResultsTitle>
					<NoSearchResultsDetails>
						Try a different search, or type something more broad
					</NoSearchResultsDetails>
				</NoSearchResultsContainer>
			);
		}

		return (
			<BlogBrowserSearchResultsContainer>
				{filteredEntries.entrySeq().map(result => {
					return (
						<BlogBrowserSearchResult
							title={result[1].name}
							date={result[1].date}
							hashtags={result[1].hashtags}
							key={result[0]}
							onClick={this.handleChooseBlogEntry}
							id={result[0]}
							match={match}
							active={
								selectedEntry
									? selectedEntry.id === result[0]
									: false
							}
						/>
					);
				})}
			</BlogBrowserSearchResultsContainer>
		);
	}
}
