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
import UpArrowSvg from 'svg/UpArrowSvg';

const ExplainationPanelContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	margin: 15px 0;
	transition: all 250ms ease;
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

const StyledUpArrowSvg = styled(UpArrowSvg)`
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
	margin: 15px 0;

	p {
		margin: 0;
		padding: 1em 0;
	}
`;

const LeftSide = styled.div`flex: 1 0;`;

const RightSide = styled.div`flex: 0 1;`;

export default class ExplainationPanel extends React.Component {
	static displayName = 'ExplainationPanel';

	static propTypes = {
		children: PropTypes.node,
		color: PropTypes.string,
		renderExplaination: PropTypes.func.isRequired,
	};

	state = {
		height: 0,
		open: false,
	};

	contentHeight = 0;

	componentDidMount() {
		this.contentHeight = this.content.offsetHeight;
	}

	handleOnClick = () => {
		this.setState({
			open: !this.state.open,
		});
	};

	bindContent = node => {
		this.content = node;
	};

	renderIcon = () => {
		if (this.state.open) {
			return (
				<StyledUpArrowSvg
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

		return (
			<ExplainationPanelContainer open={open}>
				<ExplainationPanelHeader>
					<LeftSide open={open}>{this.props.children}</LeftSide>
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
