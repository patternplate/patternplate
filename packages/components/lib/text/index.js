'use strict';

var React = require('react');
var styled = require('styled-components').default;

var fonts = require('../fonts');

var FONTS = fonts();

module.exports = Text;

function Text(props) {
	return React.createElement(
		StyledText,
		{ is: props.is, className: props.className },
		props.children
	);
}

var StyledText = styled('div')`font-family: ${FONTS.default};`;
//# sourceMappingURL=index.js.map