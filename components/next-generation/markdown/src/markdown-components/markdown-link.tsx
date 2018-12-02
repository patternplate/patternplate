import * as React from "react";
import styled from "styled-components";
import { Link } from "@patternplate/component-link";
import * as Url from "url";
import * as queryString from "query-string";

export const MarkdownLink = (props) => {
  const abs = absolute(props.href);
  const query = abs ? {} : queryString.parse(Url.parse(props.href).query);

  return (
    <StyledLink hint href={props.href} query={query}>
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
