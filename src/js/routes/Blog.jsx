//
//	jballands/jonathanballands.me
//	Blog.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';

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
				<Route exact path={match.url} />
			</BlogContainer>
		);
	}
}
