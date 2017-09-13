'use strict';

var React = require('react');
var styled = require('styled-components').default;
var text = require('react-addons-text-content');
var fonts = require('../fonts');

var FONTS = fonts();

module.exports = Flag;

function Flag(props) {
	return React.createElement(
		StyledText,
		{ className: props.className },
		props.children
	);
}

var StyledText = styled.span`
	display: inline-block;
	padding: 2px 4px;
	border: 1px solid ${function (props) {
	return props.theme.border;
}};
  border-radius: 3px;
  font-family: ${FONTS.default};
	${function (props) {
	var color = getFlagColor(text(props.children), props.theme);
	return `
			border-color: ${color};
			color: ${color};
		`;
}}
`;

function getFlagColor(flag, theme) {
	switch (flag) {
		case 'alpha':
			return theme.error;
		case 'beta':
			return theme.warning;
		case 'rc':
			return theme.info;
		case 'stable':
			return theme.success;
		case 'deprecated':
			return theme.error;
		default:
			return theme.error;
	}
}
//# sourceMappingURL=index.js.map