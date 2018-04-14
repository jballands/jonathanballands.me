//
//	jballands/jonathanballands.me
//	KinesisBrowserSearchResult.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import styled from 'styled-components';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { mercury, shark } from 'helpers/palette';

import EyeSvg from 'svg/EyeSvg';

const KinesisBrowserSearchResultContainer = styled(Link)`
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

export default class KinesisBrowserSearchResult extends React.Component {
	static displayName = 'KinesisBrowserSearchResult';

	static propTypes = {
		active: PropTypes.bool,
		id: PropTypes.string,
		match: PropTypes.object,
		onClick: PropTypes.func,
		result: PropTypes.instanceOf(Immutable.Record),
	};

	handleOnClick = () => {
		// We don't need to do send the id of the thing that was
		// clicked because we are using react-router as our source
		// of truth; we only need to report that a click happened
		// so we can close the drawer
		this.props.onClick();
	};

	renderHashtags = () => {
		const { result } = this.props;
		return result.getReadableHashtags();
	};

	render() {
		const { active, id, match, result } = this.props;
		return (
			<KinesisBrowserSearchResultContainer
				to={`${match.url}/${id}`}
				onClick={this.handleOnClick}>
				<ActiveIcon>
					{active && (
						<EyeSvg color={result.primaryColor} width="100%" />
					)}
				</ActiveIcon>
				<Content>
					<Title color={shark}>{result.name}</Title>
					<Subtitle>
						{moment(result.date).format('MMMM Do, YYYY')}
					</Subtitle>
					<Subtitle>{this.renderHashtags()}</Subtitle>
				</Content>
			</KinesisBrowserSearchResultContainer>
		);
	}
}
