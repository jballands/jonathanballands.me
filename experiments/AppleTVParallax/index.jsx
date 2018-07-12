import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import KinesisMarkdown from 'components/KinesisMarkdown';
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
	@media only screen and (max-device-width: 812px) {
		width: 350px;
		height: 350px;
	}
	@media only screen and (min-device-width: 813px) {
		width: 250px;
		height: 250px;
	}
	margin: 12px;
	border-radius: 5px;
`;

const DirectionsMouse = styled(KinesisMarkdown)`
	text-align: center;
	@media (pointer: coarse) {
		visibility: hidden;
		margin-bottom: 0px;
	}
	p {
		margin: 0;
	}
`;

const DirectionsTouch = styled(KinesisMarkdown)`
	text-align: center;
	margin-bottom: 40px;
	@media (pointer: fine) {
		visibility: hidden;
		margin-bottom: 0;
	}
	p {
		margin: 0;
	}
`;

export default class AppleTVParalax extends Component {
	static displayName = 'AppleTVParalax';

	static propTypes = {
		primaryColor: PropTypes.string,
	};

	render() {
		const { primaryColor } = this.props;

		return (
			<Fragment>
				<DirectionsMouse
					color={primaryColor}
					content="Hover over any album, click to select. Allow
					popups for best experience. [Click to see the code.](https://github.com/jballands/jonathanballands.me/blob/master/experiments/AppleTVParalax/AppleTVIcon.jsx)"
				/>
				<DirectionsTouch
					color={primaryColor}
					content="Tap and drag on any album, two finger touch to select. Allow
					popups for best experience. [Click to see the code.](https://github.com/jballands/jonathanballands.me/blob/master/experiments/AppleTVParalax/AppleTVIcon.jsx)"
				/>
				<Grid>
					<StyledAppleTVIcon
						onClick={() =>
							window.open(
								'https://open.spotify.com/album/1s8RmcZjTuvDt9eQ4MAKLI?si=g6Gx1EV8QhmmyjIvKdGftA',
							)
						}
						layers={[
							<Layer src="/assets/singing-saw-3.png" />,
							<LayerAbove src="/assets/singing-saw-2.png" />,
							<LayerAbove src="/assets/singing-saw-1.png" />,
						]}
					/>
					<StyledAppleTVIcon
						onClick={() =>
							window.open(
								'https://open.spotify.com/album/1JFmNyVPdBF1ECvv4fhpW4?si=8mf_5X8cRm29w0yFHA4oqg',
							)
						}
						layers={[
							<Layer src="/assets/1975-2.png" />,
							<Layer src="/assets/1975-1.png" />,
						]}
						parallaxMultiplier={0.035}
					/>
					<StyledAppleTVIcon
						onClick={() =>
							window.open(
								'https://open.spotify.com/album/1jeMiSeSnNS0Oys375qegp?si=kRZJ0Hx4RgeETwsZQDc0XQ',
							)
						}
						layers={[
							<Layer src="/assets/tranquility-base-hotel-and-casino-3.png" />,
							<Layer src="/assets/tranquility-base-hotel-and-casino-2.png" />,
							<Layer src="/assets/tranquility-base-hotel-and-casino-1.png" />,
						]}
					/>
					<StyledAppleTVIcon
						onClick={() =>
							window.open(
								'https://open.spotify.com/album/2Ew28hPUgNR8DSf5rxKqym?si=ukk7sNbNQ9-3oiBc0gk2QA',
							)
						}
						layers={[
							<Layer src="/assets/latigo-3.png" />,
							<LayerAbove src="/assets/latigo-2.png" />,
							<Layer src="/assets/latigo-1.png" />,
						]}
						parallaxMultiplier={0.035}
					/>
					<StyledAppleTVIcon
						onClick={() =>
							window.open(
								'https://open.spotify.com/album/6XzoFb3hP14jVQeCMRdVJR?si=AkOh3I4KQviwu6bUWQ86Ng',
							)
						}
						layers={[
							<Layer src="/assets/this-old-dog-3.png" />,
							<Layer src="/assets/this-old-dog-2.png" />,
							<Layer src="/assets/this-old-dog-1.png" />,
						]}
					/>
					<StyledAppleTVIcon
						onClick={() =>
							window.open(
								'https://open.spotify.com/album/09HqWRS5Ct0s5Iqq1yurjt?si=SkLG3afPSoy8wz_YAfBYog',
							)
						}
						layers={[
							<Layer src="/assets/chronovision-3.png" />,
							<Layer src="/assets/chronovision-2.png" />,
							<Layer src="/assets/chronovision-1.png" />,
						]}
					/>
					<StyledAppleTVIcon
						onClick={() =>
							window.open(
								'https://open.spotify.com/album/1wW4VymlWFy0wUKKBhcDWS?si=nAw71MZrQNaztGFCqsdeYQ',
							)
						}
						layers={[
							<Layer src="/assets/hanging-gardens-3.png" />,
							<Layer src="/assets/hanging-gardens-2.png" />,
							<Layer src="/assets/hanging-gardens-1.png" />,
						]}
						parallaxMultiplier={0.03}
					/>
					<StyledAppleTVIcon
						onClick={() =>
							window.open(
								'https://open.spotify.com/album/2I7bN0vjfoFw9di77xAZ4Y?si=XaxfO_fcSPuUkX4v97Y3Lg',
							)
						}
						layers={[
							<Layer src="/assets/painting-of-a-panic-attack-3.png" />,
							<Layer src="/assets/painting-of-a-panic-attack-2.png" />,
							<Layer src="/assets/painting-of-a-panic-attack-1.png" />,
						]}
					/>
					<StyledAppleTVIcon
						onClick={() =>
							window.open(
								'https://open.spotify.com/album/0DOzmXcSztIomiurOwMivk?si=p4D3AhV7TYWpLb2oRXhltw',
							)
						}
						layers={[
							<Layer src="/assets/99-cents-3.png" />,
							<Layer src="/assets/99-cents-2.png" />,
							<Layer src="/assets/99-cents-1.png" />,
						]}
						parallaxMultiplier={0.035}
					/>
				</Grid>
			</Fragment>
		);
	}
}
