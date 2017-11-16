//
//	jballands/jonathanballands.me
//	StickyDrawer.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { StickyContainer, Sticky } from 'react-sticky';
import styled from 'styled-components';

import Drawer from 'components/Drawer/Drawer';

class StickyDrawer extends React.Component {
	static displayName = 'StickyDrawer';

	static propTypes = {
		children: PropTypes.node,
	};

	render() {
		const { children } = this.props;

		return (
			<Sticky>
				{({ distanceFromTop, distanceFromBottom, isSticky, style }) => {
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
						<div style={style}>
							<Drawer
								{...this.props}
								sticky={isSticky}
								style={compensatedStyle}>
								{children}
							</Drawer>
						</div>
					);
				}}
			</Sticky>
		);
	}
}

const StyledStickyContainer = styled(StickyContainer)`
	position: relative;
	height: 100%;
	width: 100%;
	clip: rect(0, auto, auto, 0);
`;

export { StyledStickyContainer as StickyDrawerContainer, StickyDrawer };
