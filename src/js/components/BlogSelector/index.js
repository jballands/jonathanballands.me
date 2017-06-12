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

import BlogConfig from '~/blog.config.js';

import './BlogSelector.scss';

export default class BlogSelector extends React.Component {

    static propTypes = {
        blogConfig: PropTypes.arrayOf(PropTypes.object)
    };

    render() {
        return (
            <Masonry className="blog-article-selection-container" options={{ transitionDuration: 0 }}>

                {BlogConfig.map((entry, i) => {
                    return (
                        <div key={`blog-entry-${i}`}>
                            <BlogEntryPreview {...entry} />
                        </div>
                    );
                })}

            </Masonry>
        );
    }

}
