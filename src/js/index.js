//
//  jonathanballands.me
//  index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import createHistory from 'history/createBrowserHistory';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

// TODO: Import the root reducer here

import About from 'components/About';
import Kinesis from 'containers/Kinesis';
import Blog from 'components/Blog';

import NavigationBar from 'components/NavigationBar';
import FooterWrapper from 'components/FooterWrapper';

import 'styles/normalize.scss';
import 'styles/fonts.scss';
import './App.scss';

// -----------------------------------------------------------------------------

class App extends React.Component {

    renderAbout = props => (
        <FooterWrapper>
            <About {...props} />
        </FooterWrapper>
    );

    renderKinesis = props => (
        <FooterWrapper>
            <Kinesis {...props} />
        </FooterWrapper>
    );

    renderBlog = props => (
        <FooterWrapper>
            <Blog {...props} />
        </FooterWrapper>
    );

    render() {
        // TODO: Give the root reducer to the Redux store
        const store = createStore(() => {{}});

        return (
            <Provider store={store}>
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
            </Provider>
        );
    }

}

render(<App />, document.getElementById('reactroot'));
