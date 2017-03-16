> < [Back](./readme.md) to Readme

# Pattern resolve algorithm

Patternplate uses an extended resolve algorithm based on [NodeJS' require.resolve algorithm](https://nodejs.org/docs/latest/api/modules.html#modules_all_together).

## Rationale

In order to provide an abstraction over sources and their artifacts that is fast enough for productive development, patternplate requires developers to

*  provide additional information in the gestalt of a `pattern.json` manifest file
*  respect additional rules for importing and exporting modules: **Relative imports are forbidden**

It is a very deliberate decision to require additional work and discipline from developers.

### Manifest files

The notation of `pattern.json` manifest files allow for

*  very efficient and clear locating of patterns in a file system
*  separate versioning of patterns in a pattern tree
*  attachment of meta data on a pattern, such as `flag`, `tags`, `displayName`
*  construction of dependency tree before actual parsing of sources
*  decoupling of dependency tree and JS sources (as in e.g. webpack)

### Removal of relative imports

A common problem in `NodeJS` projects is the propagation of deep and convoluted
require paths, like e.g. `const util = require('../../../../lib/util/some-utility/')`.

By removing the possibility to require from relative paths, developers do not have the choice
to "hide" their code somewhere in the project. Instead they have to place it in a clear and directly referenced structure in `./patterns`, where co-workers can discover it swiftly.


## The algorithm

```
require(X) from pattern/BASENAME.FORMAT at Y
let CWD = process.cwd

1. LOAD_AS_PATTERN_DEPENDENCY(X, Y, FORMAT)
2. if FORMAT is JS and X is a core module,
	 a) return a core module
	 b) STOP
3. LOAD_NODE_MODULES(Y, CWD)
4. THROW "not found"

LOAD_AS_PATTERN_DEPENDENCY(X, Y, FORMAT)
1. if Y/pattern.json is a file
	 a) let MANIFEST = Parse Y/pattern.json
	 b) if Y in MANIFEST.dependencies
			α) let ID = dependencies[Y]
			β) LOAD_AS_PATTERN(ID, FORMAT)

LOAD_AS_PATTERN(ID, FORMAT)
1. if patterns/ID/index.FORMAT is a file
	 a) load patterns/ID/index.FORMAT STOP

LOAD_AS_FILE(X)
1. If X is a file, load X as JavaScript text.  STOP
2. If X.js is a file, load X.js as JavaScript text.  STOP
3. If X.json is a file, parse X.json to a JavaScript Object.  STOP
4. If X.node is a file, load X.node as binary addon.  STOP

LOAD_AS_DIRECTORY(X)
1. If X/package.json is a file,
	a. Parse X/package.json, and look for "main" field.
	b. let M = X + (json main field)
	c. LOAD_AS_FILE(M)
2. If X/index.js is a file, load X/index.js as JavaScript text.  STOP
3. If X/index.json is a file, parse X/index.json to a JavaScript object. STOP
4. If X/index.node is a file, load X/index.node as binary addon.  STOP

LOAD_NODE_MODULES(X, START)
1. let DIRS=NODE_MODULES_PATHS(START)
2. for each DIR in DIRS:
	a. LOAD_AS_FILE(DIR/X)
	b. LOAD_AS_DIRECTORY(DIR/X)

NODE_MODULES_PATHS(START)
1. let PARTS = path split(START)
2. let I = count of PARTS - 1
3. let DIRS = []
4. while I >= 0,
	a. if PARTS[I] = "node_modules" CONTINUE
	c. DIR = path join(PARTS[0 .. I] + "node_modules")
	b. DIRS = DIRS + DIR
	c. let I = I - 1
5. return DIRS
```
