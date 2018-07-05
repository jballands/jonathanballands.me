import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppleTVIcon from './AppleTVIcon';

const Grid = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: flex-start;
	justify-content: space-around;
	width: 100%;
`;

const GridIcon = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	max-width: 250px;
	justify-content: flex-start;
`;

const AlbumName = styled.div`
	font-size: 16px;
	margin-top: 40px;
	color: ${props => props.color};
	text-align: center;
`;

const Layer = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const LayerAbove = styled.img`
	position: absolute;
	top: -10px;
	left: -10px;
	width: 105%;
	height: 105%;
`;

export default class AppleTVParalax extends Component {
	static displayName = 'AppleTVParalax';

	static propTypes = {
		primaryColor: PropTypes.string,
	};

	render() {
		const { primaryColor } = this.props;

		return (
			<Grid>
				<GridIcon>
					<AppleTVIcon
						style={{ height: 250, width: 250 }}
						layers={[
							<Layer src="/assets/singing-saw-3.png" />,
							<LayerAbove src="/assets/singing-saw-2.png" />,
							<LayerAbove src="/assets/singing-saw-1.png" />,
						]}
					/>
					<AlbumName color={primaryColor}>Singing Saw</AlbumName>
				</GridIcon>
				<GridIcon>
					<AppleTVIcon
						style={{ height: 250, width: 250 }}
						layers={[
							<Layer src="/assets/1975-2.png" />,
							<Layer src="/assets/1975-1.png" />,
						]}
					/>
					<AlbumName color={primaryColor}>
						I like it when you sleep, for you are so beautiful yet
						so unaware of it
					</AlbumName>
				</GridIcon>
				<GridIcon>
					<AppleTVIcon
						style={{ height: 250, width: 250 }}
						layers={[
							<Layer src="/assets/tranquility-base-hotel-and-casino.jpg" />,
						]}
					/>
					<AlbumName color={primaryColor}>The 1975</AlbumName>
				</GridIcon>
			</Grid>
		);
	}
}
