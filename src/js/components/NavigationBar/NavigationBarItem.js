//
//  jonathanballands.me
//  NavigationBar/index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationBarItem.scss';

// -----------------------------------------------------------------------------

export default class NavigationBarItem extends React.Component {

    render() {
        return (
            <Link className="navigation-bar-item" to={this.props.link}>
                <span>{this.props.children}</span>
            </Link>
        );
    }

}
