const React = require("react");
const styled = require("styled-components").default;
const fonts = require(".");

module.exports.default = FontsDemo;

const FONTS = fonts();

function FontsDemo() {
  return (
    <div>
      <FontFace name="Default" face={FONTS.default} />
      <FontFace name="Code" face={FONTS.code} />
    </div>
  );
}

function FontFace(props) {
  return (
    <StyledParagraph face={props.face}>
      <StyledName>{props.name}</StyledName>
      Sit elit laboris quis exercitation exercitation eu aliquip mollit aliquip
      est tempor nostrud. Ad mollit sint esse pariatur ex est ipsum culpa elit
      eu ipsum irure enim esse.
    </StyledParagraph>
  );
}

const StyledName = styled.div`
  font-weight: bold;
  font-family: sans-serif;
`;

const StyledParagraph = styled.div`
  font-family: ${props => props.face};
  padding: 15px;
  max-width: 60ch;
`;
