//
//	jballands/jonathanaballands.me
//	Graph.jsx
//
//	© 2018 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

const mapStateToProps = ({ loanBurndown }) => ({
	columns: loanBurndown.get('columns'),
	data: loanBurndown.get('data'),
});

class Graph extends React.Component {
	static displayName = 'Graph';

	static propTypes = {
		columns: PropTypes.object,
		data: PropTypes.object,
	};

	render() {
		return 'hello world';
	}
}

export default connect(mapStateToProps)(Graph);
