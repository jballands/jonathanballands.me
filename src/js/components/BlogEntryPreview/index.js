//
//  jonathanballands.me
//  BlogEntryPreview/index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Img from 'react-image';

import encodeToUri from 'helpers/encodeToUri';

import './BlogEntryPreview.scss';

// -----------------------------------------------------------------------------

export default class BlogEntryPreview extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
        image: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string.isRequired
    };

    renderImage() {
        return (
            <Img className="blog-entry-preview-image" src={this.props.image} />
        );
    }

    renderDescription() {
        return (
            <div className="blog-entry-preview-description">
                {this.props.description}
            </div>
        );
    }

    render() {
        return (
            <Link to={encodeToUri(this.props.link)}>
                <div className="blog-entry-preview-container">

                    { this.props.image ? this.renderImage() : null }

                    <div className="blog-entry-preview-details">
                        <div className="blog-entry-preview-title">{this.props.name}</div>
                        <div className="blog-entry-preview-date">{this.props.date.toLocaleDateString()}</div>
                        { this.props.description ? this.renderDescription() : null }
                    </div>

                </div>
            </Link>
        );
    }

}
