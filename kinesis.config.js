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
	lifestyle: {
		id: 'lifestyle',
		displayName: 'lifestyle',
	},
	coffee: {
		id: 'coffee',
		displayName: 'coffee',
	},
	austin: {
		id: 'austin',
		displayName: 'austin',
	},
};

//
//	Posts
//

export const kinesisPosts = [
	new Post({
		name: 'Hello jb.me 3',
		date: new Date(2017, 9, 3),
		hashtags: [KinesisHashtags.dev],
		type: Type.article,
		resource:
			'https://gist.githubusercontent.com/jballands/302708e124fae3c9bcc1df526eddcfaa/raw/80fcd6387f43574bdb2005561ea82f48b35c9b6a/jb.me%25203.0',
		primaryColor: '#4ecdc4',
		secondaryColor: '#dbfffc',
	}),
	new Post({
		name: 'Another post',
		date: new Date(2017, 8, 20),
		hashtags: [KinesisHashtags.dev],
		type: Type.experiment,
		resource: () => import('~/experiments/Demo'),
		primaryColor: '#ff6b6b',
		secondaryColor: '#ffcfb1',
	}),
];

// export const kinesisPosts = [
// {
// 	name: 'Hello jb.me 3',
// 	date: new Date(2017, 9, 3),
// 	endpoint:
// 		'https://gist.githubusercontent.com/jballands/302708e124fae3c9bcc1df526eddcfaa/raw/80fcd6387f43574bdb2005561ea82f48b35c9b6a/jb.me%25203.0',
// 	hashtags: [kinesisHashtags.dev],
// },
// 	{
// 		name: 'Swag Affogato',
// 		date: new Date(2017, 4, 14),
// 		endpoint:
// 			'https://gist.githubusercontent.com/jballands/75bc33c6f1683785fab03b09830a2a9e/raw/bb314bbf2d016e923323c2b1d6715fd5ca9a16f0/Test.md',
// 		hashtags: [kinesisHashtags.lifestyle],
// 	},
// 	{
// 		name: 'Roof Party Echo Park Single-origin Coffee',
// 		date: new Date(2017, 0, 1),
// 		endpoint:
// 			'https://gist.githubusercontent.com/jballands/75bc33c6f1683785fab03b09830a2a9e/raw/d7dcd5580808f99b429999e34408d940e1caea50/Test.md',
// 		hashtags: [kinesisHashtags.lifestyle, kinesisHashtags.coffee],
// 	},
// 	{
// 		name: 'VHS AF Tofu Hexagon',
// 		date: new Date(2016, 4, 14),
// 		endpoint:
// 			'https://gist.githubusercontent.com/jballands/75bc33c6f1683785fab03b09830a2a9e/raw/d7dcd5580808f99b429999e34408d940e1caea50/Test.md',
// 		hashtags: [kinesisHashtags.austin],
// 	},
// 	{
// 		name: 'Portland YOLO Plaid Tofu Tattooed',
// 		date: new Date(2017, 6, 20),
// 		endpoint:
// 			'https://gist.githubusercontent.com/jballands/75bc33c6f1683785fab03b09830a2a9e/raw/d7dcd5580808f99b429999e34408d940e1caea50/Test.md',
// 		hashtags: [
// 			kinesisHashtags.dev,
// 			kinesisHashtags.coffee,
// 			kinesisHashtags.austin,
// 		],
// 	},
// 	{
// 		name:
// 			'Beard Pitchfork Pork Belly Small Batch Tattooed Street Art Banh Mid',
// 		date: new Date(2017, 6, 22),
// 		endpoint:
// 			'https://gist.githubusercontent.com/jballands/75bc33c6f1683785fab03b09830a2a9e/raw/d7dcd5580808f99b429999e34408d940e1caea50/Test.md',
// 		hashtags: [kinesisHashtags.dev],
// 	},
// 	{
// 		name: 'Air Plant Fingerstache Ramps Franzen Unicorn',
// 		date: new Date(2017, 1, 28),
// 		endpoint:
// 			'https://gist.githubusercontent.com/jballands/75bc33c6f1683785fab03b09830a2a9e/raw/d7dcd5580808f99b429999e34408d940e1caea50/Test.md',
// 		hashtags: [kinesisHashtags.lifestyle],
// 	},
// 	{
// 		name: 'Migas cardigan +1',
// 		date: new Date(2015, 11, 31),
// 		endpoint:
// 			'https://gist.githubusercontent.com/jballands/75bc33c6f1683785fab03b09830a2a9e/raw/d7dcd5580808f99b429999e34408d940e1caea50/Test.md',
// 		hashtags: [kinesisHashtags.lifestyle, kinesisHashtags.coffee],
// 	},
// 	{
// 		name: '8-bit Salvia Brooklyn Kitsch Irony Ennui Tofu Typewriter',
// 		date: new Date(2017, 8, 26),
// 		endpoint:
// 			'https://gist.githubusercontent.com/jballands/75bc33c6f1683785fab03b09830a2a9e/raw/d7dcd5580808f99b429999e34408d940e1caea50/Test.md',
// 		hashtags: [kinesisHashtags.austin],
// 	},
// 	{
// 		name: 'Gastropub Beard: Hell of Jianbing Iceland',
// 		date: new Date(2017, 5, 25),
// 		endpoint:
// 			'https://gist.githubusercontent.com/jballands/75bc33c6f1683785fab03b09830a2a9e/raw/d7dcd5580808f99b429999e34408d940e1caea50/Test.md',
// 		hashtags: [
// 			kinesisHashtags.dev,
// 			kinesisHashtags.coffee,
// 			kinesisHashtags.austin,
// 		],
// 	},
// 	{
// 		name: 'Leggings Ramps iPhone Man Bun Poutine Forage',
// 		date: new Date(2016, 9, 31),
// 		endpoint:
// 			'https://gist.githubusercontent.com/jballands/75bc33c6f1683785fab03b09830a2a9e/raw/d7dcd5580808f99b429999e34408d940e1caea50/Test.md',
// 		hashtags: [kinesisHashtags.dev],
// 	},
// 	{
// 		name: 'XOXO Umami Helvetica Venmo Keytar Hell of Jianbing Iceland',
// 		date: new Date(2015, 10, 20),
// 		endpoint:
// 			'https://gist.githubusercontent.com/jballands/75bc33c6f1683785fab03b09830a2a9e/raw/d7dcd5580808f99b429999e34408d940e1caea50/Test.md',
// 		hashtags: [kinesisHashtags.austin],
// 	},
// 	{
// 		name: 'Meditation Quinoa Glossier Mustache',
// 		date: new Date(2016, 7, 4),
// 		endpoint:
// 			'https://gist.githubusercontent.com/jballands/75bc33c6f1683785fab03b09830a2a9e/raw/d7dcd5580808f99b429999e34408d940e1caea50/Test.md',
// 		hashtags: [
// 			kinesisHashtags.dev,
// 			kinesisHashtags.coffee,
// 			kinesisHashtags.austin,
// 		],
// 	},
// 	{
// 		name: 'Intelligentsia Polaroid Synth',
// 		date: new Date(2016, 3, 10),
// 		endpoint:
// 			'https://gist.githubusercontent.com/jballands/75bc33c6f1683785fab03b09830a2a9e/raw/d7dcd5580808f99b429999e34408d940e1caea50/Test.md',
// 		hashtags: [kinesisHashtags.austin],
// 	},
// 	{
// 		name: 'Keytar Fanny Pack Yuccie Narwhal',
// 		date: new Date(2017, 4, 30),
// 		endpoint:
// 			'https://gist.githubusercontent.com/jballands/75bc33c6f1683785fab03b09830a2a9e/raw/d7dcd5580808f99b429999e34408d940e1caea50/Test.md',
// 		hashtags: [kinesisHashtags.lifestyle],
// 	},
// 	{
// 		name: 'Vegan Fashion Axe Pinterest Bicycle Rights Adaptogen',
// 		date: new Date(2016, 2, 8),
// 		endpoint:
// 			'https://gist.githubusercontent.com/jballands/75bc33c6f1683785fab03b09830a2a9e/raw/d7dcd5580808f99b429999e34408d940e1caea50/Test.md',
// 		hashtags: [kinesisHashtags.dev],
// 	},
// ];
