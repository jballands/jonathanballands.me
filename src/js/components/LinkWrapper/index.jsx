//
//  jonathanballands.me
//  LinkWrapper/index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import LinkSvg from 'svg/LinkSvg';

import './LinkWrapper.scss';

// -----------------------------------------------------------------------------

export default class LinkWrapper extends React.Component {

    static defaultProps = {
        external: false
    }

    render() {
        if (this.props.external === true) {
            return (
                <a className="link-wrapper-container" href={this.props.link}>
                    <span>{this.props.children}</span>
                    <LinkSvg />
                </a>
            );
        }
        return (
            <Link className="link-wrapper-container" to={this.props.link}>
                <span>{this.props.children}</span>
            </Link>
        );

    }

}
