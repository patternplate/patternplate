import * as React from "react";
import { PatternJson } from "@patternplate/types";
import { MarkdownItem, MarkdownLink } from "@patternplate/component-markdown";

export interface PatternItem {
  id: string;
  manifest: Partial<PatternJson>;
  contentType: 'doc' | 'pattern';
  href: string;
}

export interface WidgetListItemProps {
  item: PatternItem;
}

export const WidgetListItem: React.SFC<WidgetListItemProps> = function WidgetListItem(props) {
  const item = props.item;
  const name = item.manifest.displayName || item.manifest.name;
  return (
    <MarkdownItem>
      <div data-type={item.contentType} data-id={item.id}>
        <MarkdownLink
          href={item.href}
          title={`Open pattern ${name}`}
          >
          {name}
        </MarkdownLink>
      </div>
    </MarkdownItem>
  );
}
