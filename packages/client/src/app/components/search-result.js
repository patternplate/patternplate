import React from "react";
import * as Components from "@patternplate/components";

export default function SearchResult(props) {
  return (
    <Components.Search.SearchResult
      active={props.item.id === props.activeId}
      href={props.item.href}
      id={props.item.id}
      index={props.index}
      icon={props.item.manifest.icon || props.item.type}
      name={props.item.manifest.displayName}
      key={props.item.id}
      onActivate={props.onActivate}
      onScrollRequest={props.onScrollRequest}
      type={props.type}
    />
  );
}
