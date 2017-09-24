//
//	jballands/jonathanballands.me
//	BlogBrowser.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { spring, Motion } from 'react-motion';
import styled from 'styled-components';
import TextInput from '@jballands/vespyr/lib/TextInput';
import RadioGroup from '@jballands/vespyr/lib/RadioGroup';
import RadioItem from '@jballands/vespyr/lib/RadioItem';

import BlogBrowserSearchResult from 'components/BlogBrowserSearchResult';

import LeftArrowSvg from 'svg/LeftArrowSvg';
import MagnifyingGlassSvg from 'svg/MagnifyingGlassSvg';
import OpenDrawerSvg from 'svg/OpenDrawerSvg';

const DRAWER_OPEN_WIDTH = 425;
const DRAWER_CLOSED_WIDTH = 70;

const BlogBrowserContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: ${props => props.width}px;
	background: #00ad86;
	overflow: hidden;
`;

const BlogBrowserControlsContainer = styled.div`width: ${DRAWER_OPEN_WIDTH}px;`;

const TitleContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	&:hover {
		cursor: pointer;
	}
`;

const Title = styled.span`
	font-weight: 700;
	font-size: 20px;
	text-transform: uppercase;
	color: white;
	margin-left: 10px;
	color: #247261;
`;

const StyledTextInput = styled(TextInput)`
	width: 100%;
	margin-top: 25px;
`;

const StyledRadioGroup = styled(RadioGroup)`
	width: 100%;
	margin-top: 25px;
`;

const OpenDrawerButton = styled.div`
	padding: 20px;
	&:hover {
		cursor: pointer;
	}
`;

const FiltersContainer = styled.div`
	padding: 20px;
	width: calc(100% - 40px);
`;

const SearchResultsContainer = styled.div`margin: 20px 0;`;

export default class BlogBrowser extends React.Component {
	static displayName = 'BlogBrowser';

	static propTypes = {
		searchBlogPosts: PropTypes.func,
		filteredEntries: PropTypes.instanceOf(Immutable.Map),
		searchTerms: PropTypes.string,
		setSortOrder: PropTypes.func,
		sortOrder: PropTypes.string,
	};

	static defaultProps = {
		drawerOpen: true,
	};

	state = {
		drawerIsOpen: this.props.drawerOpen,
		width: DRAWER_OPEN_WIDTH,
	};

	handleSearchChange = terms => {
		this.props.searchBlogPosts(terms);
	};

	handleSetSortOrder = sortOrder => {
		this.props.setSortOrder(sortOrder);
	};

	closeDrawer = () => {
		this.setState({
			drawerIsOpen: false,
			width: spring(DRAWER_CLOSED_WIDTH),
		});
	};

	openDrawer = () => {
		this.setState({
			drawerIsOpen: true,
			width: spring(DRAWER_OPEN_WIDTH),
		});
	};

	renderSearchResults = () => {
		const { filteredEntries } = this.props;
		return (
			<SearchResultsContainer>
				{filteredEntries
					.entrySeq()
					.map(result => (
						<BlogBrowserSearchResult
							title={result[1].name}
							date={result[1].date}
							hashtags={result[1].hashtags}
							key={result[0]}
							active
						/>
					))}
			</SearchResultsContainer>
		);
	};

	renderClosedDrawer = () => {
		return (
			<OpenDrawerButton onClick={this.openDrawer}>
				<OpenDrawerSvg height={27} />
			</OpenDrawerButton>
		);
	};

	renderOpenDrawer = () => {
		const { searchTerms, sortOrder } = this.props;

		return (
			<div>
				<FiltersContainer>
					<TitleContainer onClick={this.closeDrawer}>
						<LeftArrowSvg width={21} height={21} />
						<Title>Browse</Title>
					</TitleContainer>

					<StyledTextInput
						color="white"
						hintColor="#247261"
						accentColor="#2dedca"
						title="Search"
						hint="Search for topics, hashtags, and more"
						icon={<MagnifyingGlassSvg />}
						value={searchTerms}
						onUpdate={this.handleSearchChange}
					/>

					<StyledRadioGroup
						defaultSelection={sortOrder}
						title="Sort Order"
						color="white"
						accentColor="#2dedca"
						onOptionClick={this.handleSetSortOrder}>
						<RadioItem id="later">Later Posts First</RadioItem>
						<RadioItem id="earlier">Earlier Posts First</RadioItem>
					</StyledRadioGroup>
				</FiltersContainer>

				{this.renderSearchResults()}
			</div>
		);
	};

	render() {
		const { drawerIsOpen, width } = this.state;

		return (
			<Motion style={{ width }}>
				{interpolated => (
					<BlogBrowserContainer
						drawerOpen={drawerIsOpen}
						width={interpolated.width}>
						<BlogBrowserControlsContainer>
							{drawerIsOpen ? (
								this.renderOpenDrawer()
							) : (
								this.renderClosedDrawer()
							)}
						</BlogBrowserControlsContainer>
					</BlogBrowserContainer>
				)}
			</Motion>
		);
	}
}
