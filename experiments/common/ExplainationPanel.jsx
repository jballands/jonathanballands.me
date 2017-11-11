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

import HelpSvg from 'svg/HelpSvg';
import CollapseSvg from 'svg/CollapseSvg';

import AnchorTag from 'experiments/common/AnchorTag';

const ExplainationPanelContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;

	margin-bottom: 50px;
	transition: all 500ms ease;
	border-bottom: 1px solid
		${props => (props.open ? props.color : 'transparent')};
	border-radius: 2px;
`;

const ExplainationPanelHeader = styled.div`
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
`;

const StyledHelpSvg = styled(HelpSvg)`
	&:hover {
		cursor: pointer;
	}
`;

const StyledCollapseSvg = styled(CollapseSvg)`
	&:hover {
		cursor: pointer;
	}
`;

const ExplainationPanelContent = styled.div.attrs({
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

const StyledAnchorTag = styled(AnchorTag)`margin-right: 15px;`;

const RightSide = styled.div`flex: 0 1;`;

export default class ExplainationPanel extends React.Component {
	static displayName = 'ExplainationPanel';

	static propTypes = {
		children: PropTypes.node,
		color: PropTypes.string,
		id: PropTypes.string,
		renderExplaination: PropTypes.func.isRequired,
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
		const { color, id } = this.props;

		return (
			<ExplainationPanelContainer open={open} color={color}>
				<ExplainationPanelHeader>
					<LeftSide open={open}>
						{id && <StyledAnchorTag color={color} id="cpi-graph" />}
						<div>{this.props.children}</div>
					</LeftSide>
					<RightSide onClick={this.handleOnClick}>
						{this.renderIcon()}
					</RightSide>
				</ExplainationPanelHeader>
				<Motion
					style={{ height: spring(open ? this.contentHeight : 0) }}>
					{interpolated => (
						<ExplainationPanelContent height={interpolated.height}>
							<div ref={this.bindContent}>
								{this.props.renderExplaination()}
							</div>
						</ExplainationPanelContent>
					)}
				</Motion>
			</ExplainationPanelContainer>
		);
	}
}
