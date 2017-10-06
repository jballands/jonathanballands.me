//
//	jballands/jonathanballands.me
//	KinesisEntry.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import Markdown from 'react-markdown';
import styled from 'styled-components';
import moment from 'moment';

import { shark, white } from 'helpers/palette';

const KinesisEntryContainer = styled.div`
	margin: 70px auto;
	width: 75%;
	max-width: 800px;
`;

const KinesisTitle = styled.div`
	font-size: 42px;
	font-weight: 700;
	color: ${props => props.color};
	font-family: 'Raleway', sans-serif;
	text-transform: uppercase;
`;

const KinesisSubtitle = styled.div`
	display: flex;
	flex-flow: column nowrap;
	color: ${shark};
	margin-top: 5px;
`;

const KinesisBody = styled(Markdown)`
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
			background-color: ${props => props.color};
			visibility: hidden;
			transform: scaleX(0);
			transition: all 0.2s ease-out 0s;
		}
	}

	blockquote {
		border-left: 1px solid ${props => props.color};
		padding: 1px 15px;
		margin: 20px 0;
		font-family: 'Droid Serif', 'serif';
	}

	hr {
		border-top: 0px;
		border-bottom: 1px solid ${props => props.color};
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

export default class KinesisEntry extends React.Component {
	static displayName = 'KinesisEntry';

	static propTypes = {
		content: PropTypes.string,
		selectedEntry: PropTypes.instanceOf(Immutable.Record),
	};

	render() {
		const { content, selectedEntry } = this.props;

		return (
			<KinesisEntryContainer>
				<KinesisTitle color={selectedEntry.primaryColor}>
					{selectedEntry.name}
				</KinesisTitle>

				<KinesisSubtitle>
					<div>
						{moment(selectedEntry.date).format('MMMM Do, YYYY')}
					</div>
					<div>{selectedEntry.getReadableHashtags()}</div>
				</KinesisSubtitle>
				<KinesisBody
					source={content}
					color={selectedEntry.primaryColor}
				/>
			</KinesisEntryContainer>
		);
	}
}
