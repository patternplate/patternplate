# Reference: CLI

The `patternplate` command line interface is the default
way of interacting with `patternplate` functionality.

```
yarn add @patternplate/cli --dev
```

## Usage

For tnow 

```bash
λ yarn patternplate start # Start a patternplate server
✔ Started on "http://localhost:1337"

λ yarn patternplate build # Start a patternplate server
✔ Built to "docs/patterns"
```

## Options

```bash
λ yarn patternplate help

  Create, show and deliver component libraries

  Usage
  $ patternplate [command=start] [options]

  Commands
    start   - Start a patternplate instance in cwd
    build   - Create a static interface build
    help    - Show this help

  Start options
    --cwd      - Working directory to search patternplate.config.js in
    --open     - Open the interface in system default browser
    --port     - Port to start patternplate server on, defaults to 1337, $PORT

  Build options
    --base     - Base path to assume for static hosting, e.g. "patternplate" in git.io/patternplate
    --cwd      - Working directory to search patternplate.config.js in
    --out      - Directory to save the build in, defaults to "docs"

  Examples
    $ patternplate
    ✔ Started on http://localhost:1337

    $ patternplate --port 1338
    ✔ Started on http://localhost:1337

    $ patterplate build
    ✔ Built to ./docs
```
