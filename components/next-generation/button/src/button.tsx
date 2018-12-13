import * as React from "react";
import styled, { css } from "styled-components";
import tag from "tag-hoc";
import { Icon, IconKey } from "@patternplate/component-icon";
import * as Link from "@patternplate/component-link";

const InnerButton: React.SFC<ButtonProps> = props => {
  const { className, title, onClick, external, href, type, symbol, children } = props;
  const OuterElement = type === ButtonTypes.link
    ? tag(["external", "type"])(Link)
    : tag(["external"])("button");

  return (
    <OuterElement
      className={className}
      title={title}
      onClick={onClick}
      external={external}
      href={href}
      type={type}
    >
      {children && <StyledLabel>{children}</StyledLabel>}
      {symbol && <StyledIcon symbol={symbol} />}
    </OuterElement>
  );
};



const StyledLabel = styled.span`
  font-family: ${props => props.theme.fonts.default};
`;

const StyledIcon = styled(Icon)`
  &:not(:first-child) {
    margin-left: 5px;
  }
`;

export enum ButtonTypes {
  "button",
  "link"
}

export interface ButtonProps {
  symbol?: IconKey;
  id?: string;
  className?: string;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  external?: boolean;
  href?: string;
  type?: ButtonTypes;
  frameless?: boolean;
  transparent?: boolean;
}

export const Button = styled(InnerButton)`
  appearance: none;
  display: inline-flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: none;
  outline: 0;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.color};
  font: inherit;
  box-sizing: border-box;
  vertical-align: top;
  ${props => props.frameless && css`
    padding: 4px;
    border: 1px solid currentColor;
  `};
  background: ${props => props.transparent && 'transparent'}
`;

Button.defaultProps = {
  type: ButtonTypes.button
};
