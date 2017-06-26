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

export default class BlogEntryPreview extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
        image: PropTypes.string,
        description: PropTypes.string,
        uri: PropTypes.string.isRequired
    };

    render() {
        console.log(this.props);

        return (
            <Link to={this.props.uri}>
                <div className="blog-entry-preview-container">

                    { this.props.image ? this._image(): null }

                    <div className="blog-entry-preview-details">
                        <div className="blog-entry-preview-title">{this.props.name}</div>
                        <div className="blog-entry-preview-date">{this.props.date.toLocaleDateString()}</div>
                        { this.props.description ? this._description() : null }
                    </div>

                </div>
            </Link>
        );
    }

    _description() {
        return (
            <div className="blog-entry-preview-description">
                {this.props.description}
            </div>
        );
    }

    _image() {
        return (
            <Img className="blog-entry-preview-image" src={this.props.image} />
        );
    }

}
