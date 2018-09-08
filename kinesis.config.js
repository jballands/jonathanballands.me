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
	aesthetic: {
		id: 'aesthetic',
		displayName: 'aesthetic',
	},
	design: {
		id: 'design',
		displayName: 'design',
	},
	dev: {
		id: 'dev',
		displayName: 'dev',
	},
	diy: {
		id: 'diy',
		displayName: 'diy',
	},
	economics: {
		id: 'economics',
		displayName: 'economics',
	},
	home_automation: {
		id: 'home_automation',
		displayName: 'home-automation',
	},
	react: {
		id: 'react',
		displayName: 'react',
	},
	visualization: {
		id: 'visualization',
		displayName: 'visualization',
	},
	tool: {
		id: 'tool',
		displayName: 'tool',
	},
};

//
//	Posts
//

export const kinesisPosts = [
	new Post({
		name: 'Hello jb.me 3',
		date: new Date(2018, 0, 30),
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
	new Post({
		name: 'Loan Burndown',
		date: new Date(2018, 5, 27),
		hashtags: [KinesisHashtags.visualization, KinesisHashtags.tool],
		type: Type.experiment,
		resource: () => import('~/experiments/LoanBurndown'),
		primaryColor: '#68bf4c',
		secondaryColor: '#c1ffad',
	}),
	new Post({
		name: 'Apple TV Parallax',
		date: new Date(2018, 6, 11),
		hashtags: [KinesisHashtags.dev, KinesisHashtags.aesthetic],
		type: Type.experiment,
		resource: () => import('~/experiments/AppleTVParallax'),
		primaryColor: '#91adbc',
		secondaryColor: '#deebf2',
	}),
	// new Post({
	// 	name: 'Should Component Update',
	// 	date: new Date(2018, 7, 31),
	// 	hashtags: [KinesisHashtags.dev, KinesisHashtags.react],
	// 	type: Type.article,
	// 	resource: '/markdown/nicerReactApps.md',
	// 	primaryColor: '#42c8f4',
	// 	secondaryColor: '#dbf6ff',
	// }),
];
