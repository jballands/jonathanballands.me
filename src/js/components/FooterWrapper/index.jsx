//
//  jonathanballands.me
//  FooterWrapper/index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';

import Footer from 'components/Footer';

import './FooterWrapper.scss';

export default class FooterWrapper extends React.Component {

    render() {
        return (
            <div className="footer-wrapper">
                <div className="footer-wrapper-content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }

}