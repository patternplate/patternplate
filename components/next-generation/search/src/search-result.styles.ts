import styled from "styled-components";
import { Link } from "@patternplate/component-link";
import { Text } from "@patternplate/component-text";

export interface StyledResultLinkTextProps {
  active: boolean;
}

export const StyledResult = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  &:hover {
    mask-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 75px,
      rgba(0, 0, 0, 1) 125px
    );
    -webkit-mask-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 75px,
      rgba(0, 0, 0, 1) 125px
    );
  }
  &:hover {
    opacity: 1;
  }
`;

export const StyledResultLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
  &:link,
  &:visited,
  &:active {
    color: ${props =>
      props.active ? props.theme.colors.active : props.theme.colors.color};
    text-decoration: none;
  }
`;

export const StyledResultLinkText = styled(Text)<StyledResultLinkTextProps>`
  line-height: 20px;
  color: ${props =>
    props.active ? props.theme.colors.active : props.theme.colors.color};
  text-decoration: none;
`;

export const StyledPreviewLink = styled(Link)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  text-decoration: none;
  color: ${props => props.theme.colors.border};
  opacity: 0;
  &:hover {
    color: ${props => props.theme.colors.color};
    text-decoration: underline;
  }
`;
