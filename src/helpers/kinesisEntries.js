//
//	jballands/jonathanballands.me
//	kinesisSpec.js
//
//	© 2019 Jonathan Ballands
//

import Immutable from 'immutable';
import { DateTime } from 'luxon';

import { kinesisPosts } from 'posts/kinesis.config.js';
import encodeToUri from 'helpers/encodeToUri';

const entries = Immutable.Map(
	kinesisPosts.reduce((map, post) => {
		const id = encodeToUri(post.name);
		const postWithId = post.set('id', id);
		map[id] = postWithId;
		return map;
	}, {}),
).sort((a, b) => DateTime.fromJSDate(b.date) - DateTime.fromJSDate(a.date));

export default entries;
