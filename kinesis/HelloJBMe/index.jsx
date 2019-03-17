import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from 'kinesis/Header';
import Markdown from 'kinesis/Markdown';
import md from './helloJBMe.md';

const HelloJBMe = ({ primaryColor }) => (
	<Fragment>
		<Header title={} />
		<Markdown color={primaryColor} content={md} />
	</Fragment>
);

HelloJBMe.propTypes = {
	primaryColor: PropTypes.string,
};

export default HelloJBMe;
