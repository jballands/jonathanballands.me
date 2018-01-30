//
//	jballands/jonathanballands
//	404.jsx
//
//	© 2018 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BoldButton from '@jballands/vespyr/lib/BoldButton';
import { Link } from 'react-router-dom';

import BackgroundGradient from 'components/BackgroundGradient';
import { alto, silver, shark } from 'helpers/palette';

const NotFoundContainer = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
`;

const NotFoundTitle = styled.div`
	font-family: 'Raleway', sans-serif;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 54px;
	letter-spacing: 1px;
	color: ${silver};
	margin-top: 35px;
	max-width: 80%;
	text-align: center;
`;

const NotFoundExplanation = styled.div`
	font-family: 'Roboto', 'serif';
	font-weight: 300;
	color: ${shark};
	font-size: 20px;
	letter-spacing: 1px;
	margin-top: 10px;
	max-width: 80%;
	text-align: center;
`;

const Charlie = styled.img`
	max-width: 500px;
	width: 100%;
	margin-top: 50px;
`;

const GoHome = styled(BoldButton)`
	font-size: 16px;
	text-transform: capitalize;
`;

const GoHomeContainer = styled(Link)`
	margin-top: 30px;
`;

export default class PageNotFound extends React.Component {
	static displayName = 'PageNotFound';

	static propTypes = {
		className: PropTypes.string,
	};

	render() {
		return (
			<NotFoundContainer className={this.props.className}>
				<BackgroundGradient backgroundColor={alto}>
					<Charlie src="assets/charlie.png" />
					<NotFoundTitle>Page Not Found</NotFoundTitle>
					<NotFoundExplanation>
						The page you requested was either moved or does not
						exist anymore. Sorry about that!
					</NotFoundExplanation>
					<GoHomeContainer to="/">
						<GoHome accentColor={silver}>Back to Safety</GoHome>
					</GoHomeContainer>
				</BackgroundGradient>
			</NotFoundContainer>
		);
	}
}
