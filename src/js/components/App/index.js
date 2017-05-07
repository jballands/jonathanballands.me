//
//  jonathanballands.me
//  App/index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import NavigationBar from '../NavigationBar';
import Footer from '../Footer';

import './App.scss';

// -----------------------------------------------------------------------------

export default class App extends React.Component {

    render() {
        return (
            <div>
                <NavigationBar />
                {this.props.children}
                <Footer />
            </div>

        );
    }

}
