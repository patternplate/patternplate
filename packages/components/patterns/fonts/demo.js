const lorem = require("lorem-ipsum");
const React = require("react");
const styled = require("styled-components").default;
const fonts = require("Pattern");

module.exports = FontsDemo;

const FONTS = fonts();

function FontsDemo() {
  return (
    <div>
      <FontFace name="Default" face={FONTS.default} />
    </div>
  );
}

function FontFace(props) {
  return (
    <StyledParagraph face={props.face}>
      <StyledName>{props.name}</StyledName>
      {lorem({ count: 2, units: "sentences" })}
    </StyledParagraph>
  );
}

const StyledName = styled.div`
  font-weight: bold;
  font-family: sans-serif;
`;

const StyledParagraph = styled.div`
  font-family: ${props => props.face};
`;
