//
//  jonathanballands.me
//  App/index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import NavigationBar from '../NavigationBar';

import './App.scss';

// -----------------------------------------------------------------------------

export default class App extends React.Component {

    render() {
        return (
            <div>
                <NavigationBar />
                {this.props.children}
            </div>

        );
    }

}
