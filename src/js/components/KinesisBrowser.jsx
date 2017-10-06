//
//	jballands/jonathanballands.me
//	KinesisBrowser.jsx
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
import KinesisBrowserSearchResults from 'components/KinesisBrowserSearchResults';

import { fuchsiaBlue, moonRaker, shark } from 'helpers/palette';

import MagnifyingGlassSvg from 'svg/MagnifyingGlassSvg';

const KinesisBrowserContainer = styled.div`
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

export default class KinesisBrowser extends React.Component {
	static displayName = 'KinesisBrowser';

	static propTypes = {
		chooseEntry: PropTypes.func,
		filteredEntries: PropTypes.instanceOf(Immutable.Map),
		match: PropTypes.object,
		searchKinesisPosts: PropTypes.func,
		searchTerms: PropTypes.string,
		selectedEntry: PropTypes.object,
		setSortOrder: PropTypes.func,
		sortOrder: PropTypes.string,
	};

	handleSearchChange = terms => {
		this.props.searchKinesisPosts(terms);
	};

	handleSetSortOrder = sortOrder => {
		this.props.setSortOrder(sortOrder);
	};

	renderControls = () => {
		const { searchTerms, selectedEntry, sortOrder } = this.props;

		return (
			<FiltersContainer>
				<StyledTextInput
					color={shark}
					accentColor={selectedEntry.primaryColor}
					title="Search"
					hint="Search for topics, hashtags, & more"
					icon={<MagnifyingGlassSvg color={shark} />}
					value={searchTerms}
					onUpdate={this.handleSearchChange}
				/>

				<StyledRadioGroup
					defaultSelection={sortOrder}
					title="Sort Order"
					color={shark}
					accentColor={selectedEntry.primaryColor}
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
				backgroundColor={selectedEntry.secondaryColor}
				color={selectedEntry.primaryColor}
				title="Posts">
				{close => (
					<KinesisBrowserContainer>
						{this.renderControls()}
						<KinesisBrowserSearchResults
							chooseEntry={chooseEntry}
							closeDrawer={close}
							filteredEntries={filteredEntries}
							match={match}
							selectedEntry={selectedEntry}
						/>
					</KinesisBrowserContainer>
				)}
			</BrowserDrawer>
		);
	}
}