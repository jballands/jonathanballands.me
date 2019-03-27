//
//	jballands/jonathanballands.me
//	Particles.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactParticles from 'react-particles-js';

import { gigas } from 'helpers/palette';

const ParticlesContainer = styled.div`
	width: 100%;
	height: ${props => props.height};
	position: relative;
`;

const ParticlesContentPositioning = styled.div`
	position: absolute;
	z-index: 1;
	height: 100%;
	width: 100%;
	top: 0;
`;

const ParticlesContentContainer = styled.div`
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

export default class Particles extends React.Component {
	static displayName = 'Particles';

	static propTypes = {
		children: PropTypes.node,
		height: PropTypes.string,
	};

	render() {
		const params = {
			particles: {
				number: {
					value: 40,
				},
				move: {
					enable: true,
					speed: 3,
					direction: 'none',
					random: true,
					out_mode: 'bounce',
					bounce: false,
				},
				line_linked: {
					enable: true,
					distance: 250,
					color: '#fff',
					opacity: 0.7,
					width: 1,
				},
			},
			retina_detect: true,
		};

		const { height } = this.props;

		return (
			<ParticlesContainer height={height}>
				<ReactParticles width="100%" height={height} params={params} />

				<ParticlesContentPositioning>
					<ParticlesContentContainer>
						{this.props.children}
					</ParticlesContentContainer>
				</ParticlesContentPositioning>
			</ParticlesContainer>
		);
	}
}
