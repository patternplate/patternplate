> Serverside rendering for styled-components styled patternplate patterns

# patternplate-transform-styled-components

## Installation

```shell
npm install --save styled-components@2.0.0-7
npm install --save-dev patternplate-transform-styled-components
```

## Usage

```js
// configuration/patternplate-server/transforms.js
module.exports = {
  'styled-components': {
    inFormat: 'js',
    outFormat: 'js'
  },
  'react-to-markup': {
    inFormat: 'js',
    outFormat: 'html',
    opts: {
      automount: true
    }
  }
};

// configuration/patternplate-server/pattern.js
module.exports = {
  formats: {
    js: {
      transforms: ['babel', 'styled-components', 'react-to-markup']
    }
  }
};

```


---
Built by (c) Mario Nebl. Released under the [MIT license]('./license.md').
