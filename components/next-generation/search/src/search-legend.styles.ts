import styled from "styled-components";
import { Link } from "@patternplate/component-link";
import { Text } from "@patternplate/component-text";

export const StyledSearchLegend = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 0 15px;
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.border};
  ${props => withTint(props)};
`;

export const StyledSearchLegendBox = styled.div`
  display: flex;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  position: relative;
  z-index: 1;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledField = styled(Text)`
  padding: 0 10px;
  color: ${props => props.theme.colors.color};
  &:first-child {
    padding-left: 0;
  }
`;

export const StyledLegendName = styled(StyledField)`
  padding-right: 20px;
  font-weight: bold;
  color: ${props => props.theme.colors.color};
  position: relative;
  z-index: 1;
`;

export const StyledFieldLink = styled(Link)`
  white-space:nowrap;
  &:link,
  &:active,
  &:visited,
  &:hover {
    color: ${props => props.theme.colors.color}
  }
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
