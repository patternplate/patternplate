const React = require("react");
const styled = require("styled-components").default;
const fonts = require("../fonts");
const Link = require("../link");
const Header = require("../main-header");
const NavigationTree = require("../navigation-tree");
const NavigationToolbar = require("../navigation-toolbar");

const FONTS = fonts();

class Navigation extends React.Component {
  constructor(...args) {
    super(...args);
    this.getRef = this.getRef.bind(this);
    this.handleScrollRequest = this.handleScrollRequest.bind(this);
  }

  handleScrollRequest(e) {
    if (!this.ref || !e.target) {
      return;
    }

    const item = e.target.getBoundingClientRect();
    const list = this.ref.getBoundingClientRect();
    const pad = getPadding(this.ref);

    if (item.bottom > list.bottom - pad("bottom")) {
      this.ref.scrollTop =
        e.target.offsetTop - list.height + pad("bottom") + 60 + item.height;
      return;
    }

    if (item.top < list.top + 90 + pad("top")) {
      this.ref.scrollTop = e.target.offsetTop + pad("top") - 90;
    }
  }

  getRef(ref) {
    this.ref = ref;
  }

  render() {
    const { props } = this;
    const children = React.Children.toArray(props.children);
    const toolbar = children.find(child => child.type === NavigationToolbar);
    const header = children.find(child => child.type === NavigationHeader);

    return (
      <StyledNavigation onKeyDown={this.handleKeyDown}>
        <StyledNavigationTree innerRef={this.getRef}>
          {header ? (
            header
          ) : (
            <StyledHeader
              title={props.applicationTitle}
              symbol="patternplate"
            />
          )}
          {props.docs.children.length > 0 &&
            <Documentation
              active={props.active}
              docs={props.docs}
              onItemClick={props.onItemClick}
              onScrollRequest={this.handleScrollRequest}
              />
          }
          {
            props.navigation.children.length > 0 && (
              <React.Fragment>
                <NavigationLabel
                  enabled={props.patternsEnabled}
                  name="patterns">
                  Patterns
                </NavigationLabel>
                {
                  props.patternsEnabled &&
                    <NavigationTree
                      active={props.active}
                      data={props.navigation.children}
                      onItemClick={props.onItemClick}
                      onScrollRequest={this.handleScrollRequest}
                      prefix="/pattern"
                      />
                }
              </React.Fragment>
            )
          }
        </StyledNavigationTree>
        {toolbar && (
          <StyledNavigationToolbar>{toolbar}</StyledNavigationToolbar>
        )}
      </StyledNavigation>
    );
  }
}

module.exports = Navigation;
module.exports.NavigationToolbar = NavigationToolbar;
module.exports.NavigationHeader = NavigationHeader;

Navigation.defaultProps = {
  tools: []
};

function NavigationLabel(props) {
  return (
    <StyledLabel>
      {props.children}
      <StyledLabelLink
        query={{[`${props.name}-enabled`]: !props.enabled}}
        title={`${props.enabled ? 'Close' : 'Expand'} ${props.children} list`}
        >
        {props.enabled ? '▼' : '◀'}
      </StyledLabelLink>
    </StyledLabel>
  );
}

function NavigationHeader(props) {
  return <div>{props.children}</div>;
}

function getPadding(el) {
  const style = global.getComputedStyle(el, null);
  return direction =>
    parseInt(style.getPropertyValue(`padding-${direction}`), 10);
}

const StyledHeader = styled(Header)`
  position: sticky;
  top: 0;
  height: 60px;
  box-sizing: border-box;
`;

const StyledNavigation = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background-color: ${props => props.theme.background};
`;

const StyledLabel = styled.div`
  position: sticky;
  top: 60px;
  left: 0;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${FONTS.default};
  font-size: .8em;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  border-width: 1px 0;
`;

const StyledLabelLink = styled(Link)`
  color: ${props => props.theme.color};
  text-decoration: none;
  margin-right: 15px;
`;

const PASSAGE_HEIGHT = 50;

const StyledNavigationTree = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  padding-bottom: 50px;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  -webkit-overflow-scroll: touch;
  mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) ${PASSAGE_HEIGHT}px
  );
  -webkit-mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) ${PASSAGE_HEIGHT}px
  );
`;

const StyledNavigationToolbar = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
`;

function Documentation(props) {
  return (
    <StyledDocumentationTree
      active={props.active}
      className="docs-navigation"
      data={props.docs.children}
      onItemClick={props.onItemClick}
      onScrollRequest={props.onScrollRequest}
      prefix="/doc"
    />
  );
}

const StyledDocumentationTree = styled(NavigationTree)`
  margin-bottom: 5px;
  padding-bottom: 5px;
`;
