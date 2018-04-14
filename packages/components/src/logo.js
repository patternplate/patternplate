const React = require("react");
const styled = require("styled-components").default;

const Link = require("./link");
const Icon = require("./icon");
const svg = require("./svg");

const StyledLink = styled(Link)`
  display: block;
  margin: 0 auto;
  &:link,
  &:visited {
    color: ${props => props.theme.colors.active};
  }
`;

class Logo extends React.Component {
  render() {
    const { props } = this;

    if (props.source) {
      return (
        <div className={props.className}>
          <StyledLink
            dangerouslySetInnerHTML={{__html: props.source}}
            external="base"
            href="/"
            query={null}
            target="_self"
            >
            <div dangerouslySetInnerHTML={{__html: props.source}}/>
          </StyledLink>
        </div>
      );
    }

    return (
      <div className={props.className}>
        <StyledLink external="base" href="/" query={null} target="_self">
          <Icon symbol="patternplate" size="l"/>
        </StyledLink>
      </div>
    );
  }
}

module.exports = styled(Logo)`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 0;
  align-items: center;
  padding: 10px;
  background: ${props => props.theme.colors.backgroundSecondary};
`;
