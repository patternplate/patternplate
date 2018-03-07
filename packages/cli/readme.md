> Documentation and development interface for component libraries

# @patternplate/cli

* Framework independent
* Bring design docs to live with real components
* Powerful search and meta data system

This is the contributor documentation for `@patternplate/cli`
For user docs see [patternplate.github.io](https://patternplate.github.io)

## About @patternplate/cli

`@patternplate/cli` is most users' standard route into patternplate.

## Dependency management

`@patternplate/cli` is special insofar as the available sub commands
are bundled and required on runtime. This way we can improve install times
and minimize the delay between exection and first output of the CLI. 

Bundling for Node.js entails that the default dependency type is `devDependencies`.
Exceptions to this are modules that are unsuitable for packaging. Those
dependencies have to be installed as `dependencies`.

## Quick start

```sh
git clone https://github.com/patternplate/patternplate.git
cd patternplate/packages/cli
yarn
yarn start
```

## License

Copyright by SinnerSchrader. All `@patternplate` packages are released under the MIT license.

