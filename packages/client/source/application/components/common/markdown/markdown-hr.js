import { styled } from "@patternplate/components";

export default styled.hr`
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: ${props => props.theme.border};
  border: 0;
`;
