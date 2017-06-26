//
//  jonathanballands.me
//  helpers/blog.js
//
//  © 2017 Jonathan Ballands
//

import { blogPosts } from '~/blog.config.js';
import encodeToUri from 'helpers/encodeToUri';

function addBlogPosts(posts) {
    return posts.reduce((config, post) => {
        config[encodeToUri(post.name)] = post;
        return config;
    }, {});
}

export const BlogConfig = addBlogPosts(blogPosts);