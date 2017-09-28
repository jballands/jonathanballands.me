//
//	jballands/jonathanballands.me
//	Blog.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

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
				<Route
					path={`${match.url}/:blogId?`}
					component={BlogContentContainer}
				/>
			</BlogContainer>
		);
	}
}
