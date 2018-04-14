const React = require('react');
const styled = require("styled-components").default;

const Headline = require("../headline");
const Icon = require('../icon');
const Link = require('../link');

const ORDER = {
  h1: 1,
  h2: 2,
  h3: 3,
  h4: 4,
  h5: 4,
  h6: 4
};

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

module.exports = styled(MarkdownHeadline)`
  position: relative;
  color: ${props => props.theme.colors.color};
  margin: 60px 0 16px 0;
  font-weight: 300;
  line-height: 1.25;
`;

function MarkdownHeadline(props) {
  const children = Array.isArray(props.children)
    ? props.children.join("")
    : props.children;
  const id = encodeURIComponent(
    (children || "")
      .split(" ")
      .join("-")
      .toLowerCase()
  );

  return (
    <StyledHeadline is={props.is} order={ORDER[props.is]} className={props.className} id={id}>
      {props.linkable ? (
        <MarkdownHeadlineLink name={children} id={id}>
          {props.children}
        </MarkdownHeadlineLink>
      ) : (
        props.children
      )}
    </StyledHeadline>
  );
}

function MarkdownHeadlineLink(props) {
  return (
    <StyledLink title={`Link to "${props.name}"`} hash={props.id}>
      <StyledTarget id={props.id} />
      <ThemedIcon symbol="link" size="m" />
      {props.children}
    </StyledLink>
  );
}
