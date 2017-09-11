const React = require('react');
const styled = require('styled-components').default;
const tag = require('tag-hoc');

const fonts = require('../fonts');

const FONTS = fonts();

module.exports = Text;

function Text(props) {
  return (
    <StyledText
      is={props.is}
      className={props.className}
    >
      {props.children}
    </StyledText>
  );
}

const StyledText = styled('div')`
  font-family: ${FONTS.default};
`;
