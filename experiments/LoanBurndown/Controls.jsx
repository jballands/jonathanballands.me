//
//	jballands/jonathanballands.me
//	Controls.jsx
//
//	© 2018 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactSVG from 'react-svg';
import DropdownMenu from '@jballands/vespyr/lib/DropdownMenu';
import MenuItem from '@jballands/vespyr/lib/MenuItem';

import { chooseInputColumn, chooseOutputColumn } from './actions';

const Dropdowns = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;

	> div + div {
		margin-left: 25px;
	}
`;

const StyledDropdown = styled(DropdownMenu)`
	line-height: normal;
`;

const NothingSelected = styled.div`
	opacity: 0.4;
	font-style: italic;
`;

const WarningIcon = styled(ReactSVG)`
	fill: red;
	width: 25px;
	height: 25px;
`;

const Icon = styled(ReactSVG)`
	width: 25px;
	height: 25px;
`;

const mapStateToProps = ({ loanBurndown }) => ({
	columns: loanBurndown.get('columns'),
	data: loanBurndown.get('data'),
	inputColumn: loanBurndown.get('inputColumn'),
	inputColumnValid: loanBurndown.get('inputColumnValid'),
	outputColumn: loanBurndown.get('outputColumn'),
	outputColumnValid: loanBurndown.get('outputColumnValid'),
	validInputColumns: loanBurndown.get('validInputColumns'),
	validOutputColumns: loanBurndown.get('validOutputColumns'),
	unloadable: loanBurndown.get('unloadable'),
});

const mapDispatchToProps = dispatch => ({
	onInputClick: columnId => dispatch(chooseInputColumn(columnId)),
	onOutputClick: columnId => dispatch(chooseOutputColumn(columnId)),
});

class Controls extends React.Component {
	static displayName = 'Controls';

	static propTypes = {
		columns: PropTypes.object,
		data: PropTypes.object,
		inputColumn: PropTypes.string,
		inputColumnValid: PropTypes.bool,
		onInputClick: PropTypes.func,
		onOutputClick: PropTypes.func,
		outputColumn: PropTypes.string,
		outputColumnValid: PropTypes.bool,
		primaryColor: PropTypes.string,
		validInputColumns: PropTypes.object,
		validOutputColumns: PropTypes.object,
		unloadable: PropTypes.bool,
	};

	renderNothingSelectedDropdown = () => (
		<NothingSelected>No selection</NothingSelected>
	);

	render() {
		const {
			columns,
			inputColumn,
			inputColumnValid,
			outputColumn,
			outputColumnValid,
			onInputClick,
			onOutputClick,
			primaryColor,
			validInputColumns,
			validOutputColumns,
			unloadable,
		} = this.props;

		return (
			<div>
				<Dropdowns>
					<StyledDropdown
						value={
							columns.getIn([inputColumn, 'displayName']) ||
							this.renderNothingSelectedDropdown()
						}
						title="Date"
						accentColor={primaryColor}
						key="input"
						icon={
							inputColumnValid ? (
								<Icon path="/assets/domain.svg" />
							) : (
								<WarningIcon path="/assets/warning-filled.svg" />
							)
						}
						invalid={!inputColumnValid}
						disabled={unloadable}>
						{columns
							.map(column => (
								<MenuItem
									disabled={
										!validInputColumns.includes(column)
									}
									id={column.get('id')}
									key={column.get('id')}
									onClick={onInputClick}
									selected={
										columns.getIn([inputColumn, 'id']) ===
										column.get('id')
									}>
									{column.get('displayName')}
								</MenuItem>
							))
							.toArray()}
					</StyledDropdown>
					<StyledDropdown
						value={
							columns.getIn([outputColumn, 'displayName']) ||
							this.renderNothingSelectedDropdown()
						}
						title="Value"
						accentColor={primaryColor}
						key="output"
						icon={
							outputColumnValid ? (
								<Icon path="/assets/range.svg" />
							) : (
								<WarningIcon path="/assets/warning-filled.svg" />
							)
						}
						invalid={!outputColumnValid}
						disabled={unloadable}>
						{columns
							.map(column => (
								<MenuItem
									disabled={
										!validOutputColumns.includes(column)
									}
									id={column.get('id')}
									key={column.get('id')}
									onClick={onOutputClick}
									color={primaryColor}
									selected={
										columns.getIn([outputColumn, 'id']) ===
										column.get('id')
									}>
									{column.get('displayName')}
								</MenuItem>
							))
							.toArray()}
					</StyledDropdown>
				</Dropdowns>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
