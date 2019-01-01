import * as React from "react";
import { Text } from "@patternplate/component-text";
import * as Styles from "./toggle-head.styles";

export interface ToggleHeadProps {
  name: string;
  enabled: boolean;
  className?: string;
  query?: { [key: string]: string };
}

export const ToggleHead: React.SFC<ToggleHeadProps> = function ToggleHead(props) {
  const query = { [`${props.name}-enabled`]: !props.enabled };
  return (
    <Styles.StyledToggleHead
      query={query}
      className={props.className}
      title={`${props.enabled ? "Hide" : "Show"} ${props.name}`}
    >
      <Text>{props.children}</Text>
      <Styles.StyledArrow rotated={props.enabled}>▼</Styles.StyledArrow>
    </Styles.StyledToggleHead>
  );
}
