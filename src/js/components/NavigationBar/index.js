//
//  jonathanballands.me
//  NavigationBar/index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import NavigationBarItem from './NavigationBarItem';

import './NavigationBar.scss';

// -----------------------------------------------------------------------------

export default class NavigationBar extends React.Component {

    render() {
        return (
            <div className="navigation-bar-container">
                <a href="/"><span className="navigation-bar-title">Jonathan Ballands</span></a>

                <div className="navigation-bar-list">
                    <NavigationBarItem link="/">About</NavigationBarItem>
                    <NavigationBarItem link="/kinesis">Kinesis</NavigationBarItem>
                    <NavigationBarItem link="/blog">Blog</NavigationBarItem>
                </div>
            </div>
        );
    }

}
