const React = require('react');
const styled = require("styled-components").default;
const Icon = require('../icon');
const Link = require('../link');
const Text = require('../text');

const SIZES = {
  h1: 36,
  h2: 27,
  h3: 23,
  h4: 18,
  h5: 18,
  h6: 18
};

const ThemedIcon = styled(Icon)`
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  padding-right: 10px;
  fill: ${props => props.theme.color};
  opacity: 0;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.color};
  text-decoration: none;
  &:hover ${ThemedIcon} {
    opacity: 1;
  }
`;

const StyledTarget = styled.div`
  width: 0;
  height: 0;
`;

module.exports = styled(MarkdownHeadline)`
  position: relative;
  color: ${props => props.theme.color};
  font-size: ${props => SIZES[props.is]}px;
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
    <Text is={props.is} className={props.className} id={id}>
      {props.linkable ? (
        <MarkdownHeadlineLink name={children} id={id}>
          {props.children}
        </MarkdownHeadlineLink>
      ) : (
        props.children
      )}
    </Text>
  );
}

function MarkdownHeadlineLink(props) {
  return (
    <StyledLink title={`Link to "${props.name}"`} hash={props.id}>
      <StyledTarget id={props.id} />
      <ThemedIcon symbol="anchor" size="s" />
      {props.children}
    </StyledLink>
  );
}
