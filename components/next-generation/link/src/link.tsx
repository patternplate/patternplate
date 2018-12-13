import * as React from "react";
import styled from "styled-components";
import { inject } from "@patternplate/component-utility";
import { Icon, SIZES } from "@patternplate/component-icon";

export interface LinkProps {
  className?: string;
  href: string;
  title?: string;
  grow?: boolean;
  external?: boolean;
  hint?: boolean;
  iconSize: SIZES;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onHover?: React.MouseEventHandler<HTMLElement>;
}

export class RawLink extends React.Component<LinkProps> {
  public render(): JSX.Element | null {
    const { props } = this;
    const target = selectTarget(props);

    return (
      <a
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : null}
        className={props.className}
        href={props.href}
        onClick={props.onClick}
        onMouseOver={props.onHover}
        title={props.title}
        data-id={props["data-id"]}
      >
        <StyledLinkContainer grow={props.grow} external={props.external}>
          <StyledLinkLabel grow={props.grow}>{props.children}</StyledLinkLabel>
          {props.external && props.hint && (
            <Icon
              symbol="external-link"
              size={props.iconSize || SIZES.text}
              inline
            />
          )}
        </StyledLinkContainer>
      </a>
    );
  }
}

export const Link = inject(RawLink);

const StyledLinkContainer = styled.span<{ grow?: boolean; external?: boolean; }>`
  display: inline-flex;
  align-items: center;
  flex-grow: ${props => props.grow ? 1 : 0};
  > span {
    display: inline-flex;
    align-items: ${props => props.external ? 'baseline' : 'center'};
  }
  > svg {
    margin-left: .25em;
  }
`;

const StyledLinkLabel = styled.span<{ grow?: boolean }>`
  width: ${props => props.grow ? 'calc(100% - 40px)' : 'auto'};
`;

function selectTarget(props) {
  if (props.target) {
    return props.target;
  }
  return props.external ? "_blank" : null;
};
