import { values } from "lodash";
import React from "react";
import {Disabled} from "@patternplate/widgets";
import {
  Search as SearchComponents,
  InnerInfoPane,
  Icon,
  Link,
  Markdown,
  styled
} from "@patternplate/components";
import tag from "tag-hoc";

import Outside from "./outside";
import SearchField from "./search-field";
import Text from "./text";
import withToggleStates from "../connectors/with-toggle-states";
import PassThrough from "../containers/pass-through";

const InfoPane = withToggleStates(InnerInfoPane);
const {
  Search: SearchComponent,
  SearchResult,
  SearchResultList,
  SearchResultHeading,
  SearchResultPreview,
  SearchFieldSlot,
  Close: SearchClose,
  PassThroughSlot: SearchPassThroughSlot
} = SearchComponents;

const NOOP = () => { };

export default class Search extends React.Component {
  constructor(...args) {
    super(...args);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleActivate = this.handleActivate.bind(this);
    this.handleScrollRequest = this.handleScrollRequest.bind(this);
    this.getListRef = this.getListRef.bind(this);
    this.getSearchResult = this.getSearchResult.bind(this);
  }

  handleScrollRequest(e) {
    if (!this.list) {
      return;
    }
    const l = this.list.getBoundingClientRect();
    const i = e.target.getBoundingClientRect();

    if (i.bottom > l.bottom) {
      this.list.scrollTop = e.target.offsetTop - l.height + i.height;
    }

    if (i.top < l.top) {
      this.list.scrollTop = e.target.offsetTop - 30;
    }
  }

  getListRef(ref) {
    this.list = ref;
  }

  getSearchResult = (item, type) => (
    <SearchResult
      active={(this.props.activeItem || {}).id === item.id}
      id={item.id}
      index={item.index}
      icon={item.manifest.icon || item.type}
      name={item.manifest.displayName}
      key={item.id}
      onActivate={this.props.onActivate}
      onScrollRequest={this.handleScrollRequest}
      type={type}
    />
  );

  getSearchResultPreview = () => {
    const item = this.props.activeItem;

    switch (item.contentType) {
      case "doc":
        return (
          <SearchResultPreview {...this.props}>
            <Markdown
              source={item.contents}
              widgets={{
                PatternList: Disabled,
                PatternDemo: Disabled
              }}
              />
          </SearchResultPreview>
        );
      default:
        return (
          <SearchResultPreview {...this.props}>
            <InfoPane
              active
              demoDependencies={values(item.demoDependencies)}
              demoDependents={values(item.demoDependents)}
              dependencies={values(item.dependencies)}
              dependents={values(item.dependents)}
              flag={item.manifest.flag}
              icon={item.manifest.options.icon || item.type}
              id={item.id}
              manifest={JSON.stringify(item.manifest, null, "  ")}
              name={item.manifest.displayName}
              tags={item.manifest.tags}
              version={item.manifest.version}
            />
          </SearchResultPreview>
        );
    }
  }

  componentDidMount() {
    if (typeof this.props.onMount === "function") {
      this.props.onMount();
    }
  }

  handleActivate(e) {
    const id = e.target.getAttribute("data-id");
    const index = [...this.props.docs, ...this.props.components].findIndex(
      i => i.id === id
    );

    if (index > -1) {
      this.props.onActivate(index);
    }
  }

  handleUp(e) {
    e.stopPropagation();
    if (this.props.activeItem && this.props.activeItem.index > 0) {
      e.preventDefault();
      this.props.onUp();
    }
  }

  handleDown(e) {
    e.stopPropagation();
    const available = this.props.components.length + this.props.docs.length - 2;

    if (this.props.activeItem && available >= this.props.activeItem.index) {
      this.props.onDown();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.activeItem) {
      return this.props.onSubmit(e);
    }
    this.props.onNavigate(
      `/${this.props.activeItem.contentType}/${this.props.activeItem.id}`
    );
  }

  render() {
    const { props } = this;

    const withComponents = props.components.length > 0;
    const withDocs = props.docs.length > 0;

    return (
      <SearchComponent
        activeItem={props.activeItem}
        docs={props.docs}
        enabled={props.enabled}
        inline={props.inline}
        onActivate={props.inline ? NOOP : this.handleActivate}
        onClickOutside={props.inline ? NOOP : props.onClickOutside}
        onBlur={props.inline ? NOOP : props.onBlur}
        onChange={props.inline ? NOOP : props.onChange}
        onClear={props.inline ? NOOP : props.onClear}
        onComplete={props.inline ? NOOP : props.onComplete}
        onDown={props.inline ? NOOP : this.handleDown}
        onFocus={props.inline ? NOOP : props.onFocus}
        onStop={props.inline ? NOOP : props.onStop}
        onSubmit={props.inline ? NOOP : this.handleSubmit}
        onUp={props.inline ? NOOP : this.handleUp}
        shortcuts={props.shortcuts}
        suggestion={props.suggestion}
        legend={props.legend}
      >
        <SearchResultList innerRef={this.getListRef}>
          {withDocs > 0 && (
            <SearchResultHeading>Docs ({props.docs.length})</SearchResultHeading>
          )}

          {props.docs.map(d => this.getSearchResult(d, "doc", props))}

          {withComponents > 0 && (
            <SearchResultHeading navigationEnabled={props.navigationEnabled}>
              Components ({props.components.length})
            </SearchResultHeading>
          )}

          {props.components.map(d => this.getSearchResult(d, "pattern"))}
        </SearchResultList>

        {(withComponents || withDocs) && this.getSearchResultPreview()}

        <SearchFieldSlot>
          <SearchField
            autoFocus={!props.inline}
            linkTo="/search"
            mark={props.inline ? null : true}
            name={props.inline ? "inline-search" : "search"}
            onBlur={props.onBlur}
            onChange={props.onChange}
            onClear={props.onClear}
            onClose={props.onClose}
            onComplete={props.onComplete}
            onDown={this.handleDown}
            onFocus={props.onFocus}
            onStop={props.onStop}
            onUp={this.handleUp}
            placeholder="Search"
            suggestion={props.suggestion}
            title={`Search for patterns ${props.shortcuts.toggleSearch.toString()}`}
            value={props.value}
          >
            {props.enabled &&
              <SearchClose
                shortcut={props.shortcuts.close}
                clears={typeof props.value === "string" && props.value.length > 0}
              />
            }
          </SearchField>
        </SearchFieldSlot>
        <SearchPassThroughSlot>
          <PassThrough query={{ "search-enabled": true, search: null }} />
        </SearchPassThroughSlot>
      </SearchComponent>
    );
  }
}
