import * as React from "react";
import { Themer } from "@patternplate/component-utility";
import * as Search from ".";

export default function SearchDemo() {
  return (
    <Themer>
      <Search.Search>
        <Search.SearchFieldSlot>
          <Search.SearchField />
        </Search.SearchFieldSlot>
        <Search.SearchLegendSlot>
          <Search.SearchLegend name="Legend" items={[ ]}/>
        </Search.SearchLegendSlot>
        <Search.SearchResult name="bar" id="bar" />
      </Search.Search>
    </Themer>
  );
}
