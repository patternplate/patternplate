import * as React from "react";
import { Themer } from "@patternplate/component-utility";
import { MainHeader } from "./main-header";

export default function MainHeaderDemo() {
  const image = (
    <svg width="30" height="30" viewBox="0 0 24 24" style={{ margin: 5 }}>
      <rect width="30" height="30" fill="currentColor" />
    </svg>
  );

  return (
    <Themer>
      <MainHeader title="patternplate" image={image} />
      <MainHeader title="patternplate" />
    </Themer>
  );
}
