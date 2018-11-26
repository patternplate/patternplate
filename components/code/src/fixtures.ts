export const bash = `
npm start
`;

export const jsx = `
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

export const html = `
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

export const json = `
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
