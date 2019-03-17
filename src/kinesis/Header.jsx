import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';

const KinesisArticleTitle = styled.div`
	font-size: 42px;
	color: ${props => props.color};
	font-family: Hero;
	text-transform: uppercase;
`;

const KinesisArticleSubtitle = styled.div`
	display: flex;
	flex-flow: column nowrap;
	color: ${props => props.color};
	margin-top: 5px;
`;

const Header = ({ title, date, hashtags, color }) => (
	<Fragment>
		<KinesisArticleTitle color={color}>{title}</KinesisArticleTitle>

		<KinesisArticleSubtitle color={color}>
			<div>{date && moment(date).format('MMMM Do, YYYY')}</div>
			<div>{hashtags}</div>
		</KinesisArticleSubtitle>
	</Fragment>
);

Header.propTypes = {
	title: PropTypes.string,
	date: PropTypes.object,
	hashtags: PropTypes.string,
	color: PropTypes.string,
};
