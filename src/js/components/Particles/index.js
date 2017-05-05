//
//  jonathanballands.me
//  Particles/index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import Particles from 'react-particles-js';

import './Particles.scss';

// -----------------------------------------------------------------------------

export default class NavigationBar extends React.Component {

    render() {
        const params = {
            particles: {
                number: {
                    value: 75
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    out_mode: "bounce",
                    bounce: false
                },
                line_linked: {
                    enable: true,
                    distance: 110,
                    color: "#fff",
                    opacity: 0.7,
                    width: 1
                }
            },
            retina_detect: true
        };

        return (
            <div className="particles-container">
                <Particles width="100%" height="500px" params={params} />
                <div className="particles-content-positioning">
                    <div className="particles-content-container">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }

}
