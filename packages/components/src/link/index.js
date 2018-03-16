const React = require("react");
const styled = require("styled-components").default;
const Icon = require("../icon");
const inject = require("../injection").inject;

class Link extends React.Component {
  constructor(...args) {
    super(...args);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (typeof this.props.onClick === "function") {
      this.props.onClick(e);
    }
  }

  render() {
    const { props } = this;
    const target = selectTarget(props);
    return (
      <a
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : null}
        className={props.className}
        href={props.href}
        onClick={this.handleClick}
        onMouseOver={props.onHover}
        title={props.title}
        data-id={props["data-id"]}
      >
        <StyledLinkContainer grow={props.grow} external={props.external}>
          <StyledLinkLabel grow={props.grow}>{props.children}</StyledLinkLabel>
          {props.external && props.hint && (
            <Icon
              symbol="external-link"
              size={props.iconSize || "text"}
              inline
              />
          )}
        </StyledLinkContainer>
      </a>
    );
  }
}

module.exports = inject(Link);
module.exports.RawLink = Link;

Link.defaultProps = {
  external: false,
  onHover: () => {}
};

const StyledLinkContainer = styled.span`
  display: inline-flex;
  align-items: center;
  flex-grow: ${props => props.grow ? 1 : 0};
  > span {
    display: inline-flex;
    align-items: ${props => props.external ? 'baseline': 'center'};
  }
  > svg {
    margin-left: .25em;
  }
`;

const StyledLinkLabel = styled.span`
  width: ${props => props.grow ? 'calc(100% - 40px)' : 'auto'};
`;

function selectTarget(props) {
  if (props.target) {
    return props.target;
  }
  return props.external ? "_blank" : null;
};
