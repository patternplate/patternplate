import * as React from "react";
import styled from "styled-components";
import * as Url from "url";
import * as queryString from "query-string";
import { Link } from "@patternplate/component-link";

export const MarkdownLink = (props) => {
  const parsed = Url.parse(props.href || "./");
  const abs = absolute(props.href);
  const href = abs ? props.href : [parsed.pathname, parsed.hash].join("");
  const query = abs ? {} : queryString.parse(parsed.query);

  return (
    <StyledLink external={abs} hint href={href} query={query}>
      {props.children}
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.colors.color};
  text-decoration: none;
  &:link,
  &:visited {
    color: ${props => props.theme.colors.active};
  }
  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

function absolute(href) {
  const parsed = Url.parse(href || "./");
  if (parsed.protocol) {
    return true;
  }
  if (href.startsWith("/api/static/")) {
    return true;
  }
}
