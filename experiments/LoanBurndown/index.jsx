//
//	jballands/jonathanballands.me
//	LoanBurndown/index.jsx
//
//	© 2018 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Welcome from './Welcome';
import VisualizerContainer from './VisualizerContainer';
import * as reducers from './reducers';
import * as sagas from './sagas';

const BurndownAppContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

const mapStateToProps = ({ loanBurndown }) => ({
	ready: loanBurndown.get('ready', false),
});

class LoanBurndown extends React.Component {
	static displayName = 'LoanBurndown';

	static propTypes = {
		ready: PropTypes.bool,
	};

	render() {
		const { ready } = this.props;

		return (
			<BurndownAppContainer>
				{!ready && <Welcome {...this.props} />}
				{ready && <VisualizerContainer {...this.props} />}
			</BurndownAppContainer>
		);
	}
}

export default connect(mapStateToProps)(LoanBurndown);
