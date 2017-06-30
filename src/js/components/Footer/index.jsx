//
//  jonathanballands.me
//  Footer/index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';

import TwitterSvg from 'svg/TwitterSvg';
import LinkedInSvg from 'svg/LinkedInSvg';
import GithubSvg from 'svg/GithubSvg';

import './Footer.scss';

// -----------------------------------------------------------------------------

export default class Footer extends React.Component {

    socialMediaDim = 25;

    render() {
        return (
            <div className="footer-container">
                <span className="footer-copyright" title="Made with <3 in Austin, TX">© 2017 Jonathan Ballands</span>
                <div className="footer-social-media-container">
                    <a href='https://twitter.com/jballands' target='_blank'>
                        <TwitterSvg width={this.socialMediaDim} height={this.socialMediaDim} />
                    </a>
                    <a href='https://linkedin.com/in/jballands' target='_blank'>
                        <LinkedInSvg width={this.socialMediaDim} height={this.socialMediaDim} />
                    </a>
                    <a href='https://github.com/jballands' target='_blank'>
                        <GithubSvg width={this.socialMediaDim} height={this.socialMediaDim} />
                    </a>
                </div>
            </div>
        );
    }

}
