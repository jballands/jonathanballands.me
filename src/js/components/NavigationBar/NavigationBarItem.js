//
//  jonathanballands.me
//  NavigationBar/index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';

import './NavigationBarItem.scss';

// -----------------------------------------------------------------------------

export default class NavigationBarItem extends React.Component {

    render() {
        return (
            <a className="navigation-bar-item" href={this.props.link}>
                <span>{this.props.children}</span>
            </a>
        );
    }

}
