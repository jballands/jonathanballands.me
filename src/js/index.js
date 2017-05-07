//
//  jonathanballands.me
//  index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import Particles from './components/Particles';
import Link from './components/Link';

import '../styles/index.scss';

// -----------------------------------------------------------------------------

class Home extends React.Component {

    render() {
        return (
            <App>
                <div className="index-hero-unit-container">
                    <Particles>
                        <div className="index-hero-unit">
                            <div className="index-hero-unit-title">
                                Howdy, I'm Pretty Rad
                            </div>
                            <div className="index-hero-unit-subtitle">
                                But you can call me Jon.
                            </div>
                            <Link link='' external>
                                View My Résumé
                            </Link>
                        </div>
                    </Particles>
                </div>

                <div className="index-about-me">

                </div>
            </App>
        );
    }

}

render(<Home />, document.getElementById('reactroot'));
