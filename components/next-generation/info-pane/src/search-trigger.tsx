import * as React from "react";
import { Link } from "@patternplate/component-link";

export interface SearchTriggerProps {
  className?: string;
  field: string;
  search: string;
}

export const SearchTrigger: React.SFC<SearchTriggerProps> = function SearchTrigger(props) {
  return (
    <Link
      className={props.className}
      query={{
        "search-enabled": true,
        search: `${props.field}=${props.search}`
      }}
      title={`Search other patterns with ${props.field} "${props.search}"`}
    >
      {props.children}
    </Link>
  );
}
