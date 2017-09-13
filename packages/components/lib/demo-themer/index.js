'use strict';

var React = require('react');
var styled = require('styled-components').default;

var _require = require('styled-components'),
    ThemeProvider = _require.ThemeProvider;

var getThemes = require('../themes');

var themes = getThemes();

module.exports = Themer;

function Themer(props) {
	return React.createElement(
		StyledThemer,
		null,
		React.createElement(
			ThemeProvider,
			{ key: 'dark', theme: themes.dark },
			props.children
		),
		React.createElement(
			ThemeProvider,
			{ key: 'light', theme: themes.light },
			props.children
		)
	);
}

var StyledThemer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
//# sourceMappingURL=index.js.map