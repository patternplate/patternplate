import styled from "styled-components";
import { Icon } from "@patternplate/component-icon";
import * as C from './search.constants';

export interface StyledFormBoxProps {
  inline: boolean;
  enabled: boolean;
}

export interface StyledIconProps {
  active: boolean;
}

export const StyledResults = styled.div`
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  max-height: calc(
    ${C.SEARCH_HEIGHT} - ${C.SEARCH_FIELD_HEIGHT} - ${C.SEARCH_LEGEND_HEIGHT}
  );
`;

export const StyledFormBox = styled.div<StyledFormBoxProps>`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  pointer-events: all;
  overflow: hidden;
  margin: ${props => (props.inline ? "calc(12.5vh - 30px) 0 60px 0" : "0")};
  opacity: ${props => (props.inline && props.enabled ? "0" : "1")};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  width: 100%;
  max-height: ${C.SEARCH_HEIGHT};
  ${props => withTint(props)};
`;

export const StyledResultList = styled.div`
  flex: 1 0 40%;
  overflow: scroll;
  -webkit-touch-scroll: auto;
  border-right: 1px solid ${props => props.theme.colors.border};
`;

export const StyledIcon = styled(Icon)<StyledIconProps>`
  flex: 0 0 auto;
  fill: ${props =>
    props.active ? props.theme.colors.active : props.theme.colors.color};
  margin-right: 10px;
`;

function withTint(props) {
  return `
		&::before {
			content: '';
			position: absolute;
			z-index: 0;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: ${props.theme.colors.background};
			opacity: 0.975;
		}
	`;
}
