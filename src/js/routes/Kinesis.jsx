//
//	jballands/jonathanballands.me
//	Kinesis.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import styled from 'styled-components';

import BrowserDrawer from 'components/BrowserDrawer';

import { bittersweet, romantic } from 'helpers/palette';

const KinesisContainer = styled.div`
	width: 100%;
	background: #fff;
	display: flex;
	flex-flow: row nowrap;
`;

export default class Kinesis extends React.Component {
	render() {
		return (
			<KinesisContainer>
				<BrowserDrawer
					color={bittersweet}
					backgroundColor={romantic}
					title="Experiments">
					{close => {
						<div>Hello world!</div>;
					}}
				</BrowserDrawer>
			</KinesisContainer>
		);
	}
}
