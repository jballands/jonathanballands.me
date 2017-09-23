//
//	jballands/jonathanballands.me
//	MasonryLink.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'react-image';

import encodeToUri from 'helpers/encodeToUri';

const MasonryLinkContainer = styled.div`
	width: 230px;
	margin: 5px;
	background: #e5e5e5;
	border-radius: 5px;

	transition: all 0.15s ease-in-out;

	&:hover {
		transform: translate(0, -6px);
		cursor: pointer;
		background: #e6d3ff;
	}
`;

const MasonryLinkTitle = styled.div`
	font-family: 'Roboto', 'serif';
	font-size: 18px;
	color: #232323;
`;

const MasonryLinkDate = styled.div`
	font-family: 'Roboto', 'serif';
	font-size: 12px;
	color: #424242;
`;

const MasonryLinkDescription = styled.div`
	font-family: 'Roboto', 'serif';
	font-size: 13px;
	color: #424242;
	margin-top: 8px;
`;

const MasonryLinkImage = styled(Img)`
	width: 100%;
	display: block;
	border-radius: 5px 5px 0 0;
`;

const MasonryLinkDetails = styled.div`padding: 20px;`;

export default class MasonryLink extends React.Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		date: PropTypes.instanceOf(Date).isRequired,
		image: PropTypes.string,
		description: PropTypes.string,
		uri: PropTypes.string.isRequired,
	};

	renderImage = () => {
		return <MasonryLinkImage src={this.props.image} />;
	};

	renderDescription = () => {
		return (
			<MasonryLinkDescription>
				{this.props.description}
			</MasonryLinkDescription>
		);
	};

	render() {
		return (
			<Link to={this.props.uri}>
				<MasonryLinkContainer>
					{this.props.image && this.renderImage()}

					<MasonryLinkDetails>
						<MasonryLinkTitle>{this.props.name}</MasonryLinkTitle>
						<MasonryLinkDate>
							{this.props.date.toLocaleDateString()}
						</MasonryLinkDate>
						{this.props.description && this.renderDescription()}
					</MasonryLinkDetails>
				</MasonryLinkContainer>
			</Link>
		);
	}
}
