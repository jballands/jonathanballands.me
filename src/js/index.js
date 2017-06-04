//
//  jonathanballands.me
//  index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

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
            <Router history={createHistory()}>
                <div className="app-container">
                    <NavigationBar />
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route path="/kinesis" component={Kinesis} />
                        <Route path="/blog" component={Blog} />
                    </Switch>
                    <Footer />
                </div>   
            </Router>
        );
    }

}

render(<App />, document.getElementById('reactroot'));
