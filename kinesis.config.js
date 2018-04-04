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
	new Post({
		name: 'HomeKit All the Things',
		date: new Date(2018, 2, 20),
		hashtags: [
			KinesisHashtags.home_automation,
			KinesisHashtags.diy,
			KinesisHashtags.dev,
		],
		type: Type.article,
		resource: '/markdown/homekitAllTheThings.md',
		primaryColor: '#549ff7',
		secondaryColor: '#b3d5fc',
	}),
	new Post({
		name: 'Loan Burndown',
		date: new Date(2018, 3, 10),
		hashtags: [KinesisHashtags.visualization],
		type: Type.experiment,
		resource: () => import('~/experiments/LoanBurndown'),
		primaryColor: '#68bf4c',
		secondaryColor: '#c1ffad',
	}),
];
