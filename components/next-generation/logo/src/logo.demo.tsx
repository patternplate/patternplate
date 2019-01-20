import * as React from "react";
import { Themer } from "@patternplate/component-utility";
import { Logo } from "./logo";

export default function IconDemo() {
  return (
    <Themer spacing={true}>
      <Logo/>
      <Logo source="<svg width='30' height='30' viewBox='0 0 24 24'><rect width='30' height='30' fill='currentColor'/></svg>"/>
    </Themer>
  );
}
