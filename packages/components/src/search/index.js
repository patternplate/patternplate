const React = require("react");
const styled = require("styled-components").default;
const Link = require("../link");
const Icon = require("../icon");
const Text = require("../text");
const InnerInfoPane = require("../info-pane").InnerInfoPane;
const tag = require("tag-hoc").default;

// import Outside from "./outside";

const SearchFieldSlot = function SearchFieldSlot(props) {
  return props.children;
};
const PassThroughSlot = function PassThroughSlot(props) {
  return props.children;
};

const NOOP = function NOOP() { };

function Search(props) {
  const children = React.Children.toArray(props.children);

  const searchResultList = children.filter(function (item) {
    return item.type === StyledResultList;
  });

  const searchPreviewChildren = children.filter(function (item) {
    return item.type === StyledResultPreview;
  });

  const searchField = children.filter(function (item) {
    return item.type === SearchFieldSlot;
  });

  const passThrough = children.filter(function (item) {
    return item.type === PassThroughSlot;
  });

  return (
    <StyledFormBox
      enabled={props.enabled}
      inline={props.inline}
      onClickOutside={props.inline || !props.enabled ? NOOP : props.onClickOutside}
      onClick={props.inline && !props.enabled ? props.onFocus : NOOP}
      value={props.value}
    >
      <StyledForm
        onSubmit={props.onSubmit}
        method="GET"
      >
        <StyledSearchFieldBox
          onClick={props.inline ? props.onClick : NOOP}
        >
          {searchField}
          {passThrough}
          <HiddenSubmit />
          <SearchLegend
            {...props.legend}
          />
        </StyledSearchFieldBox>
        <StyledResults>
          {searchResultList}
          {searchPreviewChildren}
        </StyledResults>
      </StyledForm>
    </StyledFormBox>
  );
}

const SEARCH_HEIGHT = "55vh";
const SEARCH_FIELD_HEIGHT = "80px";
const SEARCH_LEGEND_HEIGHT = "30px";

const StyledFormBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  pointer-events: all;
  overflow: hidden;
  margin: ${props => props.inline ? 'calc(12.5vh - 30px) 0 60px 0' : '0'};
  opacity: ${props => props.inline && props.enabled ? '0' : '1'};
`;

const StyledForm = styled.form`
  display:flex;
  flex-direction:column;
  position:relative;
  z-index:2;
  width:100%;
  max-height: ${SEARCH_HEIGHT};
  ${props => withTint(props)}
`;

const StyledSearchFieldBox = styled.div`
  position:relative;
  z-index:1;
  flex:0 0 auto;
`;

const StyledResults = styled.div`
  position:relative;
  z-index:1;
  flex:1 1 auto;
  display:flex;
  flex-direction:row;
  max-height: calc(${SEARCH_HEIGHT} - ${SEARCH_FIELD_HEIGHT} - ${SEARCH_LEGEND_HEIGHT});
`;

const StyledResultPreview = styled.div`
  flex:1 1 60%;
  overflow:scroll;
  -webkit-touch-scroll:auto;
`;

const StyledResultList = styled.div`
  flex: 1 0 40%;
  overflow: scroll;
  -webkit-touch-scroll: auto;
  border-right: 1px solid ${props => props.theme.colors.border};
`;

const StyledResultHeading = styled(Text)`
  box-sizing:border-box;
  position:-webkit-sticky;
  position:sticky;
  z-index:1;
  top:0;
  margin:0;
  font-size:14px;
  padding:3px 15px;
  border-width:1px 0;
  border-style:solid;
  border-color: ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.color};
  background: ${props => props.theme.colors.background};
`;

const StyledIcon = styled(tag(["active"])(Icon))`
  flex:0 0 auto;
  fill: ${props => props.active ? props.theme.colors.active : props.theme.colors.color};
  margin-right:10px;
`;

const Linkable = tag(["active"])(Link);

const StyledPreviewLink = styled(Linkable)`
  position:absolute;
  right:15px;
  top:50%;
  transform:translateY(-50%);
  text-decoration:none;
  color: ${props => props.theme.colors.border};
  opacity:0;
  &:hover{
    color: ${props => props.theme.colors.color};
    text-decoration:underline;
  }
`;

const StyledResultLink = styled(Linkable)`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
  &:link, &:visited, &:active {
    color: ${props => props.active ? props.theme.colors.active : props.theme.colors.color};
    text-decoration: none;
  }
`;

const StyledResultLinkText = styled(Text)`
  line-height: 20px;
  color: ${props => props.active ? props.theme.colors.active : props.theme.colors.color};
  text-decoration: none;
