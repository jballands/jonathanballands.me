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
		date: new Date(2017, 9, 7),
		hashtags: [KinesisHashtags.dev],
		type: Type.article,
		resource: '/markdown/helloJBMe.md',
		primaryColor: '#4ecdc4',
		secondaryColor: '#dbfffc',
	}),
	new Post({
		name: 'Cost Disease Explained',
		date: new Date(2017, 9, 7),
		hashtags: [KinesisHashtags.economics, KinesisHashtags.visualization],
		type: Type.experiment,
		resource: () => import('~/experiments/CostDisease'),
		primaryColor: '#ff6b6b',
		secondaryColor: '#ffcfb1',
	}),
	new Post({
		name: 'Hello jb.me 4',
		date: new Date(2017, 9, 7),
		hashtags: [KinesisHashtags.dev],
		type: Type.article,
		resource: '/markdown/helloJBMe.md',
		primaryColor: '#4ecdc4',
		secondaryColor: '#dbfffc',
	}),
	new Post({
		name: 'Cost Disease Explained 2',
		date: new Date(2017, 9, 7),
		hashtags: [KinesisHashtags.economics, KinesisHashtags.visualization],
		type: Type.experiment,
		resource: () => import('~/experiments/CostDisease'),
		primaryColor: '#ff6b6b',
		secondaryColor: '#ffcfb1',
	}),
	new Post({
		name: 'Hello jb.me 5',
		date: new Date(2017, 9, 7),
		hashtags: [KinesisHashtags.dev],
		type: Type.article,
		resource: '/markdown/helloJBMe.md',
		primaryColor: '#4ecdc4',
		secondaryColor: '#dbfffc',
	}),
	new Post({
		name: 'Cost Disease Explained 3',
		date: new Date(2017, 9, 7),
		hashtags: [KinesisHashtags.economics, KinesisHashtags.visualization],
		type: Type.experiment,
		resource: () => import('~/experiments/CostDisease'),
		primaryColor: '#ff6b6b',
		secondaryColor: '#ffcfb1',
	}),
	new Post({
		name: 'Hello jb.me 6',
		date: new Date(2017, 9, 7),
		hashtags: [KinesisHashtags.dev],
		type: Type.article,
		resource: '/markdown/helloJBMe.md',
		primaryColor: '#4ecdc4',
		secondaryColor: '#dbfffc',
	}),
	new Post({
		name: 'Cost Disease Explained 4',
		date: new Date(2017, 9, 7),
		hashtags: [KinesisHashtags.economics, KinesisHashtags.visualization],
		type: Type.experiment,
		resource: () => import('~/experiments/CostDisease'),
		primaryColor: '#ff6b6b',
		secondaryColor: '#ffcfb1',
	}),
	new Post({
		name: 'Hello jb.me 7',
		date: new Date(2017, 9, 7),
		hashtags: [KinesisHashtags.dev],
		type: Type.article,
		resource: '/markdown/helloJBMe.md',
		primaryColor: '#4ecdc4',
		secondaryColor: '#dbfffc',
	}),
	new Post({
		name: 'Cost Disease Explained 5',
		date: new Date(2017, 9, 7),
		hashtags: [KinesisHashtags.economics, KinesisHashtags.visualization],
		type: Type.experiment,
		resource: () => import('~/experiments/CostDisease'),
		primaryColor: '#ff6b6b',
		secondaryColor: '#ffcfb1',
	}),
	new Post({
		name: 'Hello jb.me 8',
		date: new Date(2017, 9, 7),
		hashtags: [KinesisHashtags.dev],
		type: Type.article,
		resource: '/markdown/helloJBMe.md',
		primaryColor: '#4ecdc4',
		secondaryColor: '#dbfffc',
	}),
	new Post({
		name: 'Cost Disease Explained 6',
		date: new Date(2017, 9, 7),
		hashtags: [KinesisHashtags.economics, KinesisHashtags.visualization],
		type: Type.experiment,
		resource: () => import('~/experiments/CostDisease'),
		primaryColor: '#ff6b6b',
		secondaryColor: '#ffcfb1',
	}),
	new Post({
		name: 'Hello jb.me 9',
		date: new Date(2017, 9, 7),
		hashtags: [KinesisHashtags.dev],
		type: Type.article,
		resource: '/markdown/helloJBMe.md',
		primaryColor: '#4ecdc4',
		secondaryColor: '#dbfffc',
	}),
	new Post({
		name: 'Cost Disease Explained 7',
		date: new Date(2017, 9, 7),
		hashtags: [KinesisHashtags.economics, KinesisHashtags.visualization],
		type: Type.experiment,
		resource: () => import('~/experiments/CostDisease'),
		primaryColor: '#ff6b6b',
		secondaryColor: '#ffcfb1',
	}),
	new Post({
		name: 'Hello jb.me 10',
		date: new Date(2017, 9, 7),
		hashtags: [KinesisHashtags.dev],
		type: Type.article,
		resource: '/markdown/helloJBMe.md',
		primaryColor: '#4ecdc4',
		secondaryColor: '#dbfffc',
	}),
	new Post({
		name: 'Cost Disease Explained 8',
		date: new Date(2017, 9, 7),
		hashtags: [KinesisHashtags.economics, KinesisHashtags.visualization],
		type: Type.experiment,
		resource: () => import('~/experiments/CostDisease'),
		primaryColor: '#ff6b6b',
		secondaryColor: '#ffcfb1',
	}),
	new Post({
		name: 'Hello jb.me 11',
		date: new Date(2017, 9, 7),
		hashtags: [KinesisHashtags.dev],
		type: Type.article,
		resource: '/markdown/helloJBMe.md',
		primaryColor: '#4ecdc4',
		secondaryColor: '#dbfffc',
	}),
	new Post({
		name: 'Cost Disease Explained 9',
		date: new Date(2017, 9, 7),
		hashtags: [KinesisHashtags.economics, KinesisHashtags.visualization],
		type: Type.experiment,
		resource: () => import('~/experiments/CostDisease'),
		primaryColor: '#ff6b6b',
		secondaryColor: '#ffcfb1',
	}),
	new Post({
		name: 'What Is Kinesis?',
		date: null,
		type: Type.article,
		resource: '/markdown/kinesis.md',
		primaryColor: '#7953c1',
		secondaryColor: '#d0bff2',
		hidden: true,
		help: true,
	}),
];
