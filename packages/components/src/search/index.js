var React = require("react");
var styled = require("styled-components").default;
var Link = require("../link");
var Icon = require("../icon");
var Text = require("../text");
var InnerInfoPane = require("../info-pane").InnerInfoPane;
var tag = require("tag-hoc").default;

// import Markdown from "./common/markdown";
// import Outside from "./outside";

var SearchFieldSlot = function SearchFieldSlot(props) {
  return props.children;
};
var PassThroughSlot = function PassThroughSlot(props) {
  return props.children;
};

var NOOP = function NOOP() { };

function Search(props) {
  var children = React.Children.toArray(props.children);

  var SearchResultChildren = children.filter(function (item) {
    return item.type === SearchResult;
  });

  var SearchPreviewChildren = children.filter(function (item) {
    return item.type === StyledResultPreview;
  });

  var SearchField = children.filter(function (item) {
    return item.type === SearchFieldSlot;
  });

  var PassThrough = children.filter(function (item) {
    return item.type === PassThroughSlot;
  });

  console.log(props);

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
          {SearchField}
          {PassThrough}
          <HiddenSubmit />
          <SearchLegend
            {...props.legend}
          />
        </StyledSearchFieldBox>
        <StyledResults>
          <StyledResultList innerRef={this.getListRef}>
            {SearchResultChildren}
          </StyledResultList>
          {SearchPreviewChildren}
        </StyledResults>
      </StyledForm>
    </StyledFormBox>
  );
}

var SEARCH_HEIGHT = "60vh";
var SEARCH_FIELD_HEIGHT = "80px";
var SEARCH_LEGEND_HEIGHT = "30px";

var StyledFormBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  pointer-events: all;
  overflow: hidden;
  margin: ${props => props.inline ? 'calc(12.5vh - 30px) 0 60px 0' : '0'};
  opacity: ${props => props.inline && props.enabled ? '0' : '1'};
`;

var StyledForm = styled.form`
  display:flex;
  flex-direction:column;
  position:relative;
  z-index:2;
  width:100%;
  max-height: ${SEARCH_HEIGHT};
  ${props => withTint(props)}
`;

var StyledSearchFieldBox = styled.div`
  position:relative;
  z-index:1;
  flex:0 0 auto;
`;

var StyledResults = styled.div`
  position:relative;
  z-index:1;
  flex:1 1 auto;
  display:flex;
  flex-direction:row;
  max-height: calc(${SEARCH_HEIGHT} - ${SEARCH_FIELD_HEIGHT} - ${SEARCH_LEGEND_HEIGHT});
`;

var StyledResultPreview = styled.div`
  flex:1 1 60%;
  overflow:scroll;
  -webkit-touch-scroll:auto;
`;

var StyledResultList = styled.div`
  flex: 1 0 40%;
  overflow: scroll;
  -webkit-touch-scroll: auto;
  border-right: 1px solid ${props => props.theme.border};
`;

var StyledResultHeading = styled(Text)`
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
  border-color: ${props => props.theme.border};
  color: ${props => props.theme.color};
  background: ${props => props.theme.background};
`;

var StyledIcon = styled(tag(["active"])(Icon))`
  flex:0 0 auto;
  fill: ${props => props.active ? props.theme.active : props.theme.color};
  margin-right:10px;
`;

var Linkable = tag(["active"])(Link);

var StyledPreviewLink = styled(Linkable)`
  position:absolute;
  right:15px;
  top:50%;
  transform:translateY(-50%);
  text-decoration:none;
  color: ${props => props.theme.border};
  opacity:0;
  &:hover{
    color: ${props => props.theme.color};
    text-decoration:underline;
  }
`;

var StyledResultLink = styled(Linkable)`
  display:flex;
  align-items:center;
  width:100%;
  padding:10px 15px;
  line-height:20px;
  color: ${props => props.active ? props.theme.active : props.theme.color};
  text-decoration:none;
