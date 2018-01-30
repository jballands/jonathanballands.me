//
//  jonathanballands.me
//  kinesis.config.js
//
//  © 2017 Jonathan Ballands
//

import Immutable from 'immutable';

//
//	Definitions
//

export const Type = {
	article: 'article',
	experiment: 'experiment',
};

export class Post extends Immutable.Record({
	name: 'Foobar',
	date: new Date(),
	hashtags: [],
	type: Type.article,
	resource: null,
	primaryColor: '#4ecdc4',
	secondaryColor: '#dbfffc',
	hidden: false,
	help: false,
	id: null,
}) {
	getReadableHashtags() {
		return this.hashtags.map(h => `#${h.displayName}`).join(', ');
	}
}

//
//	Hashtags
//

export const KinesisHashtags = {
	design: {
		id: 'design',
		displayName: 'design',
	},
	dev: {
		id: 'dev',
		displayName: 'dev',
	},
	economics: {
		id: 'economics',
		displayName: 'economics',
	},
	visualization: {
		id: 'visualization',
		displayName: 'visualization',
	},
};

//
//	Posts
//

export const kinesisPosts = [
	new Post({
		name: 'Hello jb.me 3',
		date: new Date(2018, 0, 31),
		hashtags: [KinesisHashtags.dev, KinesisHashtags.design],
		type: Type.article,
		resource: '/markdown/helloJBMe.md',
		primaryColor: '#4ecdc4',
		secondaryColor: '#dbfffc',
	}),
	new Post({
		name: 'Cost Disease',
		date: new Date(2018, 0, 31),
		hashtags: [KinesisHashtags.economics, KinesisHashtags.visualization],
		type: Type.experiment,
		resource: () => import('~/experiments/CostDisease'),
		primaryColor: '#ff6b6b',
		secondaryColor: '#ffcfb1',
	}),
];
