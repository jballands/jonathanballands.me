//
//	jballands/jonathanballands.me
//	Chart.jsx
//
//	© 2018 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Axis from 'experiments/common/Axis';

const VIEWBOX = {
	width: 500,
	height: 400,
};

class Chart extends React.Component {
	static displayName = 'Chart';

	static propTypes = {};
}

export default connect()(Chart);
