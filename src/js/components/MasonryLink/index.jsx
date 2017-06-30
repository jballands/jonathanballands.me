//
//  jonathanballands.me
//  MasonryLink/index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Img from 'react-image';

import encodeToUri from 'helpers/encodeToUri';

import './MasonryLink.scss';

export default class MasonryLink extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
        image: PropTypes.string,
        description: PropTypes.string,
        uri: PropTypes.string.isRequired
    };

    renderImage = () => {
        return (
            <Img className="masonry-link-image" src={this.props.image} />
        );
    };

    renderDescription = () => {
        return (
            <div className="masonry-link-description">
                {this.props.description}
            </div>
        );
    };

    render() {
        return (
            <Link to={this.props.uri}>
                <div className="masonry-link">

                    { this.props.image && this.renderImage() }

                    <div className="masonry-link-details">
                        <div className="masonry-link-title">{this.props.name}</div>
                        <div className="masonry-link-date">{this.props.date.toLocaleDateString()}</div>
                        { this.props.description && this.renderDescription() }
                    </div>

                </div>
            </Link>
        );
    }
}