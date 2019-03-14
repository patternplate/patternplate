import * as React from "react";
import { MarkdownList } from "@patternplate/component-markdown";
import { WidgetListItem, PatternItem } from "./widget-list-item";

export interface WidgetListProps {
  query: string;
  search(query: string): PatternItem[];
  onClick: React.MouseEventHandler<HTMLElement>;
}

export const WidgetList: React.SFC<WidgetListProps> = function PatternList(props) {
  const matches = props.search(props.query);
  return (
    <MarkdownList onClick={props.onClick}>
      {matches.map(item => <WidgetListItem key={item.id} item={item} />)}
    </MarkdownList>
  );
}
