//
//	jballands/jonathanballands.me
//	Footer.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import styled from 'styled-components';

import TwitterSvg from 'svg/TwitterSvg';
import LinkedInSvg from 'svg/LinkedInSvg';
import GithubSvg from 'svg/GithubSvg';

const FooterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #24292e;
	height: 70px;
	padding: 0px 20px;
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	width: calc(100% - 40px);
`;

const FooterCopyright = styled.span`color: white;`;

const FooterSocialMediaContainer = styled.div`
	display: flex;
	flex-flow: row;
	justify-content: center;
	align-items: center;

	* + * {
		margin-left: 10px;
	}
`;

export default class Footer extends React.Component {
	socialMediaDim = 25;

	render() {
		return (
			<FooterContainer>
				<FooterCopyright title="Made with <3 in Austin, TX">
					© 2017 Jonathan Ballands
				</FooterCopyright>
				<FooterSocialMediaContainer>
					<a href="https://twitter.com/jballands" target="_blank">
						<TwitterSvg
							width={this.socialMediaDim}
							height={this.socialMediaDim}
						/>
					</a>
					<a href="https://linkedin.com/in/jballands" target="_blank">
						<LinkedInSvg
							width={this.socialMediaDim}
							height={this.socialMediaDim}
						/>
					</a>
					<a href="https://github.com/jballands" target="_blank">
						<GithubSvg
							width={this.socialMediaDim}
							height={this.socialMediaDim}
						/>
					</a>
				</FooterSocialMediaContainer>
			</FooterContainer>
		);
	}
}
