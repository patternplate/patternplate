import * as React from "react";
import { Text } from "./text";
import { Themer } from "@patternplate/component-utility";

export default function TextDemo() {
  return (
    <Themer spacing>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
        dignissimos, iure? Odit sapiente earum officia similique distinctio
        veritatis itaque quidem eius dolorem voluptatem, iste beatae dolores
        praesentium quaerat, quae deleniti.
      </Text>
    </Themer>
  );
};
