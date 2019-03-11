//
//	jballands/jonathanballands.me
//	kinesisSpec.js
//
//	© 2017 Jonathan Ballands
//

import Immutable from 'immutable';

import { kinesisPosts } from 'kinesis/kinesis.config.js';
import encodeToUri from 'helpers/encodeToUri';

const entries = Immutable.Map(
	kinesisPosts.reduce((map, post) => {
		const id = encodeToUri(post.name);
		const postWithId = post.set('id', id);
		map[id] = postWithId;
		return map;
	}, {}),
);
export const helpEntry = entries
	.filter(entry => entry.help)
	.toList()
	.get(0);

export default entries;
