//
//	jballands/jonathanballands.me
//	Markdown.jsx
//
//	© 2019 Jonathan Ballands
//

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import ReactMarkdown from 'react-markdown';
import { animateScroll } from 'react-scroll';
import styled from 'styled-components';

import MarkdownCodeBlock from 'kinesis/MarkdownCodeBlock';
import MarkdownHeading from 'kinesis/MarkdownHeading';
import MarkdownLink from 'kinesis/MarkdownLink';

import { black, shark, linkShade } from 'helpers/palette';

const KinesisStyle = styled.div`
	color: ${shark};
	line-height: 1.5em;
	display: flex;
	flex-flow: column;

	p {
		margin: 20px 0;
	}

	h1,
	h2,
	h3,
	h4 {
		line-height: 1.2em;
		font-weight: 700;
		color: ${props => props.color};
		margin: 1em 0;
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
		margin: 20px 0;
	}

	a {
		color: ${props => props.color};
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
			background-color: ${props => linkShade(props.color)};
			visibility: hidden;
			transform: scaleX(0);
			transition: all 0.2s ease-out 0s;
		}

		&:hover {
			color: ${props => linkShade(props.color)};
		}
	}

	blockquote {
		border-left: 1px solid ${props => props.color};
		padding: 1px 15px;
		margin: 20px 0;
		font-family: Quote;
	}

	hr {
		border-top: 0px;
		border-bottom: 1px solid ${props => props.color};
		margin: 30px 0;
	}

	code {
		color: ${black};
	}

	pre {
		padding: 10px 15px;
		background: ${shark};
		border-radius: 5px;

		code {
			padding: 0;
			background: transparent;
			color: ${shark};
		}
	}
`;

const Markdown = ({ className, color, content, location, style }) => {
	useEffect(() => {
		const animateOptions = { duration: 1000, smooth: 'easeOutQuint' };

		if (location.hash) {
			const element = document.getElementById(location.hash.slice(1));
			const offset = element
				? element.getBoundingClientRect().top - 25
				: 0;
			animateScroll.scrollMore(offset, animateOptions);
		} else {
			animateScroll.scrollToTop(animateOptions);
		}
	}, [location]);

	return (
		<KinesisStyle className={className} color={color} style={style}>
			<ReactMarkdown
				renderers={{
					CodeBlock: MarkdownCodeBlock,
					Heading: MarkdownHeading,
					Link: MarkdownLink,
				}}
				source={content}
			/>
		</KinesisStyle>
	);
};

Markdown.propTypes = {
	className: PropTypes.string,
	color: PropTypes.string,
	content: PropTypes.string,
	location: PropTypes.object,
	style: PropTypes.object,
};

export default withRouter(Markdown);
