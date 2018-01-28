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

import BackgroundGradient from 'components/BackgroundGradient';
import Particles from 'components/Particles';
import LinkInTabSvg from 'svg/LinkInTabSvg';

import { fuchsiaBlue, moonRaker, shark } from 'helpers/palette';

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
`;

const AboutHeroUnitTitle = styled.div`
	font-family: 'Raleway', sans-serif;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 54px;
	letter-spacing: 1px;
	color: ${fuchsiaBlue};
`;

const AboutHeroUnitSubtitle = styled.div`
	font-family: 'Roboto', 'serif';
	font-weight: 300;
	color: ${shark};
	font-size: 28px;
	letter-spacing: 1px;
	margin-top: 10px;
`;

const AboutMe = styled.div`
	background: white;
	width: 100%;
	height: 600px;
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
									Howdy, I'm Pretty Rad
								</AboutHeroUnitTitle>
								<AboutHeroUnitSubtitle>
									But you can call me Jon.
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
					<AboutMe />
				</BackgroundGradient>
			</AboutContainer>
		);
	}
}
