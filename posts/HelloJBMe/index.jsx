import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from 'kinesis/Header';
import Markdown from 'kinesis/Markdown';
import md from './helloJBMe.md';

const HelloJBMe = ({ name, date, hashtags, color, primaryColor }) => (
	<Fragment>
		<Header
			title={name}
			date={date}
			hashtags={hashtags}
			color={primaryColor}
		/>
		<Markdown color={primaryColor} content={md} />
	</Fragment>
);

HelloJBMe.propTypes = {
	primaryColor: PropTypes.string,
};

export default HelloJBMe;
