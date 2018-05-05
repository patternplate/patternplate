const React = require("react");
const styled = require("styled-components").default;
const Link = require("../link");
const Header = require("../main-header");
const NavigationTree = require("../navigation-tree");
const NavigationToolbar = require("../navigation-toolbar");
const NavigationLabel = require("../navigation-label");
const Icon = require("../icon");

class Navigation extends React.Component {
  constructor(...args) {
    super(...args);
    this.getRef = this.getRef.bind(this);
    this.handleScrollRequest = this.handleScrollRequest.bind(this);
  }

  handleScrollRequest(e) {
    // noop
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
      <StyledNavigation
        onKeyDown={this.handleKeyDown}
        >
        {header ? (
          header
        ) : (
          <StyledHeader
            title={props.applicationTitle}
            symbol="patternplate"
          />
        )}
        <StyledNavigationTree innerRef={this.getRef}>
          <Documentation
            visible={props.docs.children.length > 0}
            active={props.active}
            docs={props.docs}
            onItemClick={props.onItemClick}
            onLabelClick={props.onLabelClick}
            onScrollRequest={this.handleScrollRequest}
            query={props.query}
            />
          <div>
            {
              React.Children.toArray(props.children).filter(child => child.type === NavigationBody)
            }
          </div>
          <NavigationLabel
            visible={props.navigation.children.length > 0}
            enabled={props.componentsEnabled}
            name="components"
            highlight
            onClick={props.onLabelClick}
            size="S"
            >
            Components
          </NavigationLabel>
          <NavigationTree
            name="components"
            visible={props.componentsEnabled && props.navigation.children.length > 0}
            active={props.active}
            data={props.navigation.children}
            onItemClick={props.onItemClick}
            onScrollRequest={this.handleScrollRequest}
            prefix="/component"
            query={props.query}
            />
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
module.exports.NavigationBody = NavigationBody;
module.exports.NavigationHeader = NavigationHeader;

Navigation.defaultProps = {
  tools: []
};

function NavigationBody(props) {
  return <React.Fragment>{props.children}</React.Fragment>;
}

function NavigationHeader(props) {
  return <StyledNavigatHeader>{props.children}</StyledNavigatHeader>;
}

const StyledNavigatHeader = styled.div`
  box-sizing: border-box;
  min-height: 60px;
  background: ${props => props.theme.colors.backgroundSecondary};
`;

function getPadding(el) {
  const style = global.getComputedStyle(el, null);
  return direction =>
    parseInt(style.getPropertyValue(`padding-${direction}`), 10);
}

const StyledHeader = styled(Header)`
  height: 60px;
  box-sizing: border-box;
  flex-shrink: 0;
`;

const StyledNavigation = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background-color: ${props => props.theme.colors.background};
`;

const PASSAGE_HEIGHT = 50;

const StyledNavigationTree = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
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
  & > *:last-child {
    margin-bottom: ${PASSAGE_HEIGHT}px;
  }
  @media screen {
    mask-image: none;
    -webkit-mask-image: none;
  }
`;

const StyledNavigationToolbar = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
`;

function Documentation(props) {
  return (
    <StyledDocumentationTree
      visible={props.visible}
      active={props.active}
      data={props.docs.children}
      onItemClick={props.onItemClick}
      onLabelClick={props.onLabelClick}
      onScrollRequest={props.onScrollRequest}
      prefix="/doc"
      query={props.query}
    />
  );
}

const StyledDocumentationTree = styled(NavigationTree)`
  margin-bottom: 5px;
  padding-bottom: 5px;
`;
