import * as React from "react";
import { Themer } from "@patternplate/component-utility";
import { Code } from "./code";
import * as Fixtures from "./fixtures";

module.exports.default = function CodeDemo() {
  return (
    <Themer spacing={true}>
      <Code block language="sh">
        {Fixtures.bash}
      </Code>
      <Code block language="jsx" highlights={[1, 5, 6, 7]}>
        {Fixtures.jsx}
      </Code>
      <Code block language="html">
        {Fixtures.html}
      </Code>
      <Code block language="json">
        {Fixtures.json}
      </Code>
    </Themer>
  );
};
