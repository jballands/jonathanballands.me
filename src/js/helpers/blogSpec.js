//
//	jballands/jonathanballands.me
//	blogSpec.js
//
//	© 2017 Jonathan Ballands
//

import Immutable from 'immutable';

import { blogPosts } from '~/blog.config.js';
import encodeToUri from 'helpers/encodeToUri';

export const entries = Immutable.Map(
	blogPosts.reduce((map, post) => {
		const id = encodeToUri(post.name);
		map[id] = post;
		map[id].id = id;
		return map;
	}, {}),
);
