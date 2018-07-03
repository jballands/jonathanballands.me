import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppleTVIcon from './AppleTVIcon';

export default class AppleTVParalax extends Component {
	static displayName = 'AppleTVParalax';

	static propTypes = {
		primaryColor: PropTypes.string,
	};

	render() {
		return <AppleTVIcon />;
	}
}
