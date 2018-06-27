//
//	jballands/jonathanballands.me
//	LoanBurndown/index.jsx
//
//	© 2018 Jonathan Ballands
//

/*
 *	TODO:
 *	- Draw graphs
 *	- Add checkmarks to selected items in dropdown menus
 *	- Add screen for when CSV has no columns to choose
 *	- Add disabled to dropdowns (and use opacity instead of disabledGray)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import KinesisMarkdown from 'components/KinesisMarkdown';
import Welcome from './Welcome';
import VisualizerContainer from './VisualizerContainer';
import { explanationMd } from './markdown';
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
		primaryColor: PropTypes.string,
		ready: PropTypes.bool,
	};

	render() {
		const { primaryColor, ready } = this.props;

		return (
			<BurndownAppContainer>
				{!ready && <Welcome {...this.props} />}
				{ready && <VisualizerContainer {...this.props} />}
				<KinesisMarkdown color={primaryColor} content={explanationMd} />
			</BurndownAppContainer>
		);
	}
}

export default connect(mapStateToProps)(LoanBurndown);
