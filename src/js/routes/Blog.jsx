//
//	jballands/jonathanballands.me
//	Blog.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import styled from 'styled-components';

import BlogBrowserContainer from 'containers/BlogBrowserContainer';
import BlogContentContainer from 'containers/BlogContentContainer';

const BlogContainer = styled.div`
	width: 100%;
	background: #fff;
	display: flex;
	flex-flow: row nowrap;
`;

export default class Blog extends React.Component {
	render() {
		const { history, match } = this.props;

		return (
			<BlogContainer>
				<BlogBrowserContainer history={history} match={match} />
				<BlogContentContainer history={history} match={match} />
			</BlogContainer>
		);
	}
}
