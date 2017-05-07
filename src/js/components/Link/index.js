//
//  jonathanballands.me
//  Link/index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import LinkSvg from '../../svg/LinkSvg';

import './Link.scss';

// -----------------------------------------------------------------------------

export default class Link extends React.Component {

    static defaultProps = {
        external: false
    }

    render() {
        return (
            <a className="link-container" href={this.props.link}>
                <span>{this.props.children}</span>
                { this.props.external ? <LinkSvg /> : null }
            </a>
        );
    }

}
