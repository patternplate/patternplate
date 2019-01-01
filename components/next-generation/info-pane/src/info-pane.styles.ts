import styled from "styled-components";
import { Code } from "@patternplate/component-code";
import { Tag } from "@patternplate/component-tag";
import { Text } from "@patternplate/component-text";
import * as C from "./info-pane.constants";

export interface StyledInfoPaneProps {
  hermit: boolean;
}

export const StyledInfoPane = styled.div<StyledInfoPaneProps>`
  position: relative;
  width: 300px;
  min-height: 300px;
  height: 100%;
  box-sizing: border-box;
  border-radius: ${props =>
    props.hermit
      ? `${C.BORDER_RADIUS}px`
      : `${C.BORDER_RADIUS}px 0 0 ${C.BORDER_RADIUS}px`};
  border-right: 1px solid ${props => props.theme.colors.border};
  border-right-width: ${props => (props.hermit ? 0 : 1)}px;
  overflow: scroll;
  overflow-x: hidden;
  background: ${props => props.theme.colors.background};
`;

export const StyledInnerPane = styled.div`
  position: relative;
  z-index: 1;
  background: ${props => props.theme.colors.background};
`;

export const StyledName = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 15px 0 15px;
`;

export const StyledToolbar = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0 15px 10px 15px;
`;

export const StyledDisplayName = styled(Text)`
  flex: 1 0 auto;
  color: ${props => props.theme.colors.color};
  margin-right: 10px;
`;

export const StyledId = styled(Text)`
  flex: 0 1 auto;
  color: ${props => props.theme.colors.recess};
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StyledData = styled.table`
  position: relative;
  z-index: 1;
  flex: 0 0 auto;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const StyledDataCell = styled.td`
  box-sizing: border-box;
  height: 30px;
  padding: 4px 6px;
  border-top: 1px solid ${props => props.theme.colors.border};
  &:first-child {
    padding-left: 20px;
  }
  &:last-child {
    text-align: right;
    padding-right: 15px;
  }
`;

export const StyledKey = styled(Text)`
  font-weight: bold;
  color: ${props => props.theme.colors.color};
`;

export const StyledTag = styled(Tag)`
  display: inline-block;
  padding: 2px 4px;
  margin-top: 1.5px;
  margin-bottom: 1.5px;
  border: 1px solid ${props => props.theme.colors.color};
  border-radius: 3px;
  &:link,
  &:visited,
  &:active {
    text-decoration: none;
    color: ${props => props.theme.colors.color};
  }
  &:nth-child(2n) {
    margin-left: 3px;
  }
`;

export const StyledCode = styled(Code)`
  width: 100%;
`;
