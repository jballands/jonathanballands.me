//
//	jballands/jonathanballands.me
//	Blog.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import styled from 'styled-components';

import BlogBrowserContainer from 'containers/BlogBrowserContainer';

import { BlogConfig } from 'helpers/blog';

const BlogContainer = styled.div`
	width: 100%;
	background: #fff;
`;

export default class Blog extends React.Component {
	render() {
		const { match } = this.props;

		return (
			<BlogContainer>
				<BlogBrowserContainer />
			</BlogContainer>
		);
	}
}
