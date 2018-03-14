---
tags:
  - Reference
options:
  order: 10
---

# Reference: CLI

The `patternplate` command line interface is the default
way of interacting with `patternplate` functionality.

```bash
yarn global add @patternplate/cli

# Alternative without global installation
npx patternplate [command]
```

## Usage

```bash
patternplate start # Start a patternplate server
✔ Started on "http://localhost:1337"

patternplate build --base="/" # Build static interface
✔ Built to "docs/patterns" 
```

## Options

```bash
patternplate help

  Documentation and development interface for component libraries

  Usage
  patternplate [command=start] [options]

  Commands
    start        - Start a patternplate instance in cwd
    build        - Create a static interface build
    create       - Create a new patternplate project
    help         - Show this help

  Start options
    --cwd        - Working directory to search patternplate.config.js in
    --port       - Port to start patternplate server on, defaults to 1337, $PORT

  Build options
    --base       - [REQUIRED] Base path to assume for static hosting, e.g. "patternplate" in git.io/patternplate
    --cwd        - Working directory to search patternplate.config.js in
    --out        - Directory to save the build in, defaults to "docs"

  Create options
    --cwd        - Working directory to operate in
    --force      - Overwrite existing directories
    --out        - Directory to create the new project in
    --template   - Template to use, defaults to @patternplate/create-default
    --no-git     - Skip git init
    --no-install - Skip installation of npm packages

  Examples
    patternplate
    ✔ Started on http://localhost:1337

    patternplate --port 1338
    ✔ Started on http://localhost:1338

    patterplate build --base="/"
    ✔ Built to ./docs

```
