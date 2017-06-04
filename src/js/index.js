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
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

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
                <Route render={({ location, history }) => {
                    console.log(location);

                    return (
                    <div className="app-container">
                    <NavigationBar />
                    <CSSTransitionGroup transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300} className="app-main-router-switch">

                        <Switch key={location.key} location={location}>
                            <Route exact path="/" component={About} />
                            <Route path="/kinesis" component={Kinesis} />
                            <Route path="/blog" component={Blog} />
                        </Switch>

                    </CSSTransitionGroup>
                    <Footer />
                </div>   
                )}} />
            </Router>
        );
    }

}

render(<App />, document.getElementById('reactroot'));
