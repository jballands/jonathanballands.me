//
//	jballands/jonathanballands.me
//	About.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import styled from 'styled-components';

import Particles from 'components/Particles';
import LinkWrapper from 'components/LinkWrapper';
import FadingComponent from 'components/FadingComponent';

const AboutContainer = styled.div`width: 100%;`;

const AboutHeroUnitContainer = styled.div`
	background: #525252;
	background: -webkit-linear-gradient(top, #fcd400, #b020b8, #642da3);
	background: -o-linear-gradient(top, #fcd400, #b020b8, #642da3);
	background: -moz-linear-gradient(top, #fcd400, #b020b8, #642da3);
	background: linear-gradient(to bottom, #fcd400, #b020b8, #642da3);
`;

const AboutHeroUnit = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
`;

const AboutHeroUnitTitle = styled.div`
	font-family: 'Raleway', sans-serif;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 54px;
	letter-spacing: 1px;
	color: white;
`;

const AboutHeroUnitSubtitle = styled.div`
	font-family: 'Roboto', 'serif';
	font-weight: 300;
	color: #fff;
	font-size: 28px;
	letter-spacing: 1px;
	margin-top: 10px;
`;

const AboutMe = styled.div`
	background: #642da3;
	width: 100%;
	height: 600px;
`;

export default class About extends React.Component {
	render() {
		return (
			<AboutContainer>
				<AboutHeroUnitContainer>
					<Particles>
						<AboutHeroUnit>
							<AboutHeroUnitTitle>
								Howdy, I'm Pretty Rad
							</AboutHeroUnitTitle>
							<AboutHeroUnitSubtitle>
								But you can call me Jon.
							</AboutHeroUnitSubtitle>
							<LinkWrapper link="" external>
								View My Résumé
							</LinkWrapper>
						</AboutHeroUnit>
					</Particles>
				</AboutHeroUnitContainer>
				<AboutMe />
			</AboutContainer>
		);
	}
}
