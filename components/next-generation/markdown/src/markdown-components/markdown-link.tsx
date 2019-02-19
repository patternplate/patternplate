import * as React from "react";
import styled from "styled-components";
import { Link } from "@patternplate/component-link";
import * as Path from "path";
import * as Url from "url";
import * as queryString from "query-string";

function replaceExt(href, ext) {
  const parsed = Url.parse(href);

  if (typeof parsed.pathname === "string" && parsed.pathname !== "/") {
    parsed.pathname = [
      Path.dirname(parsed.pathname),
      `${Path.basename(parsed.pathname, Path.extname(parsed.path))}${ext}`
    ].join("/");
  }

  return Url.format(parsed);
}

export const MarkdownLink = (props) => {
  const abs = absolute(props.href);
  const query = abs ? {} : queryString.parse(Url.parse(props.href).query);

  const href = props.contentType === "pattern" ? replaceExt(props.href, ".html") : props.href;

  return (
    <StyledLink hint href={href} query={query}>
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
