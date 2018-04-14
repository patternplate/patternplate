const styled = require("styled-components").default;

module.exports = styled.hr`
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: ${props => props.theme.colors.border};
  border: 0;
`;
