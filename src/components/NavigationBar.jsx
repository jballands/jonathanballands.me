//
//	jballands/jonathanballands.me
//	NavigationBar.jsx
//
//	© 2017 Jonathan Ballands
//

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavigationBarItem from 'components/NavigationBarItem';

const NavigationBarContainerContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #24292e;
	height: 70px;
	padding: 0px 20px;
	width: calc(100% - 40px);
`;

const NavigationBarTitle = styled.span`
	font-family: Hero;
	text-transform: uppercase;
	font-size: 20px;
	letter-spacing: 1px;
	color: white;
`;

const NavigationBarList = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const mapStateToProps = ({ kinesis }) => ({
	currentKinesisEntryId: kinesis.getIn(['selectedEntry', 'id']),
});

class NavigationBar extends React.Component {
	static displayName = 'NavigationBar';

	static propTypes = {
		currentKinesisEntryId: PropTypes.string,
		location: PropTypes.object,
	};

	render() {
		const { location } = this.props;

		return (
			<NavigationBarContainerContainer>
				<Link to="/">
					<NavigationBarTitle>Jonathan Ballands</NavigationBarTitle>
				</Link>

				<NavigationBarList>
					<NavigationBarItem link="/" location={location}>
						Hello
					</NavigationBarItem>
					<NavigationBarItem link="/kinesis" location={location}>
						Kinesis
					</NavigationBarItem>
					<NavigationBarItem
						link="https://github.com/jballands/vespyr"
						location={location}
						external>
						Vespyr
					</NavigationBarItem>
				</NavigationBarList>
			</NavigationBarContainerContainer>
		);
	}
}

export default connect(mapStateToProps)(NavigationBar);
