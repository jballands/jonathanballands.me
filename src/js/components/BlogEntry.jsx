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
	font-size: 40px;
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

	h1,
	h2,
	h3 {
		font-weight: 400;
	}

	h1 {
		font-size: 35px;
	}
	h2 {
		font-size: 28px;
	}
	h3 {
		font-size: 23px;
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
				<BlogBody source={content} />
			</BlogEntryContainer>
		);
	}
}
