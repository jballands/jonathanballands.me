//
//	jballands/jonathanballands.me
//	ExplainationPanel.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { spring, Motion } from 'react-motion';
import styled from 'styled-components';

import { linkShade } from 'helpers/palette';

import HelpSvg from 'svg/HelpSvg';
import CollapseSvg from 'svg/CollapseSvg';

import AnchorTag from 'experiments/common/AnchorTag';

const ExplanationPanelContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;

	margin-bottom: 50px;
	transition: all 500ms ease;
	border-bottom: 1px solid
		${props => (props.open ? props.color : 'transparent')};
	border-radius: 2px;
`;

const ExplanationPanelHeader = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
`;

const StyledHelpSvg = styled(HelpSvg)`
	fill: ${props => props.color};

	&:hover {
		fill: ${props => linkShade(props.color)};
		cursor: pointer;
	}
`;

const StyledCollapseSvg = styled(CollapseSvg)`
	fill: ${props => props.color};

	&:hover {
		fill: ${props => linkShade(props.color)};
		cursor: pointer;
	}
`;

const ExplanationPanelContent = styled.div.attrs({
	style: props => ({
		height: `${props.height}px`,
	}),
})`
	overflow: hidden;

	p {
		margin: 0;
		padding: 1em 0;
	}
`;

const LeftSide = styled.div`
	flex: 1 0;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
`;

const StyledAnchorTag = styled(AnchorTag)`
	margin-right: 15px;
`;

const RightSide = styled.div`
	flex: 0 1;
`;

export default class ExplanationPanel extends React.Component {
	static displayName = 'ExplanationPanel';

	static propTypes = {
		children: PropTypes.node,
		color: PropTypes.string,
		link: PropTypes.string,
		renderExplanation: PropTypes.func,
	};

	state = {
		height: 0,
		open: false,
	};

	contentHeight = 0;

	handleOnClick = () => {
		this.setState({
			open: !this.state.open,
		});
		this.contentHeight = this.content.offsetHeight;
	};

	bindContent = node => {
		this.content = node;
	};

	renderIcon = () => {
		if (this.state.open) {
			return (
				<StyledCollapseSvg
					width={22}
					height={22}
					color={this.props.color}
				/>
			);
		}
		return (
			<StyledHelpSvg width={22} height={22} color={this.props.color} />
		);
	};

	render() {
		const { open } = this.state;
		const { color, link } = this.props;

		return (
			<ExplanationPanelContainer open={open} color={color}>
				<ExplanationPanelHeader>
					<LeftSide open={open}>
						{link && <StyledAnchorTag color={color} link={link} />}
						<div>{this.props.children}</div>
					</LeftSide>
					<RightSide onClick={this.handleOnClick}>
						{this.props.renderExplanation && this.renderIcon()}
					</RightSide>
				</ExplanationPanelHeader>
				<Motion
					style={{ height: spring(open ? this.contentHeight : 0) }}>
					{interpolated => (
						<ExplanationPanelContent height={interpolated.height}>
							<div ref={this.bindContent}>
								{this.props.renderExplanation &&
									this.props.renderExplanation()}
							</div>
						</ExplanationPanelContent>
					)}
				</Motion>
			</ExplanationPanelContainer>
		);
	}
}
