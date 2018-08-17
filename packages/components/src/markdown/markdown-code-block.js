const React = require('react');
const textContent = require('react-addons-text-content');
const styled = require("styled-components").default;
const Code = require('../code');

module.exports = MarkdownCodeBlock;

const StyledMarkdownCodeBlock = styled.div`
  border-radius: 3px;
  font-size: 15.3px;
  line-height: 23px;
  padding: 0 16px;
  margin-bottom: 16px;
  background: ${props => props.theme.colors.backgroundSecondary};
  overflow: hidden;
`;

function MarkdownCodeBlock(props) {
  const code = textContent(props.children);
  return (
    <StyledMarkdownCodeBlock>
      <Code
        block
        language={props.language}
        highlights={props.highlights}
        height={17}
        >
        {code}
      </Code>
    </StyledMarkdownCodeBlock>
  );
}
