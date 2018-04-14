const React = require('react');
const styled = require('styled-components').default;

const url = require('url');
const queryString = require('query-string');
const Link = require('../link');

module.exports = MarkdownLink;

function MarkdownLink(props) {
  const parsed = url.parse(props.href || "./");
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
  const parsed = url.parse(href || "./");
  if (parsed.protocol) {
    return true;
  }
  if (href.startsWith("/api/static/")) {
    return true;
  }
}
