import styled from "styled-components";
import { Link } from "@patternplate/component-link";
import { Text } from "@patternplate/component-text";

const StyledHead = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
`;

export const StyledToggleHead = styled(StyledHead)`
  display: flex;
  align-items: center;
  height: 30px;
  font-weight: bold;
  color: ${props => props.theme.colors.color};
  padding: 3px 15px 3px 20px;
  box-sizing: border-box;
  border-top: 1px solid ${props => props.theme.colors.border};
  cursor: pointer;
`;

export const StyledArrow = styled(Text)<{ rotated: boolean; }>`
  font-size: 0.8em;
  transform: ${props => (props.rotated ? `rotate(0deg)` : `rotate(-90deg)`)};
`;
