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

// import InstagramViewerContainer from 'containers/InstagramViewerContainer';
import BackgroundGradient from 'components/BackgroundGradient';
import Particles from 'components/Particles';
import KinesisMarkdown from 'components/KinesisMarkdown';
import LinkInTabSvg from 'svg/LinkInTabSvg';
// import InstagramSvg from 'svg/InstagramSvg';
import DownArrowSvg from 'svg/DownArrowSvg';

import { fuchsiaBlue, eastSide, moonRaker, shark } from 'helpers/palette';

const aboutSpiel = `
I'm a frontend web developer with an eye for design. This means I use tools like React, D3, Webpack 
and the like to architect, build, and maintain beautiful web applications. Note how I said web apps
and not websites.

I graduated in 2014 from Virginia Tech with a BS in Computer Science. I went on to join IBM
for two years, building iOS apps in Objective-C and Swift thinking that's what I'd like to do.
While that stuff can be enjoyable, I found myself enjoying web development much more. So I started
doing more of that and in 2016, jumped ship to go work on the analytics solution at
[Spredfast](https://www.spredfast.com/).

I believe that apps should both inspire creativity and be efficent for the end user. This involves a balance of 
strict engineering and design disipline combined with user empathy and a little imagination. Too
rigid in practice and your app is soulless, not enough and your app is spaghetti.

I designed and built this website from the ground up. It should give you an idea of my attention to detail.
Feel free to take a look around; hopefully you'll find something you like.
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
	padding-bottom: 70px;
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

const ScrollToSeeMore = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	position: relative;
	bottom: 0;
	height: 80px;
	margin-top: 30px;
`;

const ScrollToSeeMoreText = styled.div`
	color: ${eastSide};
	font-size: 15px;
`;

const ScrollToSeeMoreArrow = styled(DownArrowSvg)`
	@keyframes bounce {
		30% {
			bottom: 35px;
		}
		34% {
			bottom: 25px;
		}
		38% {
			bottom: 35px;
		}
		42% {
			bottom: 25px;
		}
		46% {
			bottom: 35px;
		}
	}

	animation-name: bounce;
	animation-duration: 8s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
	bottom: 35px;
	position: absolute;
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

// const InstagramContainer = styled.div`
// 	width: 100%;
// 	margin: 100px 0 50px 0;
// `;

// const InstagramTitle = styled.div`
// 	display: flex;
// 	flex-flow: row nowrap;
// 	justify-content: flex-start;
// 	align-items: center;
// 	font-size: 28px;
// 	letter-spacing: 1px;
// 	color: ${fuchsiaBlue};
// 	border-bottom: 1px solid ${fuchsiaBlue};
// 	padding-bottom: 10px;
// `;

// const InstagramUsername = styled.div`
// 	margin-left: 10px;
// `;

const AboutMe = styled.div`
	width: 75%;
	max-width: 800px;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	margin: 50px auto 125px auto;
	font-size: 16px;
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
						<Particles height="calc(100vh - 70px)">
							<AboutHeroUnit>
								<AboutHeroUnitTitle>
									Howdy, I'm Jon
								</AboutHeroUnitTitle>
								<AboutHeroUnitSubtitle>
									Web developer. Wannabe designer.
								</AboutHeroUnitSubtitle>
								<ViewResumeContainer
									href="/assets/jonathan_ballands_resume_18.pdf"
									target="_blank">
									<ViewResume accentColor={fuchsiaBlue}>
										View My Résumé <StyledLinkInTabSvg />
									</ViewResume>
								</ViewResumeContainer>

								<ScrollToSeeMore>
									<ScrollToSeeMoreText>
										Scroll down to learn more
									</ScrollToSeeMoreText>
									<ScrollToSeeMoreArrow
										width={20}
										height={20}
										fill={eastSide}
									/>
								</ScrollToSeeMore>
							</AboutHeroUnit>
						</Particles>
					</AboutHeroUnitContainer>

					<AboutMe>
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
