//
//  jonathanballands.me
//  index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';

import About from 'routes/About';
import Blog from 'routes/Blog';

import 'styles/normalize.scss';
import 'styles/fonts.scss';

// -----------------------------------------------------------------------------

class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <NavigationBar />

                        <Route exact path="/" component={About}/>
                        <Route exact path="/blog" component={Blog}/>

                    <Footer />
                </div>
            </Router>
        );
    }

}

render(<App />, document.getElementById('reactroot'));
