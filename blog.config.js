//
//  jonathanballands.me
//  blog.config.js
//
//  © 2017 Jonathan Ballands
//

import Immutable from 'immutable';
import moment from 'moment';

import encodeToUri from 'helpers/encodeToUri';

const blogPosts = [
	{
		name: 'Swag Affogato',
		date: new Date(2017, 4, 14),
		endpoint: '75bc33c6f1683785fab03b09830a2a9e',
		hashtags: ['lifestyle'],
		description:
			'Polaroid everyday carry lo-fi, four dollar toast vape VHS ' +
			'tofu hashtag poutine fanny pack gochujang shaman. Readymade kogi post-ironic ' +
			'waistcoat narwhal single-origin coffee.',
	},
	{
		name: 'Roof Party Echo Park Single-origin Coffee',
		date: new Date(2017, 0, 1),
		endpoint: '75bc33c6f1683785fab03b09830a2a9e',
		hashtags: ['lifestyle, coffee'],
		description:
			'Taxidermy post-ironic keytar portland, copper mug live-edge ' +
			'cronut blue bottle photo booth keffiyeh.',
	},
	{
		name: 'VHS AF Tofu Hexagon',
		date: new Date(2016, 4, 14),
		endpoint: '75bc33c6f1683785fab03b09830a2a9e',
		hashtags: ['austin'],
		description:
			"Biodiesel 3 wolf moon cred gastropub, occupy 90's kogi hoodie " +
			'photo booth trust fund messenger bag ugh PBR&B raw denim meh. Scenester ' +
			'iPhone hammock cardigan.',
	},
	{
		name: 'Portland YOLO Plaid Tofu Tattooed',
		date: new Date(2017, 6, 20),
		endpoint: '75bc33c6f1683785fab03b09830a2a9e',
		hashtags: ['tech', 'coffee', 'austin'],
		description:
			'Normcore tote bag organic post-ironic, yr subway tile next level.' +
			'Fam shaman copper mug microdosing, kitsch narwhal seitan bushwick austin ' +
			'3 wolf moon ennui man bun iceland.',
	},
	{
		name:
			'Beard Pitchfork Pork Belly Small Batch Tattooed Street Art Banh Mid',
		date: new Date(2017, 6, 22),
		endpoint: '75bc33c6f1683785fab03b09830a2a9e',
		hashtags: ['tech'],
		description:
			'La croix celiac cornhole mustache tacos flexitarian, cold-pressed ' +
			'asymmetrical edison bulb authentic tote bag intelligentsia direct trade.',
	},
];

export default function(sortOrder) {
	return Immutable.OrderedMap(
		blogPosts
			.sort((a, b) => {
				if (sortOrder === 'later') {
					return moment(a.date).isAfter(b.date);
				}
				return moment(a.date).isBefore(b.date);
			})
			.reduce((map, post) => {
				const uri = encodeToUri(post.name);
				map[uri] = post;
				return map;
			}, {}),
	);
}
