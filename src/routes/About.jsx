//
//	jballands/jonathanballands.me
//	About.jsx
//
//	© 2019 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BoldButton from '@jballands/vespyr/lib/BoldButton';

import BackgroundGradient from 'components/BackgroundGradient';
import LinkInTabSvg from 'svg/LinkInTabSvg';

import { shark } from 'helpers/palette';

const AboutContainer = styled.div`
	width: 100%;
`;

const AboutHeroUnitContainer = styled.div`
	width: 100%;
	height: calc(100vh - 140px);
	display: flex;
	align-items: center;
	justify-content: center;
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
				<BackgroundGradient
					height="calc(100vh - 140px)"
					backgroundColor="#fb9fa4">
					<AboutHeroUnitContainer>
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
					</AboutHeroUnitContainer>
				</BackgroundGradient>
			</AboutContainer>
		);
	}
}
