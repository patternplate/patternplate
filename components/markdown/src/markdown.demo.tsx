import * as React from 'react';
import * as Fixture from './fixture';
import { Markdown } from './markdown';
import { Themer } from "@patternplate/component-utility";

export default () => (
  <Themer>
    <Markdown source={Fixture.long} />
  </Themer>
);

export const MarkdownDemo = () => (
  <Markdown source={Fixture.short} />
);
