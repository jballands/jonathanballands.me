//
//  jonathanballands.me
//  routes/Blog.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';

import BlogEntryPreview from 'components/BlogEntryPreview';

import BlogConfig from '~/blog.config.js';

import './Blog.scss';

export default class Blog extends React.Component {

    render() {
        return (
            <div className="blog-container">
                <div className="blog-article-selection-container">

                    {BlogConfig.map((entry, i) => {
                    	return (
                    		<div key={`blog-entry-${i}`}>
                    			<BlogEntryPreview {...entry} />
                    		</div>
                    	);
                    })}

                </div>
            </div>
        );
    }

}
