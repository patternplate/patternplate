> < [Back](./readme.md) to Readme

# Setting up flow-type

patternplate's custom resolve algorithm prevents direct usage of `flow` with
patternplate. Using `xo` we created a way to add flow-types to your patterns anyway:

## Setting up xo - flow-type integration

The following packages and config should integrate `flow-type` with
`xo`.

Using the `xo` editor plugins this allows you to get type information,
warnings and errors directly in your editor.

```
npm install --save-dev xo \
  babel-eslint \
  eslint-plugin-patternplate \
  eslint-plugin-flow-check \
  eslint-plugin-import \
  eslint-import-resolver-patternplate
```

In your package.json, add the following options to `xo`.

```json
{
  "xo": {
    "parser": "babel-eslint",
    "plugins": [
      "patternplate",
      "flow-check"
    ],
    "settings": {
      "import/resolver": {
        "node": {},
        "patternplate": {}
      }
    },
    "space": true
  }
}
```

## Configure babel patternplate-transform

Writing flow-typed JavaScript means you need to strip the type annotations
before shipping it to your runtime environments. You can do so by configuring
`patternplate-transform-babel`.

```
npm install --save-dev patternplate-transform-babel \
  babel-core \
  babel-plugin-transform-flow-comments \
  babel-preset-es2015 \
  babel-preset-react
```

```js
// configuration/patternplate-server/transforms.js
module.exports = {
  babel: {
    inFormat: 'js',
    outFormat: 'js',
    opts: {
      presets: [
        'es2015',
        'react'
      ],
      plugins: [
        'transform-flow-comments'
      ]
    }
  }
}
```

```js
// configuration/patternplate-server/patterns.js
module.exports = {
  formats: {
    js: {
      transforms: ['babel', 'react-to-markup']
    }
  },
  mount: {
    format: 'js',
    name: 'Components',
    transforms: ['babel', 'react-mount', 'browserify']
  }
};

```
