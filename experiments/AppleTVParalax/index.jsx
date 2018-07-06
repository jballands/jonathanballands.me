import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppleTVIcon from './AppleTVIcon';

const Grid = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: flex-start;
	justify-content: center;
	width: 100%;
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

const StyledAppleTVIcon = styled(AppleTVIcon)`
	width: 250px;
	height: 250px;
	margin: 15px;
	border: 1px solid #e0e0e0;
	border-radius: 5px;
`;

export default class AppleTVParalax extends Component {
	static displayName = 'AppleTVParalax';

	static propTypes = {
		primaryColor: PropTypes.string,
	};

	render() {
		return (
			<Grid>
				<StyledAppleTVIcon
					parallaxMultiplier={0.06}
					layers={[
						<Layer src="/assets/singing-saw-3.png" />,
						<LayerAbove src="/assets/singing-saw-2.png" />,
						<LayerAbove src="/assets/singing-saw-1.png" />,
					]}
				/>
				<StyledAppleTVIcon
					parallaxMultiplier={0.065}
					layers={[
						<Layer src="/assets/1975-2.png" />,
						<Layer src="/assets/1975-1.png" />,
					]}
				/>
				<StyledAppleTVIcon
					layers={[
						<Layer src="/assets/tranquility-base-hotel-and-casino-3.png" />,
						<Layer src="/assets/tranquility-base-hotel-and-casino-2.png" />,
						<Layer src="/assets/tranquility-base-hotel-and-casino-1.png" />,
					]}
				/>
				<StyledAppleTVIcon
					parallaxMultiplier={0.06}
					layers={[
						<Layer src="/assets/99-cents-3.png" />,
						<Layer src="/assets/99-cents-2.png" />,
						<Layer src="/assets/99-cents-1.png" />,
					]}
				/>
				<StyledAppleTVIcon
					layers={[
						<Layer src="/assets/this-old-dog-3.png" />,
						<Layer src="/assets/this-old-dog-2.png" />,
						<Layer src="/assets/this-old-dog-1.png" />,
					]}
				/>
				<StyledAppleTVIcon
					layers={[
						<Layer src="/assets/chronovision-3.png" />,
						<Layer src="/assets/chronovision-2.png" />,
						<Layer src="/assets/chronovision-1.png" />,
					]}
				/>
				<StyledAppleTVIcon
					layers={[
						<Layer src="/assets/hanging-gardens-3.png" />,
						<Layer src="/assets/hanging-gardens-2.png" />,
						<Layer src="/assets/hanging-gardens-1.png" />,
					]}
				/>
				<StyledAppleTVIcon
					layers={[
						<Layer src="/assets/painting-of-a-panic-attack-3.png" />,
						<Layer src="/assets/painting-of-a-panic-attack-2.png" />,
						<Layer src="/assets/painting-of-a-panic-attack-1.png" />,
					]}
				/>
				<StyledAppleTVIcon
					layers={[
						<Layer src="/assets/latigo-3.png" />,
						<LayerAbove src="/assets/latigo-2.png" />,
						<Layer src="/assets/latigo-1.png" />,
					]}
				/>
			</Grid>
		);
	}
}
