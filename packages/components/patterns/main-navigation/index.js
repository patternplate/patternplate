const React = require('react');
const styled = require('styled-components').default;
const NavigationTree = require('../navigation-tree');
const NavigationToolbar = require('../navigation-toolbar');
const Header = require('../main-header');

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

    if (item.bottom > list.bottom - pad('bottom')) {
      this.ref.scrollTop = e.target.offsetTop - list.height + pad('bottom') + item.height;
    }

    if (item.top < list.top + pad('top')) {
      this.ref.scrollTop = e.target.offsetTop + pad('top');
    }
  }

  getRef(ref) {
    this.ref = ref;
  }

  render() {
    const {props} = this;
    const children = React.Children.toArray(props.children);
    const toolbar = children.find(child => child.type === NavigationToolbar);
    const header = children.find(child => child.type === NavigationHeader);

    return (
      <StyledNavigation onKeyDown={this.handleKeyDown}>
        <StyledNavigationTree innerRef={this.getRef}>
          {header
            ? header
            : <StyledHeader
                title={props.applicationTitle}
                symbol="patternplate"
                />
          }
          <Documentation
            active={props.active}
            docs={props.docs}
            onItemClick={props.onItemClick}
            onScrollRequest={this.handleScrollRequest}
          />
          <NavigationTree
            active={props.active}
            data={props.navigation.children}
            onItemClick={props.onItemClick}
            onScrollRequest={this.handleScrollRequest}
            prefix="/pattern"
          />
        </StyledNavigationTree>
        {toolbar &&
          <StyledNavigationToolbar>
            {toolbar}
          </StyledNavigationToolbar>
        }
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

function NavigationHeader(props) {
  return <div>{props.children}</div>
}

function getPadding(el) {
  const style = global.getComputedStyle(el, null);
  return direction => parseInt(
    style.getPropertyValue(`padding-${direction}`),
    10
  );
}

const StyledHeader = styled(Header) `
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const StyledNavigation = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background-color: ${props => props.theme.background}
`;

const PASSAGE_HEIGHT = 50;

const StyledNavigationTree = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  padding-bottom: 50px;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scroll: touch;
  mask-image: linear-gradient(
    to top,
    rgba(0,0,0,0),
    rgba(0,0,0,1) ${PASSAGE_HEIGHT}px
  );
  -webkit-mask-image: linear-gradient(
    to top,
    rgba(0,0,0,0),
    rgba(0,0,0,1) ${PASSAGE_HEIGHT}px
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

const StyledDocumentationTree = styled(NavigationTree) `
  margin-bottom: 5px;
  border-bottom: 1px solid ${props => props.theme.border};
  padding-bottom: 5px;
`;
