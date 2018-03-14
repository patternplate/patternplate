> Documentation and development interface for component libraries

# patternplate

## [Site][site] | [Getting started][getting-started]

This is the contributor documentation for the `patternplate` mono-repository.
For user docs see [patternplate.github.io](https://patternplate.github.io)

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

## Contribute to patternplate

```sh
git clone https://github.com/patternplate/patternplate.git
cd patternplate
yarn
yarn start

# start the local component library
yarn patternplate start
```

## Publish a release

```bash
yarn clean
yarn
yarn test
yarn build
yarn lerna publish 
yarn lerna run clean:dev # remove publishing bundles
```

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.

[site]: https://patternplate.github.io/
[getting-started]: https://patternplate.github.io/doc/docs/guides/getting-started?guides-enabled=true
