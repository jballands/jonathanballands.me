//
//	jballands/jonathanballands.me
//	Drawer.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { spring, Motion } from 'react-motion';
import styled from 'styled-components';

import { alto } from 'helpers/palette';

import OpenDrawerSvg from 'svg/OpenDrawerSvg';

const DrawerContainer = styled.div`
	height: 100%;
	background: ${props =>
		props.open ? props.openBackgroundColor : props.closedBackgroundColor};
	overflow: hidden;
	border-right: 1px solid ${props => (props.open ? alto : 'transparent')};
	transition: background 750ms ease, border 750ms ease;
`;

const OpenDrawerButton = styled.div`
	padding: 20px;
	&:hover {
		cursor: pointer;
	}
`;

export default class Drawer extends React.Component {
	static displayName = 'Drawer';

	static propTypes = {
		className: PropTypes.string,
		closedBackgroundColor: PropTypes.string,
		closeDrawer: PropTypes.func,
		closeOnSticky: PropTypes.bool,
		closedWidth: PropTypes.number,
		children: PropTypes.node,
		color: PropTypes.string,
		open: PropTypes.bool,
		openBackgroundColor: PropTypes.string,
		openDrawer: PropTypes.func,
		openWidth: PropTypes.number,
		sticky: PropTypes.bool,
		style: PropTypes.object,
	};

	static defaultProps = {
		closedWidth: 70,
		closeOnSticky: false,
		open: true,
		openBackgroundColor: '#fff',
		openWidth: 425,
		sticky: false,
	};

	componentWillReceiveProps(newProps) {
		if (newProps.sticky && newProps.closeOnSticky && newProps.open) {
			this.props.closeDrawer();
		}
	}

	renderClosedDrawer = () => {
		const { color, openDrawer } = this.props;
		return (
			<OpenDrawerButton onClick={openDrawer}>
				<OpenDrawerSvg color={color} height={27} />
			</OpenDrawerButton>
		);
	};

	render() {
		const {
			className,
			closedBackgroundColor,
			closedWidth,
			children,
			open,
			openBackgroundColor,
			openWidth,
			style,
		} = this.props;
		const width = open ? spring(openWidth) : spring(closedWidth);

		return (
			<Motion style={{ width }}>
				{interpolated => (
					<DrawerContainer
						className={className}
						closedBackgroundColor={closedBackgroundColor}
						open={open}
						openBackgroundColor={openBackgroundColor}
						style={{ width: `${interpolated.width}px`, ...style }}>
						{open ? children : this.renderClosedDrawer()}
					</DrawerContainer>
				)}
			</Motion>
		);
	}
}
