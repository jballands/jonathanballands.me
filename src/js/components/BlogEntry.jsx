//
//	jballands/jonathanballands.me
//	BlogEntry.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import styled from 'styled-components';
import moment from 'moment';

const BlogEntryContainer = styled.div`
	margin: 70px auto;
	width: 75%;
	max-width: 800px;
`;

const BlogTitle = styled.div`
	font-size: 42px;
	color: white;
`;

const BlogSubtitle = styled.div`
	display: flex;
	flex-flow: column nowrap;
	color: ${props => props.color};
	margin-top: 5px;
`;

const BlogBody = styled(Markdown)`
	margin-top: 50px;
	color: white;
	line-height: 1.5em;
	display: flex;
	flex-flow: column;

	p {
		margin: 10px 0;
	}

	h1,
	h2,
	h3,
	h4 {
		font-weight: 400;
	}

	h1 {
		font-size: 36px;
	}
	h2 {
		font-size: 28px;
	}
	h3 {
		font-size: 23px;
	}
	h4 {
		font-size: 19px;
	}
	h5 {
		font-size: 16px;
	}
	h6 {
		font-size: 13px;
	}

	img {
		max-width: 100%;
	}

	a {
		color: ${props => props.accentColor};
		position: relative;

		&:hover:after {
			visibility: visible;
			transform: scaleX(1);
		}

		&:after {
			content: '';
			position: absolute;
			width: 100%;
			height: 1px;
			bottom: 0;
			left: 0;
			background-color: ${props => props.accentColor};
			visibility: hidden;
			transform: scaleX(0);
			transition: all 0.2s ease-out 0s;
		}
	}

	blockquote {
		border-left: 1px solid ${props => props.accentColor};
		padding: 1px 15px;
		margin: 20px 0;
		font-family: 'Droid Serif', 'serif';
	}

	hr {
		border-top: 0px;
		border-bottom: 1px solid ${props => props.accentColor};
		margin: 30px 0;
	}

	code {
		padding: 2px 4px;
		background: #00b78c;
		border-radius: 3px;
		color: ${props => props.accentColor};
	}

	pre {
		padding: 10px 15px;
		background: #00b78c;
		border-radius: 3px;
		color: ${props => props.accentColor};

		code {
			padding: 0;
			background: transparent;
		}
	}
`;

export default class BlogEntry extends React.Component {
	static displayName = 'BlogEntry';

	static propTypes = {
		accentColor: PropTypes.string,
		content: PropTypes.string,
		selectedEntry: PropTypes.object.isRequired,
	};

	render() {
		const { accentColor, content, selectedEntry } = this.props;

		return (
			<BlogEntryContainer>
				<BlogTitle>{selectedEntry.name}</BlogTitle>

				<BlogSubtitle color={accentColor}>
					<div>
						{moment(selectedEntry.date).format('MMMM Do, YYYY')}
					</div>
					<div>
						{selectedEntry.hashtags.map(h => `#${h}`).join(', ')}
					</div>
				</BlogSubtitle>
				<BlogBody source={content} accentColor={accentColor} />
			</BlogEntryContainer>
		);
	}
}
