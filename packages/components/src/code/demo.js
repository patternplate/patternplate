const React = require("react");
const Code = require(".");
const styled = require("styled-components").default;
const Themer = require("../demo-themer");

const JSX = `
export function Component() {
  // Some comment
  return (
    <div>
      <div attr="value" attr={value}>
        <div>Hello there</div>
      </div>
    </div>
  );
}
`;

const HTML = `
<!doctype html>
<html>
  <div id="html">
    Some content
  </div>
  <a href="http://google.come">Google</a>
  <style>
    #html {
      color: red;
    }
  </style>
</html>
`;

const JSON = `
{
  "name": "hello-world",
  "version": "1.0.0",
  "thing": 1,
  "tags": ["hello", "world", "typography"],
  "patternplate": {
    "displayName": "Hello World"
  }
}
`;

module.exports.default = function CodeDemo() {
  return (
    <Themer spacing={true}>
      <Code block language="jsx">
        {JSX}
      </Code>
      <Code block language="html">
        {HTML}
      </Code>
      <Code block language="json">
        {JSON}
      </Code>
    </Themer>
  );
};
