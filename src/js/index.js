//
//  jonathanballands.me
//  index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';

import App from 'containers/App';
import About from 'containers/About';
import Kinesis from 'containers/Kinesis';
import Blog from 'containers/Blog';

import 'styles/normalize.scss';
import 'styles/fonts.scss';

// -----------------------------------------------------------------------------

class JonathanBallandsDotMe extends React.Component {

    render() {
        return (
            <Router>
                <Route path="/" component={App}>
                    <IndexRoute component={About} />
                    <Route path="/kinesis" component={Kinesis} />
                    <Route path="/blog" component={Blog} />
                </Route>
            </Router>
        );
    }

}

render(<JonathanBallandsDotMe />, document.getElementById('reactroot'));
