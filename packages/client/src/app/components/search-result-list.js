import React from "react";
import * as Components from "@patternplate/components";
import SearchResult from "./search-result";

export default class SearchResultList extends React.Component {
  render() {
    const { props } = this;
    const activeId = this.props.activeItem
      ? this.props.activeItem.id
      : undefined;


    const withComponents = props.components.length > 0;
    const withDocs = props.docs.length > 0;

    return (
      <Components.Search.SearchResultList ref={this.props.getListRef}>
        {withDocs > 0 && (
          <Components.Search.SearchResultListHeading>
            Docs ({props.docs.length})
          </Components.Search.SearchResultListHeading>
        )}

        {props.docs.map(d => (
          <SearchResult
            key={d.id}
            item={d}
            activeId={activeId}
            onActivate={this.props.onActivate}
            onScrollRequest={this.props.onScrollRequest}
            type="doc"
          />
        ))}

        {withComponents > 0 && (
          <Components.Search.SearchResultListHeading
            navigationEnabled={props.navigationEnabled}
          >
            Components ({props.components.length})
          </Components.Search.SearchResultListHeading>
        )}

        {props.components.map(c => (
          <SearchResult
            key={c.id}
            item={c}
            activeId={activeId}
            onActivate={this.props.onActivate}
            onScrollRequest={this.props.onScrollRequest}
            type="pattern"
          />
        ))}
      </Components.Search.SearchResultList>
    );
  }
}
