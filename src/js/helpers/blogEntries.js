//
//	jballands/jonathanballands.me
//	blogEntries.js
//
//	© 2017 Jonathan Ballands
//

import Immutable from 'immutable';

import blogEntries from '~/blog.config.js';
import encodeToUri from 'helpers/encodeToUri';

export default Immutable.Map(
	blogEntries.reduce((map, post) => {
		const id = encodeToUri(post.name);
		map[id] = post;
		map[id].id = id;
		return map;
	}, {}),
);
