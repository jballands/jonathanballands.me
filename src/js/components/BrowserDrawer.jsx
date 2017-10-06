//
//	jballands/jonathanballands.me
//	BrowserDrawer.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { StickyContainer, Sticky } from 'react-sticky';
import { spring, Motion } from 'react-motion';
import styled from 'styled-components';

import { alto, white } from 'helpers/palette';

import LeftArrowSvg from 'svg/LeftArrowSvg';
import HelpSvg from 'svg/HelpSvg';
import OpenDrawerSvg from 'svg/OpenDrawerSvg';

const DRAWER_OPEN_WIDTH = 425;
const DRAWER_CLOSED_WIDTH = 70;

const BrowserDrawerContainer = styled.div`
	height: 100%;
	background: ${props => (props.open ? white : props.backgroundColor)};
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

const BrowserDrawerControlsContainer = styled.div`
	width: ${DRAWER_OPEN_WIDTH}px;
	display: flex;
	flex-flow: column nowrap;
`;

const OpenDrawerButton = styled.div`
	padding: 20px;
	&:hover {
		cursor: pointer;
	}
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

	&:hover {
		cursor: pointer;
	}
`;

const Title = styled.span`
	font-weight: 700;
	font-size: 22px;
	text-transform: uppercase;
	margin-left: 10px;
	color: ${props => props.color};
`;

export default class BrowserDrawer extends React.Component {
	static displayName = 'BrowserDrawer';

	static propTypes = {
		backgroundColor: PropTypes.string,
		children: PropTypes.func,
		color: PropTypes.string,
		drawerOpen: PropTypes.bool,
		title: PropTypes.string,
	};

	static defaultProps = {
		drawerOpen: true,
	};

	state = {
		drawerOpen: this.props.drawerOpen,
		width: this.props.drawerOpen ? DRAWER_OPEN_WIDTH : DRAWER_CLOSED_WIDTH,
	};

	closeDrawer = () => {
		this.setState({
			drawerOpen: false,
			width: spring(DRAWER_CLOSED_WIDTH),
		});
	};

	openDrawer = () => {
		this.setState({
			drawerOpen: true,
			width: spring(DRAWER_OPEN_WIDTH),
		});
	};

	renderClosedDrawer = () => {
		const { color } = this.props;
		return (
			<OpenDrawerButton onClick={this.openDrawer}>
				<OpenDrawerSvg color={color} height={27} />
			</OpenDrawerButton>
		);
	};

	renderOpenDrawer = (distanceFromTop, distanceFromBottom) => {
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

		const { children, color, title } = this.props;
		const { drawerOpen } = this.state;

		return (
			<BrowserDrawerControlsContainer style={compensatedStyle}>
				<TitleContainer>
					<TitleButton onClick={this.closeDrawer}>
						<LeftArrowSvg width={21} height={21} color={color} />
						<Title color={color}>{title}</Title>
					</TitleButton>
					<HelpSvg color={color} width={20} height={20} />
				</TitleContainer>

				{children(this.closeDrawer, drawerOpen)}
			</BrowserDrawerControlsContainer>
		);
	};

	renderStickyDrawer = (distanceFromTop, distanceFromBottom, style) => {
		const { drawerOpen } = this.state;

		return (
			<div style={style}>
				{drawerOpen
					? this.renderOpenDrawer(distanceFromTop, distanceFromBottom)
					: this.renderClosedDrawer()}
			</div>
		);
	};

	render() {
		const { backgroundColor } = this.props;
		const { drawerOpen, width } = this.state;

		return (
			<Motion style={{ width }}>
				{interpolated => (
					<BrowserDrawerContainer
						style={{ flex: `0 0 ${interpolated.width}px` }}
						open={drawerOpen}
						backgroundColor={backgroundColor}>
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
					</BrowserDrawerContainer>
				)}
			</Motion>
		);
	}
}
