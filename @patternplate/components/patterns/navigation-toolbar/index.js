const React = require('react');
const styled = require('styled-components').default;

module.exports = NavigationToolbar;

function NavigationToolbar(props) {
	return (
		<StyledNavigationToolbar>
			{props.children}
		</StyledNavigationToolbar>
	);
}

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
