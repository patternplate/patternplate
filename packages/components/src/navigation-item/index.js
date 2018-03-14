const React = require("react");
const tag = require("tag-hoc").default;
const color = require("color");
const styled = require("styled-components").default;

const fonts = require("../fonts");
const Icon = require("../icon");
const Link = require("../link");

const FONTS = fonts();

class NavigationItem extends React.Component {
  constructor(...args) {
    super(...args);
    this.getRef = this.getRef.bind(this);
  }

  getRef(ref) {
    this.ref = ref;
  }

  componentDidMount() {
    if (this.props.active && this.ref) {
      setTimeout(() => {
        this.props.onScrollRequest({ target: this.ref, props: this.props });
      });
    }
  }

  componentWillUpdate(next) {
    if (this.props.type === "folder") {
      return;
    }
    if (next.active && this.ref) {
      this.props.onScrollRequest({ target: this.ref, props: next });
    }
  }

  render() {
    const { props } = this;
    const title = props.title || `Navigate to ${props.name} ${props.type}`;
    const symbol = props.active ? props.symbolActive : props.symbol;

    return (
      <StyledNavigationItem
        active={props.active}
        className={props.className}
        innerRef={this.getRef}
        type={props.type}
      >
        <StyledNavigationLink
          active={props.active}
          external={props.external}
          onClick={props.onClick}
          href={props.href}
          sticky={props.type === "folder" && props.active}
          type={props.type}
          title={title}
          nested={props.nested}
        >
          {symbol && (
            <StyledIcon active={props.active} size="m" symbol={symbol} />
          )}
          <StyledName>{props.name}</StyledName>
          {props.meta && (
            <StyledMeta active={props.active}>{props.meta}</StyledMeta>
          )}
        </StyledNavigationLink>
        {props.active && props.children}
      </StyledNavigationItem>
    );
  }
}

module.exports = NavigationItem;

const StyledIcon = styled(Icon)`
  flex: 0 0 auto;
  fill: ${props => props.theme.color};
  ${props => props.active && `fill: ${color(props.theme.active)}`};
  padding: 10px 0 10px 9px;
`;

const StyledName = styled.div`
  box-sizing: border-box;
  flex: 1 1 100%;
  padding: 10px;
`;

const StyledMeta = styled.div`
  flex: 1 0 auto;
  margin: 0 ${props => (props.active ? 6 : 10)}px 0 auto;
`;

const StyledNavigationItem = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-left: 1px;
`;

const LinkTag = tag(["active", "type"])(Link);

const StyledNavigationLink = styled(LinkTag)`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  align-items: center;
  text-decoration: none;
  font-size: ${props => props.theme.fontSize};
  line-height: 20px;
  font-family: ${FONTS.default};
  font-weight: ${props => props.theme.fontWeight};
  padding-left: ${props => props.nested ? 30 : 0}px;
  :link,
  :visited {
    color: ${props => props.theme.color};
    ${props => props.active && `color: ${color(props.theme.active)}`};
  }
`;
