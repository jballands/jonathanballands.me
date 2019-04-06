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
import Markdown from 'kinesis/Markdown';
import LinkInTabSvg from 'svg/LinkInTabSvg';
// import InstagramSvg from 'svg/InstagramSvg';
import DownArrowSvg from 'svg/DownArrowSvg';

import { fuchsiaBlue, eastSide, moonRaker, shark } from 'helpers/palette';

const aboutSpiel = `
I'm a frontend web developer with an eye for design. Having a background in Computer Science means
that I can not only design beautiful websites, but I can also architect, build, and maintain rich web
applications with performance and UX in mind.

I graduated in 2014 from Virginia Tech with a BS in Computer Science. While in Virginia, I wrote a
shell, learned how compilers work, [designed and wrote a video game](https://github.com/12-01Game), took a
human-computer interaction capstone course, wrote proofs about popular algorithms, and much more.

When I graduated college, I joined IBM for two years in Austin, Texas. I learned [Objective-C](https://en.wikipedia.org/wiki/Objective-C) and
[Swift](https://en.wikipedia.org/wiki/Swift_(programming_language)) because I thought I wanted to be an iOS developer. That stuff
was super fun, but after learning [D3](https://d3js.org/) and [Angular](https://angular.io/) for a project at work,
I became really interested in web development and web frameworks. So I started doing more of that and in 2016, I jumped ship to
go work on the analytics solution at [Spredfast](https://www.spredfast.com/), where we used [React](https://reactjs.org/).
In 2018, I started work as a UI developer at [Apple](https://apple.com), still specializing in React.

I designed, programmed, and put up this website myself [from scratch](https://github.com/jballands/jonathanballands.me).
No Squarespace, Wordpress, or whatever funny business. It should give you an idea of what I'm capable of. Feel free to take
a look around; hopefully you'll find something you like.
`;

const AboutContainer = styled.div`
	width: 100%;
`;

const AboutHeroUnitContainer = styled.div`
	width: 100%;
	height: calc(100vh - 70px);
`;

const AboutHeroUnit = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	width: 80%;
`;

const AboutHeroUnitTitle = styled.div`
	font-family: Hero;
	text-transform: uppercase;
	font-size: 54px;
	letter-spacing: 1px;
	color: #ff7c84;
	text-align: center;
`;

const AboutHeroUnitSubtitle = styled.div`
	font-weight: 500;
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
	color: #ff7c84;
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

const AboutMe = styled.div`
	width: 75%;
	max-width: 800px;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	margin: 0 auto 125px auto;
	font-size: 16px;
`;

export default class About extends React.Component {
	static propTypes = {
		className: PropTypes.string,
	};

	render() {
		return (
			<AboutContainer className={this.props.className}>
				<BackgroundGradient height="100vh" backgroundColor="#fb9fa4">
					<AboutHeroUnitContainer>
						<Particles height="100vh">
							<AboutHeroUnit>
								<AboutHeroUnitTitle>
									Howdy, I'm Jon
								</AboutHeroUnitTitle>
								<AboutHeroUnitSubtitle>
									Web developer. Wannabe designer. Dork.
								</AboutHeroUnitSubtitle>
								<ViewResumeContainer
									href="/assets/pdf/jonathan_ballands_resume_18.pdf"
									target="_blank">
									<ViewResume accentColor="#ff7c84">
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
										fill="#ff7c84"
									/>
								</ScrollToSeeMore>
							</AboutHeroUnit>
						</Particles>
					</AboutHeroUnitContainer>

					<AboutMe>
						<Markdown color={eastSide} content={aboutSpiel} />
					</AboutMe>
				</BackgroundGradient>
			</AboutContainer>
		);
	}
}
