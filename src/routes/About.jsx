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

import { shark } from 'helpers/palette';

const aboutSpiel = `
I need to write a blurb here.
`;

const AboutContainer = styled.div`
	width: 100%;
`;

const AboutHeroUnitContainer = styled.div`
	width: 100%;
	height: calc(100vh - 140px);
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
				<BackgroundGradient
					height="calc(100vh - 140px)"
					backgroundColor="#fb9fa4">
					<AboutHeroUnitContainer>
						<Particles height="calc(100vh - 140px)">
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
							</AboutHeroUnit>
						</Particles>
					</AboutHeroUnitContainer>
				</BackgroundGradient>
			</AboutContainer>
		);
	}
}
