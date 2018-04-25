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
	validColumns: loanBurndown.get('validColumns'),
});

class Controls extends React.Component {
	static displayName = 'Controls';

	static propTypes = {
		columns: PropTypes.object,
		data: PropTypes.object,
		primaryColor: PropTypes.string,
		validColumns: PropTypes.object,
	};

	renderNothingSelectedDropdown = () => (
		<NothingSelected>No selection</NothingSelected>
	);

	render() {
		const { columns, primaryColor, validColumns } = this.props;

		return (
			<React.Fragment>
				<StyledDropdown
					value={this.renderNothingSelectedDropdown()}
					title="Input"
					accentColor={primaryColor}
					key="input">
					{columns.map(column => (
						<MenuItem disabled={!validColumns.includes(column)}>
							{column}
						</MenuItem>
					))}
				</StyledDropdown>
				<StyledDropdown
					value={this.renderNothingSelectedDropdown()}
					title="Output"
					accentColor={primaryColor}
					key="output">
					{columns.map(column => (
						<MenuItem disabled={!validColumns.includes(column)}>
							{column}
						</MenuItem>
					))}
				</StyledDropdown>
			</React.Fragment>
		);
	}
}

export default connect(mapStateToProps)(Controls);
