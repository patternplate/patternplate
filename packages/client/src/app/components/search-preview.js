import React from "react";
import * as Components from "@patternplate/components";
import { values } from "lodash";

export default function SearchResultPreview(props) {
  const item = props.activeItem;

  switch (item.contentType) {
    case "doc":
      return (
        <Components.Search.SearchResultPreview {...props}>
          <Components.Markdown source={item.contents} />
        </Components.Search.SearchResultPreview>
      );
    default:
      return (
        <Components.Search.SearchResultPreview {...props}>
          <Components.InfoPane
            active
            demoDependencies={values(item.demoDependencies)}
            demoDependents={values(item.demoDependents)}
            dependencies={values(item.dependencies)}
            dependents={values(item.dependents)}
            flag={item.manifest.flag}
            id={item.id}
            manifest={JSON.stringify(item.manifest, null, "  ")}
            name={item.manifest.displayName}
            tags={item.manifest.tags}
            version={item.manifest.version}
          />
        </Components.Search.SearchResultPreview>
      );
  }
}
