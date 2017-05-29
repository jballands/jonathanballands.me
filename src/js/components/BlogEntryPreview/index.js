//
//  jonathanballands.me
//  BlogEntryPreview/index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';

import './BlogEntryPreview.scss';

// -----------------------------------------------------------------------------

export default class BlogEntryPreview extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
        endpoint: PropTypes.string.isRequired,
        image: PropTypes.string,
        description: PropTypes.string
    };

    render() {
        console.log(this.props);

        return (
            <div className="blog-entry-preview-container">
                <div className="blog-entry-preview-title">{this.props.name}</div>
            </div>
        );
    }

}
