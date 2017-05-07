//
//  jonathanballands.me
//  routes/Blog.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';

import Particles from 'components/Particles';
import LinkWrapper from 'components/LinkWrapper';

import './Blog.scss';

export default class About extends React.Component {

    render() {
        return (
            <div>
                <div className="about-hero-unit-container">
                    <Particles>
                        <div className="about-hero-unit">
                            <div className="about-hero-unit-title">
                                Blarg
                            </div>
                            <div className="about-hero-unit-subtitle">
                                But you can call me Jon.
                            </div>
                            <LinkWrapper link='' external>
                                View My Résumé
                            </LinkWrapper>
                        </div>
                    </Particles>
                </div>

                <div className="about-me">

                </div>
            </div>
        );
    }

}
