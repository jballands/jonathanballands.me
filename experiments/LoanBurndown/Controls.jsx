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
import CheckboxItem from '@jballands/vespyr/lib/CheckboxItem';
import BoldButton from '@jballands/vespyr/lib/BoldButton';

import {
	chooseInputColumn,
	chooseOutputColumn,
	extrapolate,
	loadCSV,
} from './actions';

const Options = styled.div`
	display: flex;
	flex-flow: row;
	align-items: center;

	> div + div {
		margin-left: 25px;
	}

	& + & {
		margin-top: 25px;
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

const UploadCSV = styled(BoldButton)`
	font-size: 16px;
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
	extrapolate: loanBurndown.get('extrapolate'),
	problems: loanBurndown.get('problems'),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	onInputClick: columnId => dispatch(chooseInputColumn(columnId)),
	onOutputClick: columnId => dispatch(chooseOutputColumn(columnId)),
	loadCSV: file => dispatch(loadCSV(file)),
	dispatch,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
	...stateProps,
	...dispatchProps,
	...ownProps,
	onExtrapolateClick: () => {
		return dispatchProps.dispatch(extrapolate(!stateProps.extrapolate));
	},
});

class Controls extends React.Component {
	static displayName = 'Controls';

	static propTypes = {
		columns: PropTypes.object,
		data: PropTypes.object,
		extrapolate: PropTypes.bool,
		inputColumn: PropTypes.string,
		inputColumnValid: PropTypes.bool,
		loadCSV: PropTypes.func,
		onExtrapolateClick: PropTypes.func,
		onInputClick: PropTypes.func,
		onOutputClick: PropTypes.func,
		outputColumn: PropTypes.string,
		outputColumnValid: PropTypes.bool,
		primaryColor: PropTypes.string,
		problems: PropTypes.array,
		validInputColumns: PropTypes.object,
		validOutputColumns: PropTypes.object,
		unloadable: PropTypes.bool,
	};

	uploadCSVRef = null;

	bindUploadCSVRef = node => (this.uploadCSVRef = node);

	onUploadCSVClick = () => {
		if (this.uploadCSVRef) {
			this.uploadCSVRef.click();
		}
	};

	onCSVChosen = e => {
		this.props.loadCSV(e.target.files[0]);
	};

	renderNothingSelectedDropdown = () => (
		<NothingSelected>No selection</NothingSelected>
	);

	render() {
		const {
			columns,
			extrapolate,
			inputColumn,
			inputColumnValid,
			outputColumn,
			outputColumnValid,
			onExtrapolateClick,
			onInputClick,
			onOutputClick,
			primaryColor,
			problems,
			validInputColumns,
			validOutputColumns,
			unloadable,
		} = this.props;

		return (
			<div>
				<input
					type="file"
					accept=".csv"
					onChange={this.onCSVChosen}
					ref={this.bindUploadCSVRef}
					style={{ visibility: 'hidden' }}
				/>
				<Options>
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
				</Options>
				<Options>
					<UploadCSV
						onClick={this.onUploadCSVClick}
						accentColor={primaryColor}>
						Choose New .CSV
					</UploadCSV>
					<CheckboxItem
						accentColor={primaryColor}
						id="project"
						onClick={onExtrapolateClick}
						selected={extrapolate}
						disabled={problems.size > 0 || unloadable}>
						Show estimated loan completion
					</CheckboxItem>
				</Options>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps,
)(Controls);
