"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bash = `
npm start
`;
exports.jsx = `
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
exports.html = `
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
exports.json = `
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
//# sourceMappingURL=fixtures.js.map