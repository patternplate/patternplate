![patternplate logo](https://cdn.rawgit.com/sinnerschrader/patternplate/master/static/images/logo.svg)

# patternplate

Create flexible, powerful and comprehensive Living Styleguides with ease.

# Overview

patternplate makes it easy to create Living Styleguides and helps you to modularize your frontend components consequently. It uses a powerful node.js/io.js driven architecture at its core  to make splitting large projects into manageable and editable components as frictionless as possible.

### Quick start
#### As local dependency (preferred)
* Install: `npm install --save patternplate`
* Add start scripts to your `package.json`:

```json
{
  "scripts": {
    "start": "npm run patternplate",
    "console": "npm run patternplate-console",
    "patternplate": "patternplate",
    "patternplate-console": "patternplate-console"
  }
}
```

* Start: `npm start`

#### As global dependency
* Install: `npm install -g patternplate`
* Start: `patternplate`

### Creating your first pattern
* Start patternplate, refer to the [quick start section](#quick-start)
* Create a folder in [patterns](./patterns/) `mkdir -p patterns/my-pattern`

* **Place a `pattern.json` in your folder `vim patterns/my-pattern/pattern.js`**

    ```json
    {
	    "name": "my-pattern",
	    "version": "0.0.1"
    }
    ```

* **Create a markup file `vim patterns/my-pattern/index.jsx`**

    ```jsx
	<div className="my-pattern">
		Hello <span className="em">patternplate</span>, this is my first pattern.
	</div>
    ```

* **Create a documentation file `vim patterns/my-pattern/index.md`**

     ```markdown
    ### My Pattern
    * I could document it here, but it does not do a thing
    ```

* **Create a styling file `vim patterns/my-pattern/index.less`**

     ```less
    .my-pattern{
        color: #000;
        .em{
            font-weight: bold;
            color: #333;
        }
    }
    ```

* **Create a scripting file `vim patterns/my-pattern/index.js`**

    ```js
    console.log('Hello patternplate, this is my first pattern.');
    ```


* Visit [localhost:1337/pattern/my-pattern](http://localhost:1337/pattern/my-pattern) to see it in action
* Congratulations! You just created your first pattern. Only `index.jsx` and `pattern.json` are required, so pop off and make more of them!

---
* See [patterns](./patterns/) folder for more examples of patterns
* Detailed documentation available in the Patterns section

# Usage
### Frontend
patternplate serves a web interface accessible at [localhost:1337](http://localhost:1337/) when started.

---
Detailed documentation available at [Fronted Usage](./documentation/usage/frontage.md)

### CLI
patternplate exposes a command line interface with reduced options. This will be expanded in short notice.
```bash
patternplate
	[--patterncwd='./']
	  Path to the basepath where the parseable pattern tree is to be found
		patternplate --patterncwd ./ # Searches in ./patterns
		patternplate --patterncwd ./test # Searches in ./test/patterns
	[--cwd='./']
		Path where patternplate-server reads configuration and dynamic applicaton parts
```
---
Detailed documentation available at [CLI Usage](./documentation/usage/cli.md)

### API
patternplate is a CommonJS module. Its export has reduced options. This will be expanded in short notice.
```javascript
import patternplate from 'patternplate';

let application = patternplate({
	'patterncwd': './', // Searches in ./patterns
	'cwd': './' // Read configuration from ./
});
```
---
Detailed documentation available at [API Usage](./documentation/usage/api.md)
# Development

### Global Dependencies
* node `>= v0.12.0` or io `>= v1.4.4`
* npm `>= 2.5.1`


### Version specifics
* patternplate < v0.11.8 relied on using relative https urls to resolve dependencies hosted on git.sinnerschrader.com. Relative urls are not supported as of npm >= 0.12.1. If you are bound on using a patternplate version < 0.10.8 downgrade your npm to 0.12.0 or lower.
