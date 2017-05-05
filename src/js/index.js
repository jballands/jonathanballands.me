//
//  jonathanballands.me
//  index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

// -----------------------------------------------------------------------------

class Main extends React.Component {

    render() {
        return (<App />);
    }

}

render(<Main />, document.getElementById('reactroot'));
