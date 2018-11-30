import * as React from "react";
import { omit } from "lodash";

export interface PathProps {
  definition: any;
  tagName?: string;
}

export const Path: React.SFC<PathProps> = props => {
  const { definition } = props;
  const def = typeof definition === "string" ? { d: definition } : definition;
  const p = omit(def, ["tagName"]);
  const Component = def.tagName || "path";
  return <Component {...p} />;
}
