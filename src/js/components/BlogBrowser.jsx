//
//	jballands/jonathanballands.me
//	BlogBrowser.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { StickyContainer, Sticky } from 'react-sticky';
import Immutable from 'immutable';
import { spring, Motion } from 'react-motion';
import styled from 'styled-components';
import _assign from 'lodash.assign';
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
	height: 100%;
	background: #00ad86;
	overflow: hidden;
	position: relative;
`;

const StyledStickyContainer = styled(StickyContainer)`
	width: 100%;
	height: 100%;
	position: absolute;
	clip: rect(0, auto, auto, 0);
`;

const BlogBrowserControlsContainer = styled.div`
	width: ${DRAWER_OPEN_WIDTH}px;
	height: 100vh;
	display: flex;
	flex-flow: column nowrap;
`;

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

const NoSearchResultsContainer = styled.div`
	padding: 20px;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
`;

const NoSearchResultsTitle = styled.div`
	color: white;
	font-size: 20px;
	text-transform: uppercase;
`;

const NoSearchResultsDetails = styled.div`
	color: #247261;
	font-size: 14px;
	margin-top: 5px;
`;

const SearchResultsContainer = styled.div`
	margin-top: 20px;
	overflow: auto;
	flex: 1 0;
`;

export default class BlogBrowser extends React.Component {
	static displayName = 'BlogBrowser';

	static propTypes = {
		chooseEntry: PropTypes.func,
		filteredEntries: PropTypes.instanceOf(Immutable.Map),
		searchBlogPosts: PropTypes.func,
		searchTerms: PropTypes.string,
		selectedEntry: PropTypes.object,
		setSortOrder: PropTypes.func,
		sortOrder: PropTypes.string,
	};

	static defaultProps = {
		drawerOpen: true,
	};

	state = {
		drawerIsOpen: this.props.drawerOpen,
		width: this.props.drawerOpen ? DRAWER_OPEN_WIDTH : DRAWER_CLOSED_WIDTH,
	};

	handleSearchChange = terms => {
		this.props.searchBlogPosts(terms);
	};

	handleSetSortOrder = sortOrder => {
		this.props.setSortOrder(sortOrder);
	};

	handleChooseBlogEntry = uri => {
		this.closeDrawer();
		this.props.chooseEntry(uri);
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
			<SearchResultsContainer>
				{filteredEntries
					.entrySeq()
					.map(result => (
						<BlogBrowserSearchResult
							title={result[1].name}
							date={result[1].date}
							hashtags={result[1].hashtags}
							key={result[0]}
							onClick={this.handleChooseBlogEntry}
							uri={result[0]}
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
			<BlogBrowserControlsContainer>
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
			</BlogBrowserControlsContainer>
		);
	};

	renderStickyDrawer = (distanceFromBottom, calculatedHeight, style) => {
		const { drawerIsOpen } = this.state;

		return (
			<div style={style}>
				{drawerIsOpen ? (
					this.renderOpenDrawer()
				) : (
					this.renderClosedDrawer()
				)}
			</div>
		);
	};

	render() {
		const { width } = this.state;

		return (
			<Motion style={{ width }}>
				{interpolated => (
					<BlogBrowserContainer
						style={{ flex: `0 0 ${interpolated.width}px` }}>
						<StyledStickyContainer>
							<Sticky>
								{({
									distanceFromBottom,
									calculatedHeight,
									style,
								}) =>
									this.renderStickyDrawer(
										distanceFromBottom,
										calculatedHeight,
										style,
									)}
							</Sticky>
						</StyledStickyContainer>
					</BlogBrowserContainer>
				)}
			</Motion>
		);
	}
}
