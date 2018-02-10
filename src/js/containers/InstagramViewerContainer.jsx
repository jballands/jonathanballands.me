//
//	jballands/jonathanballands.me
//	InstagramViewer.jsx
//
//	© 2018 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fuchsiaBlue, eastSide, moonRaker, shark } from 'helpers/palette';

const ViewerContainer = styled.div`
	height: 400px;
	width: 100%;
`;

function mapStateToProps(state) {
	return {};
}

class InstagramViewerContainer extends React.Component {
	static displayName = 'InstagramViewerContainer';

	static propTypes = {};

	render() {
		return (
			<ViewerContainer>
				<div>Hello world</div>
			</ViewerContainer>
		);
	}
}

export default connect(mapStateToProps)(InstagramViewerContainer);
