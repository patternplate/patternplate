import * as React from "react";
import { Headline } from "./headline";
import { Themer } from "@patternplate/component-utility";

const TEXT = `Lorem ipsum dolor sit amet, consectetur adipisicing elit`;

export default function HeadlineDemo() {
  return (
    <Themer spacing>
      <Headline as="h1" order={1}>{TEXT}</Headline>
      <Headline as="h2" order={2}>{TEXT}</Headline>
      <Headline as="h3" order={3}>{TEXT}</Headline>
      <Headline as="h4" order={4}>{TEXT}</Headline>
    </Themer>
  );
}
