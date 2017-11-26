//
//	jballands/jonathanballands.me
//	StickyDrawer.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { StickyContainer, Sticky } from '@jballands/react-sticky';
import { spring, Motion } from 'react-motion';
import styled from 'styled-components';

import { alto } from 'helpers/palette';

const BrowserDrawerContainer = styled.div`
	height: 100%;
	background: ${props =>
		props.open ? props.openBackgroundColor : props.closedBackgroundColor};
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

export default class StickyDrawer extends React.Component {
	static displayName = 'StickyDrawer';

	static propTypes = {
		autocollapseOnSticky: PropTypes.bool,
		closedBackgroundColor: PropTypes.string,
		closedWidth: PropTypes.number,
		children: PropTypes.node,
		color: PropTypes.string,
		onScroll: PropTypes.func,
		open: PropTypes.bool,
		openBackgroundColor: PropTypes.string,
		openWidth: PropTypes.number,
	};

	static defaultProps = {
		autocollapseOnSticky: true,
		closedWidth: 70,
		open: true,
		openWidth: 425,
	};

	renderStickyDrawer = (
		distanceFromTop,
		distanceFromBottom,
		style,
		width,
	) => {
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
			width: `${width}px`,
		};

		const { children } = this.props;

		return (
			<div style={style}>
				<div style={compensatedStyle}>{children}</div>
			</div>
		);
	};

	render() {
		const {
			closedBackgroundColor,
			closedWidth,
			onScroll,
			open,
			openBackgroundColor,
			openWidth,
		} = this.props;

		const width = open ? openWidth : closedWidth;

		return (
			<Motion
				style={{
					width: spring(width),
				}}>
				{interpolated => (
					<BrowserDrawerContainer
						style={{ flex: `0 0 ${interpolated.width}px` }}
						open={open}
						closedBackgroundColor={closedBackgroundColor}
						openBackgroundColor={openBackgroundColor}>
						<StyledStickyContainer>
							<Sticky onScroll={onScroll}>
								{({
									distanceFromTop,
									distanceFromBottom,
									style,
								}) =>
									this.renderStickyDrawer(
										distanceFromTop,
										distanceFromBottom,
										style,
										width,
									)
								}
							</Sticky>
						</StyledStickyContainer>
					</BrowserDrawerContainer>
				)}
			</Motion>
		);
	}
}
