import * as React from "react";
import { ToggleHead } from "./toggle-head";
import * as S from "./info-pane-toggle.styles";

export interface InfoPaneToggleProps {
  name: string;
  enabled: boolean;
  head: React.ReactNode;
}

export const InfoPaneToggle: React.SFC<InfoPaneToggleProps> = function InfoPaneToggle(props) {
  return (
    <S.StyledToggle>
      <ToggleHead name={props.name} enabled={props.enabled}>
        {props.head}
      </ToggleHead>
      {props.enabled && <S.StyledToggleBody>{props.children}</S.StyledToggleBody>}
    </S.StyledToggle>
  );
}
