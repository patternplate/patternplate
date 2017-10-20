import React from "react";
import { styled, Icon } from "@patternplate/components";

import ToggleButton from "./common/toggle-button";

export default ToggleNetwork;

function ToggleNetwork(props) {
  return (
    <StyledToggleButton enabled={props.enabled} shortcut={props.shortcut}>
      <StyledIcon symbol="dependencies" /> {props.shortcut.toString()}
    </StyledToggleButton>
  );
}

const StyledIcon = styled(Icon)`
  fill: ${props => props.theme.color};
`;

const StyledToggleButton = styled(ToggleButton)`
  font-size: 0;
  line-height: 0;
`;
