import * as React from "react";
import styled from "styled-components";
import { Headline } from "@patternplate/component-headline";
import { Icon, SIZES } from "@patternplate/component-icon";
import { Link } from "@patternplate/component-link";
import * as reactAddonsTextContent from "react-addons-text-content";

const ThemedIcon = styled(Icon)`
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  padding-right: 10px;
  fill: ${props => props.theme.colors.color};
  opacity: 0;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.color};
  text-decoration: none;
  &:hover ${ThemedIcon} {
    opacity: 1;
  }
`;

const StyledTarget = styled.div`
  width: 0;
  height: 0;
`;

const StyledHeadline = styled(Headline)`
  font-family: ${props => props.theme.fonts.headline};
`;

export interface MarkdownHeadlineProps {
  order: 1 | 2 | 3 | 4;
  className?: string;
  linkable?: boolean;
}

const InnerMarkdownHeadline: React.SFC<MarkdownHeadlineProps> = (props) => {
  const name = reactAddonsTextContent(props.children);

  const id = name
    .split(" ")
    .map(word => encodeURIComponent(word))
    .join("-")
    .toLowerCase();

  return (
    <StyledHeadline as={`h${props.order + 1}` as any} order={props.order} className={props.className} id={id}>
      {props.linkable ? (
        <MarkdownHeadlineLink name={name} id={id}>
          {props.children}
        </MarkdownHeadlineLink>
      ) : (
          props.children
        )}
    </StyledHeadline>
  );
}

export const MarkdownHeadline = styled(InnerMarkdownHeadline)`
  grid-column: first / span 12;
  position: relative;
  color: ${props => props.theme.colors.color};
  margin: 60px 0 16px 0;
  font-weight: 300;
  line-height: 1.25;
`;

function MarkdownHeadlineLink(props) {
  return (
    <StyledLink title={`Link to "${props.name}"`} hash={props.id}>
      <StyledTarget id={props.id} />
      <ThemedIcon symbol="link" size={SIZES.m} />
      {props.children}
    </StyledLink>
  );
}
