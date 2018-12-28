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

import StickyDrawer from 'components/StickyDrawer';
import KinesisBrowserSearchResults from 'components/KinesisBrowserSearchResults';

import { shark, white, linkShade } from 'helpers/palette';

import LeftArrowSvg from 'svg/LeftArrowSvg';
import MagnifyingGlassSvg from 'svg/MagnifyingGlassSvg';
import OpenDrawerSvg from 'svg/OpenDrawerSvg';

const StyledTextInput = styled(TextInput)`
	width: 100%;

	::placeholder {
		font-style: normal;
		font-family: Bodytext;
	}
`;

const StyledRadioGroup = styled(RadioGroup)`
	width: 100%;
	margin-top: 25px;
`;

const StyledOpenDrawerSvg = styled(OpenDrawerSvg)`
	fill: ${props => props.color};

	&:hover {
		cursor: pointer;
		fill: ${props => linkShade(props.color)};
	}
`;

const FiltersContainer = styled.div`
	margin-left: 20px;
	width: calc(100% - 40px);
`;

const OpenDrawerButton = styled.div`
	padding: 20px;
`;

const OpenBrowserDrawerContainer = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column nowrap;
	height: 100%;
`;

const TitleContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: space-between;
	margin: 20px;
`;

const TitleButton = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	color: ${props => props.color};
	fill: ${props => props.color};

	&:hover {
		cursor: pointer;
		color: ${props => linkShade(props.color)};
		fill: ${props => linkShade(props.color)};
	}
`;

const Title = styled.span`
	font-family: BodytextBold;
	font-size: 22px;
	text-transform: uppercase;
	margin-left: 10px;
	color: ${props => props.color};
`;

const StyledMagnifyingGlassSvg = styled(MagnifyingGlassSvg)`
	width: 23px;
`;

export default class KinesisBrowser extends React.Component {
	static displayName = 'KinesisBrowser';

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

	state = {
		drawerOpen: true,
		overrideAutoCollapse: false,
	};

	handleOnScroll = ({ isSticky, wasSticky }) => {
		const { overrideAutoCollapse } = this.state;

		if (!wasSticky && isSticky && !overrideAutoCollapse) {
			this.handleCloseDrawer();
		}
	};

	handleOpenDrawer = () => {
		this.setState({
			drawerOpen: true,
			overrideAutoCollapse: true,
		});
	};

	handleCloseDrawer = () => {
		this.setState({
			drawerOpen: false,
		});
	};

	handleChooseEntry = () => {
		this.handleCloseDrawer();
	};

	handleSearchChange = terms => {
		this.props.searchKinesisPosts(terms);
	};

	handleSetSortOrder = sortOrder => {
		this.props.setSortOrder(sortOrder);
	};

	renderClosedDrawer = () => {
		const { selectedEntry } = this.props;

		return (
			<OpenDrawerButton onClick={this.handleOpenDrawer}>
				<StyledOpenDrawerSvg
					color={selectedEntry.primaryColor}
					height={28}
				/>
			</OpenDrawerButton>
		);
	};

	renderOpenDrawer = () => {
		const {
			filteredEntries,
			match,
			searchTerms,
			selectedEntry,
			sortOrder,
		} = this.props;

		return (
			<OpenBrowserDrawerContainer>
				<TitleContainer>
					<TitleButton
						color={selectedEntry.primaryColor}
						onClick={this.handleCloseDrawer}>
						<LeftArrowSvg width={21} height={21} />
						<Title>Posts</Title>
					</TitleButton>
				</TitleContainer>

				<FiltersContainer>
					<StyledTextInput
						color={shark}
						accentColor={selectedEntry.primaryColor}
						title="Search"
						hint="Search for topics, hashtags, & more"
						icon={<StyledMagnifyingGlassSvg color={shark} />}
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

				<KinesisBrowserSearchResults
					chooseEntry={this.handleChooseEntry}
					filteredEntries={filteredEntries}
					match={match}
					selectedEntry={selectedEntry}
				/>
			</OpenBrowserDrawerContainer>
		);
	};

	renderDrawerContents = () => {
		const { drawerOpen } = this.state;
		return drawerOpen ? this.renderOpenDrawer() : this.renderClosedDrawer();
	};

	render() {
		const { selectedEntry } = this.props;
		const { drawerOpen, overrideAutoCollapse } = this.state;

		return (
			<StickyDrawer
				autocollapseOnSticky={overrideAutoCollapse}
				closedBackgroundColor={selectedEntry.secondaryColor}
				color={selectedEntry.primaryColor}
				onScroll={this.handleOnScroll}
				open={drawerOpen}
				openBackgroundColor={white}>
				{this.renderDrawerContents()}
			</StickyDrawer>
		);
	}
}
