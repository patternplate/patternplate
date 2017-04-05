> < [Back](./readme.md) to Readme

# Setting up typescript

To build your patterns in typescript the `patternplate-transform-typescript` could be used.

```
npm install --save-dev typescript patternplate-transform-typescript
```

## Configure patternplate-transform-typescript

Writing TypeScript means you need to strip the type annotations
before shipping it to your runtime environments. This will be handled by
`patternplate-transform-typescript`.

```js
// configuration/patternplate-server/transforms.js
module.exports = {
  typescript: {
    inFormat: 'tsx',
    outFormat: 'js',
    opts: {
      // TypeScript compiler options goes here
      target: 'es5',
      module: 'commonjs',
      jsx: 'react'
    }
  }
}
```

```js
// configuration/patternplate-server/patterns.js
module.exports = {
  formats: {
    tsx: {
      transforms: ['typescript', 'react-to-markup']
    }
  }
};

```
