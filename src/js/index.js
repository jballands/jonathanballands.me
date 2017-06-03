//
//  jonathanballands.me
//  index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from 'containers/About';
import Kinesis from 'containers/Kinesis';
import Blog from 'containers/Blog';

import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';

import 'styles/normalize.scss';
import 'styles/fonts.scss';
import './App.scss';

// -----------------------------------------------------------------------------

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="app-container">
                    <NavigationBar />
                    <Route exact path="/" component={About} />
                    <Route path="/kinesis" component={Kinesis} />
                    <Route path="/blog" component={Blog} />

                    <Route path="/rawr">
                        <div>
                            <Route path="poo">
                                <span>💩</span>
                            </Route>
                            <Route path="bear">
                                <span>🐻</span>
                            </Route>
                        </div>
                    </Route>

                    <Footer />
                </div>   
            </Router>
        );
    }

}

render(<App />, document.getElementById('reactroot'));
