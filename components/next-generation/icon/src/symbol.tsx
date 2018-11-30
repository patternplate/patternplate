import * as React from "react";
import { Path } from "./path";

export interface SymbolProps {
  definition: any;
  emit?: boolean;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const Symbol: React.SFC<SymbolProps> = (props) => {
  const paths = Array.isArray(props.definition)
    ? props.definition
    : [props.definition];

  if (props.emit) {
    return (
      <g style={props.style}>
        {paths.map(p => <Path key={p} definition={p} />)}
      </g>
    );
  }

  return (
    <>
      {paths.map(p => <Path key={p} definition={p} />)}
    </>
  );
}
