import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppleTVIcon from './AppleTVIcon';

const Grid = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: space-around;
	width: 100%;
`;

const Layer = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

export default class AppleTVParalax extends Component {
	static displayName = 'AppleTVParalax';

	static propTypes = {
		primaryColor: PropTypes.string,
	};

	render() {
		return (
			<Grid>
				<AppleTVIcon
					style={{ height: 250, width: 250 }}
					layers={[<Layer src="/assets/music-for-cars.jpg" />]}
				/>
				<AppleTVIcon
					style={{ height: 250, width: 250 }}
					layers={[<Layer src="/assets/kinda.jpg" />]}
				/>
				<AppleTVIcon
					style={{ height: 250, width: 250 }}
					layers={[
						<Layer src="/assets/tranquility-base-hotel-and-casino.jpg" />,
					]}
				/>
			</Grid>
		);
	}
}
