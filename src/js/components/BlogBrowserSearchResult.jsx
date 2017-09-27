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

import EyeSvg from 'svg/EyeSvg';

const BlogBrowserSearchResultContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	font-size: 20px;
	padding: 10px 20px;

	&:hover {
		background: #0cd1a3;
		cursor: pointer;
	}

	&:first-child {
		margin-top: 25px;
	}

	&:last-child {
		margin-bottom: 25px;
	}
`;

const Content = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;

const Title = styled.div`
	font-size: 20px;
	color: white;
	display: flex;
	flex-flow: row;
`;

const Subtitle = styled.div`
	color: #247261;
	font-size: 12px;
`;

const ActiveIcon = styled.div`
	width: 30px;
	flex: 0 0;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 15px;
`;

export default class BlogBrowserSearchResult extends React.Component {
	static displayName = 'BlogBrowserSearchResult';

	static propTypes = {
		active: PropTypes.bool,
		date: PropTypes.object,
		endpoint: PropTypes.string,
		hashtags: PropTypes.array,
		onClick: PropTypes.func,
		uri: PropTypes.string,
		title: PropTypes.string,
	};

	handleOnClick = () => {
		this.props.onClick(this.props.uri);
	};

	renderHashtags = () => {
		const { hashtags } = this.props;
		return hashtags.map(h => `#${h}`).join(', ');
	};

	render() {
		const { active, date, title } = this.props;
		return (
			<BlogBrowserSearchResultContainer onClick={this.handleOnClick}>
				{active && (
					<ActiveIcon>
						<EyeSvg width={28} height={27} />
					</ActiveIcon>
				)}
				<Content>
					<Title>{title}</Title>
					<Subtitle>{moment(date).format('MMMM Do, YYYY')}</Subtitle>
					<Subtitle>{this.renderHashtags()}</Subtitle>
				</Content>
			</BlogBrowserSearchResultContainer>
		);
	}
}
