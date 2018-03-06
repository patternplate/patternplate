> Documentation and development interface for component libraries

# @patternplate/search

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/search`
For user configuration see [patternplate.github.io](https://patternplate.github.io)

## About @patternplate/search

Given a list of patterns, create a function that returns a 
new list matching a provided search query.

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

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.

