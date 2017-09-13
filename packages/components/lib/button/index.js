'use strict';

var React = require('react');
var styled = require('styled-components').default;
var tag = require('tag-hoc').default;

var fonts = require('../fonts');
var Icon = require('../icon');
var Link = require('../link');

var FONTS = fonts();

var buttonTypes = ['button', 'submit', 'link'];

function Button(props) {
  var OuterElement = props.type === 'link' ? tag(['external', 'type'])(Link) : tag(['external'])('button');

  return React.createElement(
    OuterElement,
    {
      className: props.className,
      title: props.title,
      onClick: props.onClick,
      external: props.external,
      href: props.href,
      type: props.type
    },
    props.children && React.createElement(
      StyledLabel,
      null,
      props.children
    ),
    props.symbol && React.createElement(StyledIcon, {
      symbol: props.symbol
    })
  );
}

Button.defaultProps = {
  type: 'button'
};

function OuterElement(props) {
  if (props.type === 'link') {
    return React.createElement(Link, null);
  }
}

var StyledLabel = styled.span`
  font-family: ${FONTS.default};
`;

var FRAME = function FRAME(props) {
  return !props.frameless && `
  padding: 4px;
  border: 1px solid currentColor;
`;
};

var TRANSPARENCY = function TRANSPARENCY(props) {
  return props.transparent && `
  background: transparent;
`;
};

var StyledButton = styled(Button)`
  appearance: none;
  display: inline-flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: none;
  outline: 0;
  background: ${function (props) {
  return props.theme.background;
}};
  color: ${function (props) {
  return props.theme.color;
}};
  font: inherit;
  box-sizing: border-box;
  vertical-align: top;
  ${FRAME}
  ${TRANSPARENCY}
`;

var StyledIcon = styled(Icon)`
  &:not(:first-child) {
    margin-left: 5px;
  }
`;

module.exports = StyledButton;
//# sourceMappingURL=index.js.map