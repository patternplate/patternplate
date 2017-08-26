import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function NavigationToolbar(props) {
	return (
		<StyledNavigationToolbar>
			{props.children}
		</StyledNavigationToolbar>
	);
}

NavigationToolbar.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element)
};

NavigationToolbar.defaultProps = {
	children: []
};

const StyledNavigationToolbar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 40px;
	padding: 10px 15px;
`;
