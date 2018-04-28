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
import DropdownMenu from '@jballands/vespyr/lib/DropdownMenu';
import MenuItem from '@jballands/vespyr/lib/MenuItem';

import { chooseInputColumn, chooseOutputColumn } from './actions';

const Dropdowns = styled.div`
	& > * + & > * {
		margin-left: 15px;
	}
`;

const StyledDropdown = styled(DropdownMenu)`
	line-height: normal;
`;

const NothingSelected = styled.div`
	opacity: 0.4;
	font-style: italic;
`;

const mapStateToProps = ({ loanBurndown }) => ({
	columns: loanBurndown.get('columns'),
	data: loanBurndown.get('data'),
	inputColumn: loanBurndown.get('inputColumn'),
	outputColumn: loanBurndown.get('outputColumn'),
	validColumns: loanBurndown.get('validColumns'),
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
		onInputClick: PropTypes.func,
		onOutputClick: PropTypes.func,
		outputColumn: PropTypes.string,
		primaryColor: PropTypes.string,
		validColumns: PropTypes.object,
	};

	renderNothingSelectedDropdown = () => (
		<NothingSelected>No selection</NothingSelected>
	);

	render() {
		const {
			columns,
			inputColumn,
			outputColumn,
			onInputClick,
			onOutputClick,
			primaryColor,
			validColumns,
		} = this.props;

		return (
			<div>
				<Dropdowns>
					<StyledDropdown
						value={
							columns.getIn([inputColumn, 'displayName']) ||
							this.renderNothingSelectedDropdown()
						}
						title="Input"
						accentColor={primaryColor}
						key="input">
						{columns
							.map(column => (
								<MenuItem
									disabled={!validColumns.includes(column)}
									id={column.get('id')}
									key={column.get('id')}
									onClick={onInputClick}>
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
						title="Output"
						accentColor={primaryColor}
						key="output">
						{columns
							.map(column => (
								<MenuItem
									disabled={!validColumns.includes(column)}
									id={column.get('id')}
									key={column.get('id')}
									onClick={onOutputClick}>
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
