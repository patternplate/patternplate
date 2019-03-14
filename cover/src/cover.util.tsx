import * as React from "react";

export const NoBr: React.SFC = props => {
  const TagName = 'nobr' as any;
  return <TagName>{props.children}</TagName>;
}
