//
//	jballands/jonathanballands.me
//	NavigationBar.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavigationBarItem from './NavigationBarItem';

const NavigationBarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #24292e;
	height: 70px;
	padding: 0px 20px;
	width: calc(100% - 40px);
`;

const NavigationBarTitle = styled.span`
	font-family: 'Raleway', sans-serif;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 20px;
	letter-spacing: 1px;
	color: white;
`;

const NavigationBarList = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

export default class NavigationBar extends React.Component {
	render() {
		return (
			<NavigationBarContainer>
				<Link to="/">
					<NavigationBarTitle>Jonathan Ballands</NavigationBarTitle>
				</Link>

				<NavigationBarList>
					<NavigationBarItem link="/">About</NavigationBarItem>
					<NavigationBarItem link="/kinesis">
						Kinesis
					</NavigationBarItem>
					<NavigationBarItem link="/blog">Blog</NavigationBarItem>
				</NavigationBarList>
			</NavigationBarContainer>
		);
	}
}
