import * as React from "react";
import { SearchTrigger } from "./search-trigger";
import { Text } from "@patternplate/component-text";
import styled from "styled-components";
import { versionColor } from "./info-pane.utils";

export interface InfoPaneVersionProps {
  className?: string;
  search: string;
}

export const InfoPaneVersion: React.SFC<InfoPaneVersionProps> = function InfoPaneVersion(props) {
  return (
    <StyledInfoPaneVersion
      className={props.className}
      search={props.search}
      field="version"
    >
      <Text>{props.search}</Text>
    </StyledInfoPaneVersion>
  );
}

export const StyledInfoPaneVersion = styled(SearchTrigger)`
  color: ${versionColor};
  &:link,
  &:visited {
    text-decoration: none;
    color: ${versionColor};
  }
`;
