import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";
import { uniq } from "lodash";
import * as withSideEffect from "react-side-effect";
import * as Icons from "./icons";
import { IconRegistry } from "./registry";

const SIZES = {
  s: "14px",
  m: "22px",
  l: "38px",
  text: ".8em"
};

export interface IconProps {
  symbol: keyof typeof Icons.icons;
  size?: keyof typeof SIZES;
  title?: string;
  inline?: boolean;
}

const iconNames = Object.keys(Icons.icons);

export * from './symbol';

export const Icon: React.SFC<IconProps> = withSideEffect(toState, onChange)(InnerIcon);

export const symbols = iconNames;

function toState(propsList: { symbol: keyof typeof Icons.icons }[]): React.ReactNode {
  const list = propsList.map(item => item.symbol).sort();
  const symbols = uniq(list);
  return <IconRegistry symbols={symbols} />;
}

function onChange(registry) {
  const element = getRegistryMountPoint();
  ReactDOM.render(registry, element);
}

function getRegistryMountPoint() {
  if (typeof window === "undefined") {
    return;
  }

  const found = document.querySelector("[data-icon-registry]");
  if (found) {
    return found;
  }

  const created = document.createElement("div");
  created.setAttribute("data-icon-registry", "true");
  document.body.appendChild(created);
  return created;
}

function InnerIcon(props) {
  return (
    <StyledIcon
      className={props.className}
      size={props.size}
      inline={props.inline}
      title={props.title}
    >
      <use xlinkHref={`#${props.symbol || "placeholder"}`} />
    </StyledIcon>
  );
}

Icon.defaultProps = {
  size: "m",
  symbol: "placeholder"
};

const StyledIcon = styled.svg<{ inline?: boolean; size: keyof typeof SIZES; title?: string }>`
  display: ${props => (props.inline ? "inline-flex" : "flex")};
  flex-shrink: 0;
  width: ${props => SIZES[props.size]};
  height: ${props => SIZES[props.size]};
  justify-content: center;
  align-items: center;
  color: inherit;
  fill: currentColor;
`;
