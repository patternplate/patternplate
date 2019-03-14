import styled from "styled-components";
import { Icon } from "@patternplate/component-icon";

export const StyledSearchField = styled.label`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 10px 15px;
`;

export const StyledIcon = styled(Icon)`
  flex-grow: 0;
  flex-shrink: 0;
  fill: ${props => props.theme.colors.color};
`;

export const StyledInput = styled.input`
  position: relative;
  z-index: 2;
  width: 100%;
  border: 0;
  border-radius: 0;
  background: transparent;
  font-size: 16px;
  color: ${props => props.theme.colors.color};
  padding: 0;
  appearance: none;
  border-radius: 0;
  border: none;
  :focus {
    outline: none;
  }
`;

export const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 0;
  margin-left: 10px;
`;

export const StyledInputSuggestion = styled(StyledInput).attrs({ readOnly: true })`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  opacity: 0.3;
`;
