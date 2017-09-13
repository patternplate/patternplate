'use strict';

var React = require('react');
var styled = require('styled-components').default;

var Code = require('../code');

module.exports = CodePane;

function CodePane(props) {
  return React.createElement(
    StyledCodePane,
    { className: props.className, hermit: props.hermit },
    React.createElement(
      StyledScrollbox,
      null,
      React.createElement(
        Code,
        { block: true, language: 'html' },
        props.source
      )
    )
  );
}

var BORDER_RADIUS = 10;

var StyledCodePane = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  &::before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: ${function (props) {
  return props.hermit ? `${BORDER_RADIUS}px` : `0 ${BORDER_RADIUS}px ${BORDER_RADIUS}px 0`;
}};
    background: ${function (props) {
  return props.theme.background;
}};
  }
`;

var StyledScrollbox = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
`;
//# sourceMappingURL=index.js.map