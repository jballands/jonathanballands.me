//
//	jballands/jonathanballands.me
//	KinesisMarkdown.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import styled from 'styled-components';

import KinesisMarkdownCodeBlock from 'components/KinesisMarkdownCodeBlock';
import KinesisMarkdownHeading from 'components/KinesisMarkdownHeading';
import KinesisMarkdownLink from 'components/KinesisMarkdownLink';

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
		font-weight: 400;
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
		font-family: 'Droid Serif', serif;
	}

	hr {
		border-top: 0px;
		border-bottom: 1px solid ${props => props.color};
		margin: 30px 0;
	}

	code {
		color: ${black};
		font-weight: 700;
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

export default class KinesisMarkdown extends React.Component {
	static displayName = 'KinesisMarkdown';

	static propTypes = {
		className: PropTypes.string,
		color: PropTypes.string,
		content: PropTypes.string,
		style: PropTypes.object,
	};

	render() {
		const { className, color, content, style } = this.props;

		return (
			<KinesisStyle className={className} color={color} style={style}>
				<Markdown
					renderers={{
						CodeBlock: KinesisMarkdownCodeBlock,
						Heading: KinesisMarkdownHeading,
						Link: KinesisMarkdownLink,
					}}
					source={content}
				/>
			</KinesisStyle>
		);
	}
}
