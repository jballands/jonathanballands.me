//
//	jballands/jonathanballands.me
//	BlogBrowserSearchResult.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BlogBrowserSearchResultContainer = styled.div``;

export default class BlogBrowserSearchResult extends React.Component {
	static displayName = 'BlogBrowserSearchResult';

	static propTypes = {
		active: PropTypes.bool,
		date: PropTypes.object,
		endpoint: PropTypes.string,
		hashtags: PropTypes.array,
		title: PropTypes.string,
	};

	render() {
		return (
			<BlogBrowserSearchResultContainer>
				{this.props.title}
			</BlogBrowserSearchResultContainer>
		);
	}
}
