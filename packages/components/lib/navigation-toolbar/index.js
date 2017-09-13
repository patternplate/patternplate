'use strict';

var React = require('react');
var styled = require('styled-components').default;

module.exports = NavigationToolbar;

function NavigationToolbar(props) {
	return React.createElement(
		StyledNavigationToolbar,
		null,
		props.children
	);
}

NavigationToolbar.defaultProps = {
	children: []
};

var StyledNavigationToolbar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 40px;
  padding: 10px 15px;
  background-color: ${function (props) {
	return props.theme.backgroundSecondary;
}};
  box-sizing: 'border-box';
`;
//# sourceMappingURL=index.js.map