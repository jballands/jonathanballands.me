//
//	jballands/jonathanballands.me
//	BlogBrowser.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { spring, Motion } from 'react-motion';
import styled from 'styled-components';
import TextInput from '@jballands/vespyr/lib/TextInput';

import LeftArrowSvg from 'svg/LeftArrowSvg';
import MagnifyingGlassSvg from 'svg/MagnifyingGlassSvg';
import OpenDrawerSvg from 'svg/OpenDrawerSvg';

const BlogBrowserContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: ${props => props.width}px;
	background: #00ad86;
`;

const BlogBrowserControlsContainer = styled.div`padding: 30px 20px;`;

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
	margin-top: 15px;
`;

const OpenDrawerButton = styled.div`
	&:hover {
		cursor: pointer;
	}
`;

export default class BlogBrowser extends React.Component {
	static displayName = 'BlogBrowser';

	static propTypes = {
		drawerOpen: PropTypes.bool,
		searchBlogPosts: PropTypes.func,
		searchTerms: PropTypes.string,
	};

	static defaultProps = {
		drawerOpen: true,
	};

	state = {
		drawerIsOpen: this.props.drawerOpen,
		width: 400,
	};

	closeDrawer = () => {
		this.setState({
			drawerIsOpen: false,
			width: spring(70),
		});
	};

	openDrawer = () => {
		this.setState({
			drawerIsOpen: true,
			width: spring(400),
		});
	};

	renderClosedDrawer = () => {
		return (
			<OpenDrawerButton onClick={this.openDrawer}>
				<OpenDrawerSvg height={27} />
			</OpenDrawerButton>
		);
	};

	renderOpenDrawer = () => {
		return (
			<div>
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
				/>
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
