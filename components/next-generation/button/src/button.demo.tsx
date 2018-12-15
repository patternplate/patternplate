import * as React from "react";
import styled from "styled-components";

import { Button, ButtonTypes } from "./button";
import { Themer } from "@patternplate/component-utility";

const StyledDemoBox = styled.div`
  ${Button} {
    margin-right: 10px;
  }
`;

export default function HeadlineDemo() {
  return (
    <Themer spacing={true}>
      <StyledDemoBox>
        <Button
          symbol="reload"
          title="Reload"
          type={ButtonTypes.link}
          href="/"
          external
        >
          Link Button!
        </Button>
        <Button symbol="reload" title="Reload">
          Button!
        </Button>
        <Button title="Reload">
          Button without icon
        </Button>
        <Button symbol="patternplate" title="Patternplate" />
      </StyledDemoBox>
    </Themer>
  );
}
