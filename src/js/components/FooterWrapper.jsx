//
//	jballands/jonathanballands.me
//	FooterWrapper.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import styled from 'styled-components';

import Footer from 'components/Footer';

const FooterWrapperContainer = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;

const FooterWrapperContent = styled.div`
	background: #fff;
	min-height: calc(100% - 70px);
	display: flex;
`;

export default class FooterWrapper extends React.Component {
	render() {
		return (
			<FooterWrapperContainer>
				<FooterWrapperContent>
					{this.props.children}
				</FooterWrapperContent>
				<Footer />
			</FooterWrapperContainer>
		);
	}
}
