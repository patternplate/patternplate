import React from "react";
import * as Components from "@patternplate/components";
import SearchField from "./search-field";
import SearchPreview from "./search-preview";
import PassThrough from "../containers/pass-through";
import SearchResultList from "./search-result-list";

const NOOP = () => {};

export default class SearchContainer extends React.Component {
  constructor(...args) {
    super(...args);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleActivate = this.handleActivate.bind(this);
    this.handleScrollRequest = this.handleScrollRequest.bind(this);
    this.getListRef = this.getListRef.bind(this);
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
    const { props } = this;

    if (!props.activeItem) {
      return props.onSubmit(e);
    }

    const { activeItem } = props;
    props.onNavigate(activeItem);
  }

  render() {
    const { props } = this;
    const withComponents = props.components.length > 0;
    const withDocs = props.docs.length > 0;

    return (
      <Components.Search.Search
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
      >
        <Components.Search.SearchFieldSlot>
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
            {props.enabled && (
              <Components.Search.SearchClose
                shortcut={props.shortcuts.close}
                clears={
                  typeof props.value === "string" && props.value.length > 0
                }
              />
            )}
          </SearchField>
        </Components.Search.SearchFieldSlot>
        <Components.Search.SearchLegendSlot>
          <Components.Search.SearchLegend {...props.legend}/>
        </Components.Search.SearchLegendSlot>
        <Components.Search.SearchPassThroughSlot>
          <PassThrough query={{ "search-enabled": true, search: null }} />
        </Components.Search.SearchPassThroughSlot>
        <Components.Search.SearchResultListSlot>
          <SearchResultList
            activeItem={this.props.activeItem}
            components={this.props.components}
            docs={this.props.docs}
            getListRef={this.getListRef}
            onActivate={this.props.onActivate}
            onScrollRequest={this.handleScrollRequest}
            />
        </Components.Search.SearchResultListSlot>
        <Components.Search.SearchResultPreviewSlot>
          {(withComponents || withDocs) && <SearchPreview {...this.props} />}
        </Components.Search.SearchResultPreviewSlot>
      </Components.Search.Search>
    );
  }
}

/**
 *


 */
