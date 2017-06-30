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
        const route = this.context.router.route.location.pathname;
        const { children, link } = this.props;

        // Do some logic to determine if the current route is part of the base link
        // We treat / special, though, since that doesn't have subroutes
        let isCurrentRoute = false;
        if (link === '/') {
            isCurrentRoute = route === '/';
        }
        else {
            isCurrentRoute = route.startsWith(this.props.link);
        }

        const curr = isCurrentRoute ? ' navigation-bar-current-route' : '';

        return (
            <Link className={`navigation-bar-item ${curr}`} to={link}>
                <span>{children}</span>
            </Link>
        );
    }

}
