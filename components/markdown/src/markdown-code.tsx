import styled from "styled-components";
import {Code} from "@patternplate/component-code";

export const MarkdownCode = styled(Code)`
  display: inline;
  padding: 0;
  background: ${props => props.theme.colors.backgroundSecondary};
  border-radius: 3px;
  font-size: 15.3px;
  line-height: 23px;
  padding: 3px;
`;
