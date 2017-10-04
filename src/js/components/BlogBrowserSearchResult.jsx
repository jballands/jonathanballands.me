//
//	jballands/jonathanballands.me
//	BlogBrowserSearchResult.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { mercury, puertoRico, shark } from 'helpers/palette';

import EyeSvg from 'svg/EyeSvg';

const BlogBrowserSearchResultContainer = styled(Link)`
	display: flex;
	flex-flow: row nowrap;
	font-size: 20px;
	padding: 10px 20px;

	&:hover {
		background: ${mercury};
		cursor: pointer;
	}

	&:first-child {
		margin-top: 10px;
	}
	&:not(:first-child) {
		margin-top: 5px;
	}

	&:last-child {
		margin-bottom: 10px;
	}
	&:not(:last-child) {
		margin-bottom: 5px;
	}
`;

const Content = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;

const Title = styled.div`
	font-size: 16px;
	color: ${shark};
	display: flex;
	flex-flow: row;
`;

const Subtitle = styled.div`
	color: ${shark};
	font-size: 12px;
`;

const ActiveIcon = styled.div`
	flex: 0 0 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 15px;
`;

export default class BlogBrowserSearchResult extends React.Component {
	static displayName = 'BlogBrowserSearchResult';

	static propTypes = {
		active: PropTypes.bool,
		date: PropTypes.object,
		endpoint: PropTypes.string,
		hashtags: PropTypes.array,
		id: PropTypes.string,
		match: PropTypes.object,
		title: PropTypes.string,
		onClick: PropTypes.func,
	};

	handleOnClick = () => {
		this.props.onClick(this.props.id);
	};

	renderHashtags = () => {
		const { hashtags } = this.props;
		return hashtags.map(h => `#${h}`).join(', ');
	};

	render() {
		const { active, date, id, match, title } = this.props;
		return (
			<BlogBrowserSearchResultContainer
				to={`${match.url}/${id}`}
				onClick={this.handleOnClick}>
				<ActiveIcon>
					{active && <EyeSvg color={puertoRico} width="100%" />}
				</ActiveIcon>
				<Content>
					<Title color={shark}>{title}</Title>
					<Subtitle>{moment(date).format('MMMM Do, YYYY')}</Subtitle>
					<Subtitle>{this.renderHashtags()}</Subtitle>
				</Content>
			</BlogBrowserSearchResultContainer>
		);
	}
}
