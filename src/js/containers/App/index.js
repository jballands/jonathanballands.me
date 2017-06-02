//
//  jonathanballands.me
//  App/index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';

import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';

import './App.scss';

// -----------------------------------------------------------------------------

export default class App extends React.Component {

    render() {
        return (
            <div className="app-container">
                <NavigationBar />
                {this.props.children}
                <Footer />
            </div>
        );
    }

}
