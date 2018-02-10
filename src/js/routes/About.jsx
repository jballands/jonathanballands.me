//
//	jballands/jonathanballands.me
//	About.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BoldButton from '@jballands/vespyr/lib/BoldButton';

import InstagramViewerContainer from 'containers/InstagramViewerContainer';
import BackgroundGradient from 'components/BackgroundGradient';
import Particles from 'components/Particles';
import KinesisMarkdown from 'components/KinesisMarkdown';
import LinkInTabSvg from 'svg/LinkInTabSvg';
import InstagramSvg from 'svg/InstagramSvg';

import { fuchsiaBlue, eastSide, moonRaker, shark } from 'helpers/palette';

const aboutSpiel = `
I'm a frontend web developer with an eye for design. This means I use tools like React, D3, Webpack 
and the like to architect, build, and maintain beautiful web applications. Note how I said web apps
and not websites.

I graduated in 2014 from Virginia Tech with a BS in Computer Science. I went on to join IBM
for two years, building iOS apps in Objective-C and Swift thinking that's what I'd like to.
While that can be enjoyable, I found myself enjoying web development much more. So I started
doing more of that and in 2016, jumped ship to go work on the analytics solution at
[Spredfast](https://www.spredfast.com/).

I believe that apps should inspire creativity and work with the user. This involves a balance of 
strict engineering and design disipline combined with user empathy and a little imagination. Too
rigid in practice and your app is soulless, not enough and your app is spaghetti, both in form
and function.

I designed and built this website from the ground up. Feel free to take a look around;
hopefully you'll find something you like.
`;

const AboutContainer = styled.div`
	width: 100%;
`;

const AboutHeroUnitContainer = styled.div`
	width: 100%;
`;

const AboutHeroUnit = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	width: 80%;
`;

const AboutHeroUnitTitle = styled.div`
	font-family: 'Raleway', sans-serif;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 54px;
	letter-spacing: 1px;
	color: ${fuchsiaBlue};
	text-align: center;
`;

const AboutHeroUnitSubtitle = styled.div`
	font-family: 'Roboto', 'serif';
	font-weight: 300;
	color: ${shark};
	font-size: 28px;
	letter-spacing: 1px;
	margin-top: 10px;
`;

const ViewResumeContainer = styled.a`
	margin-top: 30px;
`;

const ViewResume = styled(BoldButton)`
	font-size: 16px;
	text-transform: capitalize;
`;

const StyledLinkInTabSvg = styled(LinkInTabSvg)`
	margin-left: 10px;
`;

const InstagramContainer = styled.div`
	width: 100%;
	margin: 100px 0 50px 0;
`;

const InstagramTitle = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: center;
	font-size: 28px;
	letter-spacing: 1px;
	color: ${fuchsiaBlue};
	border-bottom: 1px solid ${fuchsiaBlue};
	padding-bottom: 10px;
`;

const InstagramUsername = styled.div`
	margin-left: 10px;
`;

const AboutMe = styled.div`
	width: 75%;
	max-width: 800px;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	margin: 50px 0 100px 0;
	font-size: 15px;
`;

export default class About extends React.Component {
	static propTypes = {
		className: PropTypes.string,
	};

	render() {
		return (
			<AboutContainer className={this.props.className}>
				<BackgroundGradient backgroundColor={moonRaker}>
					<AboutHeroUnitContainer>
						<Particles>
							<AboutHeroUnit>
								<AboutHeroUnitTitle>
									Howdy, I'm Jon
								</AboutHeroUnitTitle>
								<AboutHeroUnitSubtitle>
									Web developer. Wannabe designer.
								</AboutHeroUnitSubtitle>
								<ViewResumeContainer
									href="/resume"
									target="_blank">
									<ViewResume accentColor={fuchsiaBlue}>
										View My Résumé <StyledLinkInTabSvg />
									</ViewResume>
								</ViewResumeContainer>
							</AboutHeroUnit>
						</Particles>
					</AboutHeroUnitContainer>

					<AboutMe>
						<InstagramContainer>
							<InstagramTitle>
								<InstagramSvg
									width={30}
									height={30}
									color={fuchsiaBlue}
								/>
								<InstagramUsername>jballands</InstagramUsername>
							</InstagramTitle>
							<InstagramViewerContainer />
						</InstagramContainer>

						<KinesisMarkdown
							color={eastSide}
							content={aboutSpiel}
						/>
					</AboutMe>
				</BackgroundGradient>
			</AboutContainer>
		);
	}
}
