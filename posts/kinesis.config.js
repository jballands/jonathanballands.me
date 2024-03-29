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

export class Post extends Immutable.Record({
	name: 'Foobar',
	date: new Date(),
	hashtags: [],
	resource: null,
	primaryColor: '#4ecdc4',
	secondaryColor: '#dbfffc',

	// Special
	hidden: false,
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
		resource: () => import('posts/HelloJBMe'),
		primaryColor: '#4ecdc4',
		secondaryColor: '#dbfffc',
	}),
	new Post({
		name: 'Cost Disease',
		date: new Date(2018, 0, 31),
		hashtags: [KinesisHashtags.economics, KinesisHashtags.visualization],
		resource: () => import('posts/CostDisease'),
		primaryColor: '#ff6b6b',
		secondaryColor: '#ffcfb1',
	}),
	new Post({
		name: 'Loan Burndown',
		date: new Date(2018, 5, 27),
		hashtags: [KinesisHashtags.visualization, KinesisHashtags.tool],
		resource: () => import('posts/LoanBurndown'),
		primaryColor: '#68bf4c',
		secondaryColor: '#c1ffad',
	}),
	new Post({
		name: 'Apple TV Parallax',
		date: new Date(2018, 6, 11),
		hashtags: [KinesisHashtags.dev, KinesisHashtags.aesthetic],
		resource: () => import('posts/AppleTVParallax'),
		primaryColor: '#91adbc',
		secondaryColor: '#deebf2',
	}),
	// new Post({
	// 	name: 'Aperture',
	// 	date: new Date(2018, 8, 30),
	// 	hashtags: [KinesisHashtags.visualization, KinesisHashtags.aesthetic],
	// 	type: Type.experiment,
	// 	resource: () => import('~/experiments/ApertureViz'),
	// 	primaryColor: '#e58e19',
	// 	secondaryColor: '#ffe6c4',
	// }),
];
