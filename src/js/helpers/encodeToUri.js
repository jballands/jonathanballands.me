//
//	jballands/jonathanballands.me
//	encodeToUri.js
//
//	© 2017 Jonathan Ballands
//

import _toLower from 'lodash.tolower';

export default function(str) {
	return encodeURI(_toLower(str).replace(/ /g, '-'));
}
