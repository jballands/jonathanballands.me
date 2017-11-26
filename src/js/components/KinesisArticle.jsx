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

import KinesisPost from 'components/KinesisPost';

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
	color: ${props => props.color};
	margin-top: 5px;
`;

const StyledKinesisPost = styled(KinesisPost)`
	margin-top: 40px;
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
			<div>
				<KinesisTitle color={selectedEntry.primaryColor}>
					{selectedEntry.name}
				</KinesisTitle>

				<KinesisSubtitle color={selectedEntry.primaryColor}>
					<div>
						{selectedEntry.date &&
							moment(selectedEntry.date).format('MMMM Do, YYYY')}
					</div>
					<div>{selectedEntry.getReadableHashtags()}</div>
				</KinesisSubtitle>
				<StyledKinesisPost color={selectedEntry.primaryColor}>
					<Markdown source={content} />
				</StyledKinesisPost>
			</div>
		);
	}
}
