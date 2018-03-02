> Read pattern meta data from package.json or pattern.json

# @patternplate/load-manifest 


## Install

```
npm install --save @patternplate/load-manifest
```

## Usage

```js
const {loadManifest} = require("@patternplate/load-manifest");

(async () => {
  const data = await loadManifest("./fixtures/plain"); // { name: "plain", version: "1.0.0" }
})();
```

