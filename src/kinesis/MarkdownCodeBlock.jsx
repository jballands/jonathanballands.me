//
//	jballands/jonathanballands.me
//	MarkdownCodeBlock.js
//
//	© 2019 Jonathan Ballands
//

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Lowlight from 'react-lowlight';
import js from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';
import styled from 'styled-components';

const StyledLowlight = styled(Lowlight)`
	.hljs {
		display: block;
		overflow-x: auto;
		padding: 0.5em;
		color: #abb2bf;
		background: #282c34;
	}

	.hljs-comment,
	.hljs-quote {
		color: #5c6370;
		font-style: italic;
	}

	.hljs-doctag,
	.hljs-keyword,
	.hljs-formula {
		color: #c678dd;
	}

	.hljs-section,
	.hljs-name,
	.hljs-selector-tag,
	.hljs-deletion,
	.hljs-subst {
		color: #e06c75;
	}

	.hljs-literal {
		color: #56b6c2;
	}

	.hljs-string,
	.hljs-regexp,
	.hljs-addition,
	.hljs-attribute,
	.hljs-meta-string {
		color: #98c379;
	}

	.hljs-built_in,
	.hljs-class .hljs-title {
		color: #e6c07b;
	}

	.hljs-attr,
	.hljs-variable,
	.hljs-template-variable,
	.hljs-type,
	.hljs-selector-class,
	.hljs-selector-attr,
	.hljs-selector-pseudo,
	.hljs-number {
		color: #d19a66;
	}

	.hljs-symbol,
	.hljs-bullet,
	.hljs-link,
	.hljs-meta,
	.hljs-selector-id,
	.hljs-title {
		color: #61aeee;
	}

	.hljs-emphasis {
		font-style: italic;
	}

	.hljs-strong {
		font-weight: bold;
	}

	.hljs-link {
		text-decoration: underline;
	}
`;

Lowlight.registerLanguage('js', js);
Lowlight.registerLanguage('bash', bash);

export default class MarkdownCodeBlock extends PureComponent {
	static displayName = 'MarkdownCodeBlock';

	static propTypes = {
		language: PropTypes.string,
		literal: PropTypes.string,
	};

	render() {
		return (
			<StyledLowlight
				language={this.props.language || 'js'}
				value={this.props.literal}
			/>
		);
	}
}
