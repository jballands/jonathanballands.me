//
//  jonathanballands.me
//  NavigationBar/index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './NavigationBarItem.scss';

// -----------------------------------------------------------------------------

export default class NavigationBarItem extends React.Component {

    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        const isCurrentRoute = this.context.router.route.location.pathname === this.props.link;
        const curr = isCurrentRoute ? ' navigation-bar-current-route' : '';

        return (
            <Link className={`navigation-bar-item ${curr}`} to={this.props.link}>
                <span>{this.props.children}</span>
            </Link>
        );
    }

}
