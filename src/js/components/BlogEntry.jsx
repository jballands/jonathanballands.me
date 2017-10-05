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

import { puertoRico, shark, white } from 'helpers/palette';

const BlogEntryContainer = styled.div`
	margin: 70px auto;
	width: 75%;
	max-width: 800px;
`;

const BlogTitle = styled.div`
	font-size: 42px;
	font-weight: 700;
	color: ${puertoRico};
	font-family: 'Raleway', sans-serif;
	text-transform: uppercase;
`;

const BlogSubtitle = styled.div`
	display: flex;
	flex-flow: column nowrap;
	color: ${shark};
	margin-top: 5px;
`;

const BlogBody = styled(Markdown)`
	margin-top: 50px;
	color: ${shark};
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
		color: ${puertoRico};
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
			background-color: ${puertoRico};
			visibility: hidden;
			transform: scaleX(0);
			transition: all 0.2s ease-out 0s;
		}
	}

	blockquote {
		border-left: 1px solid ${puertoRico};
		padding: 1px 15px;
		margin: 20px 0;
		font-family: 'Droid Serif', 'serif';
	}

	hr {
		border-top: 0px;
		border-bottom: 1px solid ${puertoRico};
		margin: 30px 0;
	}

	code {
		padding: 2px 4px;
		background: ${shark};
		border-radius: 3px;
		color: ${white};
	}

	pre {
		padding: 10px 15px;
		background: ${shark};
		border-radius: 5px;

		code {
			padding: 0;
			background: transparent;
		}
	}
`;

export default class BlogEntry extends React.Component {
	static displayName = 'BlogEntry';

	static propTypes = {
		content: PropTypes.string,
		selectedEntry: PropTypes.object.isRequired,
	};

	render() {
		const { content, selectedEntry } = this.props;

		return (
			<BlogEntryContainer>
				<BlogTitle>{selectedEntry.name}</BlogTitle>

				<BlogSubtitle>
					<div>
						{moment(selectedEntry.date).format('MMMM Do, YYYY')}
					</div>
					<div>
						{selectedEntry.hashtags
							.map(h => `#${h.displayName}`)
							.join(', ')}
					</div>
				</BlogSubtitle>
				<BlogBody source={content} />
			</BlogEntryContainer>
		);
	}
}
