'use strict';

var React = require('react');
var styled = require('styled-components').default;
var fonts = require('../fonts');
var Icon = require('../icon');

var FONTS = fonts();

module.exports = MainHeader;

function MainHeader(props) {
	var icon = props.image ? props.image : React.createElement(StyledHeaderLogo, { symbol: 'patternplate', size: 'l' });

	return React.createElement(
		StyledMainHeader,
		{
			className: props.className,
			title: props.title
		},
		icon,
		props.title && React.createElement(
			StyledTitle,
			null,
			props.title
		)
	);
}

var StyledMainHeader = styled.div`
	width: 100%;
	height: auto;
  color: ${function (props) {
	return props.theme.color;
}};
  background-color: ${function (props) {
	return props.theme.backgroundSecondary;
}};
	${function (props) {
	return !props.image && `
		display: flex;
		padding: 10px 15px;
		color: ${props.theme.active};
		align-items: center;
		justify-content: center;
	`;
}}
`;

var StyledHeaderLogo = styled(Icon)`
	fill: currentColor;
	stroke: currentColor;
	stroke-width: 0;
	${function (props) {
	return props.title && `
		margin-right: 5px;
	`;
}}
`;

var StyledTitle = styled.span`
  font-family: ${FONTS.default};
`;
//# sourceMappingURL=index.js.map