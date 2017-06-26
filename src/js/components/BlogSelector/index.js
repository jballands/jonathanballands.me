//
//  jonathanballands.me
//  BlogSelector/index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

import BlogEntryPreview from 'components/BlogEntryPreview';

import { BlogConfig } from 'helpers/blog.js';

import './BlogSelector.scss';

export default class BlogSelector extends React.Component {

    render() {
        return (
            <Masonry className="blog-article-selection-container" options={{ transitionDuration: 0 }}>

                {Object.keys(BlogConfig).map((uri, i) => {
                    const entry = BlogConfig[uri];
                    return (
                        <BlogEntryPreview
                            key={`blog-entry-${i}`}
                            uri={`${this.props.match.path}/${uri}`}
                            {...entry}
                        />
                    );
                })}

            </Masonry>
        );
    }

}
