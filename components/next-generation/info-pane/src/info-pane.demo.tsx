import * as React from "react";
import styled from "styled-components";
import { Themer } from "@patternplate/component-utility";
import { InfoPane } from "./info-pane";

const MANIFEST = `{
  "name": "info-pane",
  "displayName": "Info pane"
}`;

const StyledDemoBox = styled.div`
  margin: 10px 0 0 10px;
`;

class InfoPaneDemo extends React.Component {
  public state = {
    mount: false,
    manifestEnabled: false
  };

  render() {
    return (
      <StyledDemoBox>
        <InfoPane
          flag="beta"
          hermit
          id="testpane"
          manifestEnabled={this.state.manifestEnabled}
          manifest={MANIFEST}
          name="Test pane"
          version="1.0.0"
        />
      </StyledDemoBox>
    );
  }
}

export default () => (
  <Themer spacing>
    <InfoPaneDemo />
  </Themer>
);