`;

var StyledResult = styled.div`
  position:relative;
  box-sizing:border-box;
  display:flex;
  align-items:center;
  &:hover{
    mask-image:linear-gradient( to left,rgba(0,0,0,0) 75px,rgba(0,0,0,1) 125px );
    -webkit-mask-image:linear-gradient( to left,rgba(0,0,0,0) 75px,rgba(0,0,0,1) 125px );
  }
  &:hover {
    opacity:1;
  }
`;

class SearchResult extends React.Component {
  getRef(ref) {
    this.ref = ref;
  }
  componentWillUpdate(next) {
    if (next.active && this.ref) {
      this.props.onScrollRequest({ target: this.ref });
    }
  }
  render() {
    var props = this.props;
    console.log(props);

    return (
      <StyledResult
        innerRef={this.getRef}
        active={props.active}
        title={`Navigation to pattern ${props.name}`}
        data-id={props.id}
      >
        <StyledResultLink
          active={props.active}
          href={`/${props.type}/${props.id}`}
          query={{ "search-enabled": false }}
        >
          <StyledIcon
            active={props.active}
            size="m"
            symbol={props.icon}
          />
          <Text
            active={props.active}
            size="l"
          >
            {props.name}
          </Text>
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

var Submit = function Submit(props) {
  return <input type="submit" className={props.className} />;
};

var HiddenSubmit = styled(Submit)`
  display:none;
`;

var StyledClose = styled(Link)`
  font-size: 0;
  line-height:0;
`;

var StyledCloseIcon = styled(Icon)`
  fill: ${props => props.theme.color};
`;

function Close(props) {
  var verb = props.clears ? `Clear` : "Close";
  var query = props.clears ? { search: null } : { "search-enabled": null };
  var symbol = props.clears ? "return" : "close";
  return (
    <StyledClose
      query={query}
      title={`${verb} search ${props.shortcut.toString()}`}
    >
      <StyledCloseIcon size="s" symbol={symbol} />
      {verb}
    </StyledClose>
  );
}

var StyledMarkdown = styled.div`
  width: 80%;
  margin:0 auto;
`;

function ResultPreview(props) {
  if (!props.item) {
    return null;
  }
  switch (props.item.type) {
    case "doc":
      return <StyledResultPreview/>;
    default:
      return (
        <StyledResultPreview>
          {props.children}
        </StyledResultPreview>
      );
  }
}

/*
<InfoPane
  active
  demoDependencies={values(props.item.demoDependencies)}
  demoDependents={values(props.item.demoDependents)}
  dependencies={values(props.item.dependencies)}
  dependents={values(props.item.dependents)}
  flag={props.item.manifest.flag}
  icon={props.item.manifest.options.icon || props.item.type}
  id={props.item.id}
  manifest={JSON.stringify(props.item.manifest, null, "  ")}
  name={props.item.manifest.displayName}
  tags={props.item.manifest.tags}
  version={props.item.manifest.version}
/>
*/

var StyledSearchLegend = styled.div`
  display:flex;
  align-items:center;
  height:30px;
  position:relative;
  box-sizing:border-box;
  width:100%;
  padding:0 15px;
  border:1px solid ${props => props.theme.border};
  color: ${props => props.theme.border};
  ${props => withTint(props)};
`;

var StyledSearchLegendBox = styled.div`
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

var StyledField = styled(Text)`
  padding:0 10px;
  color: ${props => props.theme.color};
  &:first-child{
    padding-left:0;
  }
}`;

var StyledLegendName = styled(StyledField)`
  padding-right:20px;
  font-weight:bold;
  color: ${props => props.theme.color};
  position:relative;z-index:1;
`;

var StyledFieldLink = styled(Link)`
  white-space:nowrap;
  &:link,
  &:active,
  &:visited,
  &:hover {
    color: ${props => props.theme.color
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
			background: ${props.theme.background};
			opacity: 0.975;
		}
	`;
}

module.exports.default = Search;
module.exports.SearchResult = SearchResult;
module.exports.SearchResultHeading = StyledResultHeading;
module.exports.SearchResultPreview = ResultPreview;
module.exports.SearchFieldSlot = SearchFieldSlot;
module.exports.PassThroughSlot = PassThroughSlot;
module.exports.Close = Close;
