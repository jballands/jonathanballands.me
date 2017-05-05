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

import '../styles/index.scss';

// -----------------------------------------------------------------------------

class Home extends React.Component {

    render() {
        return (
            <App>
                <Particles>
                    <div className="index-hero-unit">
                        <div className="index-hero-unit-title">
                            Good Things Come In Threes
                        </div>
                        <a className="index-hero-unit-link">
                            Say hello to jb.me 3.0
                        </a>
                    </div>
                </Particles>
            </App>
        );
    }

}

render(<Home />, document.getElementById('reactroot'));
