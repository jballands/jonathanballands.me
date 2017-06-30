//
//  jonathanballands.me
//  components/MasonryLayout.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

import './MasonryLayout.scss';

export default class MasonryLayout extends React.Component {

    static displayName = 'MasonryLayout';

    static propTypes = {
        transitionDuration: PropTypes.number
    };

    static defaultProps = {
        transitionDuration: 0
    };

    render() {
        return (
            <Masonry className="masonry-layout" options={{ transitionDuration: this.props.transitionDuration }}>
                {this.props.children}
            </Masonry>
        );
    }

}
