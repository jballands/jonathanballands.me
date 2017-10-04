//
//	jballands/jonathanballands.me
//	BlogBrowser.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import styled from 'styled-components';
import TextInput from '@jballands/vespyr/lib/TextInput';
import RadioGroup from '@jballands/vespyr/lib/RadioGroup';
import RadioItem from '@jballands/vespyr/lib/RadioItem';

import BrowserDrawer from 'components/BrowserDrawer';
import BlogBrowserSearchResults from 'components/BlogBrowserSearchResults';

import { frostedMint, puertoRico, shark } from 'helpers/palette';

import MagnifyingGlassSvg from 'svg/MagnifyingGlassSvg';

const BlogBrowserContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
`;

const StyledTextInput = styled(TextInput)`width: 100%;`;

const StyledRadioGroup = styled(RadioGroup)`
	width: 100%;
	margin-top: 25px;
`;

const FiltersContainer = styled.div`
	margin-left: 20px;
	width: calc(100% - 40px);
`;

export default class BlogBrowser extends React.Component {
	static displayName = 'BlogBrowser';

	static propTypes = {
		chooseEntry: PropTypes.func,
		filteredEntries: PropTypes.instanceOf(Immutable.Map),
		match: PropTypes.object,
		searchBlogPosts: PropTypes.func,
		searchTerms: PropTypes.string,
		selectedEntry: PropTypes.object,
		setSortOrder: PropTypes.func,
		sortOrder: PropTypes.string,
	};

	handleSearchChange = terms => {
		this.props.searchBlogPosts(terms);
	};

	handleSetSortOrder = sortOrder => {
		this.props.setSortOrder(sortOrder);
	};

	renderControls = () => {
		const { searchTerms, sortOrder } = this.props;

		return (
			<FiltersContainer>
				<StyledTextInput
					color={shark}
					accentColor={puertoRico}
					title="Search"
					hint="Search for topics, hashtags, and more"
					icon={<MagnifyingGlassSvg color={shark} />}
					value={searchTerms}
					onUpdate={this.handleSearchChange}
				/>

				<StyledRadioGroup
					defaultSelection={sortOrder}
					title="Sort Order"
					color={shark}
					accentColor={puertoRico}
					onOptionClick={this.handleSetSortOrder}>
					<RadioItem id="later">Later Posts First</RadioItem>
					<RadioItem id="earlier">Earlier Posts First</RadioItem>
				</StyledRadioGroup>
			</FiltersContainer>
		);
	};

	render() {
		const {
			chooseEntry,
			filteredEntries,
			match,
			selectedEntry,
		} = this.props;

		return (
			<BrowserDrawer
				backgroundColor={frostedMint}
				color={puertoRico}
				title="Posts">
				{close => (
					<BlogBrowserContainer>
						{this.renderControls()}
						<BlogBrowserSearchResults
							chooseEntry={chooseEntry}
							closeDrawer={close}
							filteredEntries={filteredEntries}
							match={match}
							selectedEntry={selectedEntry}
						/>
					</BlogBrowserContainer>
				)}
			</BrowserDrawer>
		);
	}
}
