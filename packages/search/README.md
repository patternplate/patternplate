> Perform search queries on a list of patternplate items

# @patternplate/search

## Getting started

```
npm install @patternplate/search
```

## Usage

```js
const {createSearch} = require('@patternplate/search');

const items = [
  {
    id: 'src/button',
    manifest: {
      displayName: 'Button',
      version: '1.0.0'
    }
  }
];

const search = createSearch(items);
search('button');
```
