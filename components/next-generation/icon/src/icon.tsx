import * as React from "react";
import styled from "styled-components";
import * as Icons from "./icons";
import { Symbol } from "./symbol";

const SIZES = {
  s: "14px",
  m: "22px",
  l: "38px",
  text: ".8em"
};

export type IconSize = keyof typeof SIZES;
export type IconKey = keyof typeof Icons.icons;

export interface IconProps {
  className?: string;
  symbol: IconKey;
  size?: keyof typeof SIZES;
  title?: string;
  inline?: boolean;
}

const iconNames = Object.keys(Icons.icons);

export * from './symbol';
export { definitions } from './icons';

export const Icon: React.SFC<IconProps> = props => {
  const creator = typeof Icons.icons[props.symbol] === 'function'
    ? Icons.icons[props.symbol]
    : Icons.icons.placeholder;

  return (
    <StyledIcon
      className={props.className}
      size={props.size}
      inline={props.inline}
      title={props.title}
      viewBox="0 0 24 24"
    >
      <Symbol id={props.symbol} definition={creator()} />
    </StyledIcon>
  );
}

export const symbols = iconNames;

Icon.defaultProps = {
  size: "m",
  symbol: "placeholder"
};

const StyledIcon = styled.svg<{ inline?: boolean; size: IconSize; title?: string }>`
  display: ${props => (props.inline ? "inline-flex" : "flex")};
  flex-shrink: 0;
  width: ${props => SIZES[props.size]};
  height: ${props => SIZES[props.size]};
  justify-content: center;
  align-items: center;
  color: inherit;
  fill: currentColor;
`;
