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

import About from 'components/About';
import Kinesis from 'containers/Kinesis';
import Blog from 'containers/Blog';

import NavigationBar from 'components/NavigationBar';
import FooterWrapper from 'components/FooterWrapper';

import 'styles/normalize.scss';
import 'styles/fonts.scss';
import './App.scss';

// -----------------------------------------------------------------------------

class App extends React.Component {

    renderAbout = ({ match }) => (
        <FooterWrapper>
            <About match={match} />
        </FooterWrapper>
    );

    renderKinesis = ({ match }) => (
        <FooterWrapper>
            <Kinesis match={match} />
        </FooterWrapper>
    );

    renderBlog = ({ match }) => (
        <FooterWrapper>
            <Blog match={match} />
        </FooterWrapper>
    );

    render() {
        return (
            <Router history={createHistory()}>
                <Route render={({ location }) => {
                    return (
                    <div className="app-container">
                    <NavigationBar />
                    <CSSTransitionGroup 
                        transitionName="anim-fade"
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={300}
                        className="app-main-router-switch">

                        <Switch key={location.key} location={location}>
                            <Route exact path="/" render={this.renderAbout} />
                            <Route path="/kinesis" component={this.renderKinesis} />
                            <Route path="/blog" component={this.renderBlog} />
                        </Switch>

                    </CSSTransitionGroup>
                </div>   
                )}} />
            </Router>
        );
    }

}

render(<App />, document.getElementById('reactroot'));