`;

const StyledResult = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  &:hover{
    mask-image: linear-gradient( to left,rgba(0,0,0,0) 75px,rgba(0,0,0,1) 125px);
    -webkit-mask-image: linear-gradient( to left,rgba(0,0,0,0) 75px,rgba(0,0,0,1) 125px);
  }
  &:hover {
    opacity: 1;
  }
`;

class SearchResult extends React.Component {
  constructor(...args) {
    super(...args);
    this.getRef = this.getRef.bind(this);
  }

  getRef(ref) {
    this.ref = ref;
  }

  componentWillUpdate(next) {
    if (next.active && this.ref) {
      this.props.onScrollRequest({ target: this.ref });
    }
  }

  render() {
    const props = this.props;

    return (
      <StyledResult
        innerRef={this.getRef}
        active={props.active}
        title={`Navigation to pattern ${props.name}`}
        data-id={props.id}
      >
        <StyledResultLink
          active={props.active}
          href={props.href}
          query={{ "search-enabled": false }}
        >
          <StyledResultLinkText
            active={props.active}
            size="l"
          >
            {props.name}
          </StyledResultLinkText>
        </StyledResultLink>
        <StyledPreviewLink
          active={props.active}
          query={{ "search-preview": props.index }}
        >
          <Text
            active={props.active}
            size="s"
          >
            "Preview"
          </Text>
        </StyledPreviewLink>
      </StyledResult>
    );
  }
}

SearchResult.defaultProps = {
  onScrollRequest: function onScrollRequest() { }
};

const HiddenSubmit = styled.input.attrs({
  type: 'submit'
})`
  display: none;
`;

const StyledClose = styled(Link)`
  font-size: 0;
  line-height: 0;
`;

const StyledCloseIcon = styled(Icon)`
  fill: ${props => props.theme.colors.color};
`;

function Close(props) {
  const verb = props.clears ? `Clear` : "Close";
  const query = props.clears ? { search: null } : { "search-enabled": null };
  const symbol = "close"; // TODO: Add and use icon for clearing
  return (
    <StyledClose
      query={query}
      title={`${verb} search ${props.shortcut.toString()}`}
    >
      <StyledCloseIcon size="m" symbol={symbol} />
      {verb}
    </StyledClose>
  );
}

const StyledMarkdown = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const StyledSearchLegend = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 0 15px;
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.border};
  ${props => withTint(props)};
`;

const StyledSearchLegendBox = styled.div`
  display:flex;
  overflow:scroll;
  -webkit-overflow-scrolling:touch;
  width:100%;
  position:relative;
  z-index:1;
  ::-webkit-scrollbar{
    display:none;
  }
`;

const StyledField = styled(Text)`
  padding:0 10px;
  color: ${props => props.theme.colors.color};
  &:first-child{
    padding-left:0;
  }
}`;

const StyledLegendName = styled(StyledField)`
  padding-right:20px;
  font-weight:bold;
  color: ${props => props.theme.colors.color};
  position:relative;z-index:1;
`;

const StyledFieldLink = styled(Link)`
  white-space:nowrap;
  &:link,
  &:active,
  &:visited,
  &:hover {
    color: ${props => props.theme.colors.color
  }
`;

function SearchLegend(props) {
  return (
    <StyledSearchLegend
      className={props.className}
    >
      {props.name && <StyledLegendName>{props.name}</StyledLegendName>}
      <StyledSearchLegendBox>
        {(props.items || []).map(function (l) {
          switch (l.type) {
            case "field":
            default:
              return React.createElement(
                StyledField,
                { key: l.key },
                React.createElement(
                  StyledFieldLink,
                  {
                    title: l.description,
                    query: { search: `${l.value}` }
                  },
                  l.key
                )
              );
            }
          })
        }
      </StyledSearchLegendBox>
    </StyledSearchLegend>
  );
}

function withTint(props) {
  return `
		&::before {
			content: '';
			position: absolute;
			z-index: 0;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: ${props.theme.colors.background};
			opacity: 0.975;
		}
	`;
}

module.exports.default = Search;
module.exports.SearchResult = SearchResult;
module.exports.SearchResultList = StyledResultList;
module.exports.SearchResultHeading = StyledResultHeading;
module.exports.SearchResultPreview = StyledResultPreview;
module.exports.SearchFieldSlot = SearchFieldSlot;
module.exports.PassThroughSlot = PassThroughSlot;
module.exports.Close = Close;
