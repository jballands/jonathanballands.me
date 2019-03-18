//
//	jballands/jonathanballands.me
//	kinesisSpec.js
//
//	© 2017 Jonathan Ballands
//

import Immutable from 'immutable';
import moment from 'moment';

import { kinesisPosts } from 'posts/kinesis.config.js';
import encodeToUri from 'helpers/encodeToUri';

const entries = Immutable.Map(
	kinesisPosts.reduce((map, post) => {
		const id = encodeToUri(post.name);
		const postWithId = post.set('id', id);
		map[id] = postWithId;
		return map;
	}, {}),
).sort((a, b) => (moment(a.date).isBefore(b.date) ? 1 : -1));

export default entries;
