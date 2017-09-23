//
//	jballands/jonathanballands.me
//	MasonryLayout.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Masonry from 'react-masonry-component';

const StyledMasonry = styled(Masonry)`
	width: 780px;
	padding: 10px 0;
	margin: 0 auto;
`;

export default class MasonryLayout extends React.Component {
	static displayName = 'MasonryLayout';

	static propTypes = {
		transitionDuration: PropTypes.number,
	};

	static defaultProps = {
		transitionDuration: 0,
	};

	render() {
		return (
			<StyledMasonry
				options={{ transitionDuration: this.props.transitionDuration }}>
				{this.props.children}
			</StyledMasonry>
		);
	}
}
