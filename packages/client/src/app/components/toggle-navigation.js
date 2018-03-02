import React from "react";
import { styled, Icon } from "@patternplate/components";

import ToggleButton from "./common/toggle-button";

export default Hamburger;

function Hamburger(props) {
  return (
    <StyledToggleButton enabled={props.enabled} shortcut={props.shortcut}>
      <StyledIcon
        symbol="hamburger"
        />
        {props.shortcut.toString()}
    </StyledToggleButton>
  );
}

const StyledIcon = styled(Icon)`
  fill: ${props => props.theme.color};
`;

const StyledToggleButton = styled(ToggleButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  line-height: 0;
  width: 60px;
  height: 60px;
  cursor: pointer;
`;
