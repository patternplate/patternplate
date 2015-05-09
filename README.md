![patternplate logo](https://git.sinnerschrader.com/uploads/group/avatar/348/patternplate-icon.png)
# patternplate
---
Create flexible, powerful and comprehensive Living Styleguides with ease.
<div style="clear:both;"></div>
</div>

# Overview

patternplate makes it easy to create Living Styleguides and helps you to modularize your frontend components consequently. patternplate uses a powerful node.js/io.js driven architecture at its core  to make splitting large projects into manageable and editable components as frictionless as possible.

### Quick start
* Install local dependencies: `npm install`
* Start as application: `npm start`
* patternplate is accessible at `localhost:1337` by default

### Creating your first pattern
* Sart patternplate, refer to the [quick start section](#quick-start)
* Create a folder in [patterns](./patterns/) `mkdir patterns/my-pattern`

* **Place a `pattern.json` in your folder `vim patterns/my-pattern/pattern.js`**

    ```json
    {
	    "name": "my-pattern",
	    "version": "0.0.1"
    }
    ```

* **Create a markup file `vim patterns/my-pattern/index.html`**

    ```html
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
* Congratulations! You just created your first pattern. Only `index.html` and `pattern.json` are required, so pop off and make more of them!

---
* See [patterns](./patterns/) folder for more examples of patterns
* Detailed documentation available in the Patterns section

# Usage
### Frontend
patternplate serves a web interface accessible at [localhost:1337](http://localhost:1337/) when started.

![patternplate screenshot](http://i.imgur.com/l7HzYo3.jpg?1)

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
