//
//	jballands/jonathanballands.me
//	BlogBrowser.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { StickyContainer, Sticky } from 'react-sticky';
import { spring, Motion } from 'react-motion';
import styled from 'styled-components';
import TextInput from '@jballands/vespyr/lib/TextInput';
import RadioGroup from '@jballands/vespyr/lib/RadioGroup';
import RadioItem from '@jballands/vespyr/lib/RadioItem';

import BlogBrowserSearchResult from 'components/BlogBrowserSearchResult';

import { alto, frostedMint, puertoRico, shark, white } from 'helpers/palette';

import LeftArrowSvg from 'svg/LeftArrowSvg';
import MagnifyingGlassSvg from 'svg/MagnifyingGlassSvg';
import OpenDrawerSvg from 'svg/OpenDrawerSvg';

const DRAWER_OPEN_WIDTH = 425;
const DRAWER_CLOSED_WIDTH = 70;

const BlogBrowserContainer = styled.div`
	height: 100%;
	background: ${props => (props.open ? white : frostedMint)};
	overflow: hidden;
	position: relative;
	border-right: 1px solid ${props => (props.open ? alto : 'transparent')};
	transition: background 750ms ease, border 750ms ease;
`;

const StyledStickyContainer = styled(StickyContainer)`
	width: 100%;
	height: 100%;
	position: absolute;
	clip: rect(0, auto, auto, 0);
`;

const BlogBrowserControlsContainer = styled.div`
	width: ${DRAWER_OPEN_WIDTH}px;
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
	font-size: 22px;
	text-transform: uppercase;
	color: white;
	margin-left: 10px;
	color: ${puertoRico};
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
	color: ${puertoRico};
	font-size: 14px;
	margin-top: 5px;
`;

const SearchResultsContainer = styled.div`
	margin-top: 20px;
	overflow-y: scroll;
	flex: 1 0;
	border-top: 1px solid ${alto};
`;

export default class BlogBrowser extends React.Component {
	static displayName = 'BlogBrowser';

	static propTypes = {
		chooseEntry: PropTypes.func,
		drawerOpen: PropTypes.bool,
		filteredEntries: PropTypes.instanceOf(Immutable.Map),
		match: PropTypes.object,
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

	handleChooseBlogEntry = id => {
		this.closeDrawer();
		this.props.chooseEntry(id);
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
			<SearchResultsContainer>
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
			</SearchResultsContainer>
		);
	};

	renderClosedDrawer = () => {
		return (
			<OpenDrawerButton onClick={this.openDrawer}>
				<OpenDrawerSvg color={puertoRico} height={27} />
			</OpenDrawerButton>
		);
	};

	renderOpenDrawer = (distanceFromTop, distanceFromBottom) => {
		const { searchTerms, sortOrder } = this.props;

		let compensation = 0;
		let padding = 0;
		if (distanceFromTop > 0) {
			compensation = distanceFromTop;
		} else if (distanceFromBottom < 0) {
			compensation = -distanceFromBottom;
			padding = compensation;
		}

		const compensatedStyle = {
			paddingTop: `${padding}px`,
			height: `calc(100vh - ${compensation}px)`,
		};

		return (
			<BlogBrowserControlsContainer style={compensatedStyle}>
				<FiltersContainer>
					<TitleContainer onClick={this.closeDrawer}>
						<LeftArrowSvg
							width={21}
							height={21}
							color={puertoRico}
						/>
						<Title>Posts</Title>
					</TitleContainer>

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

				{this.renderSearchResults()}
			</BlogBrowserControlsContainer>
		);
	};

	renderStickyDrawer = (distanceFromTop, distanceFromBottom, style) => {
		const { drawerIsOpen } = this.state;

		return (
			<div style={style}>
				{drawerIsOpen
					? this.renderOpenDrawer(distanceFromTop, distanceFromBottom)
					: this.renderClosedDrawer()}
			</div>
		);
	};

	render() {
		const { drawerIsOpen, width } = this.state;

		return (
			<Motion style={{ width }}>
				{interpolated => (
					<BlogBrowserContainer
						style={{ flex: `0 0 ${interpolated.width}px` }}
						open={drawerIsOpen}>
						<StyledStickyContainer>
							<Sticky>
								{({
									distanceFromTop,
									distanceFromBottom,
									style,
								}) =>
									this.renderStickyDrawer(
										distanceFromTop,
										distanceFromBottom,
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
