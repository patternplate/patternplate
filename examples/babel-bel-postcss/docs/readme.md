# Example: babel-bel-postcss

* Transpiles JavaScript via `babel`
* Uses `bel` for rendering
* Processes CSS via `PostCSS`

## Integration

patternplate finds applicable demo modules by reading
source-map entries from files matching `lib/**/demo.js`.

As the demo modules do not export `css` and `html`, patternplate
checks the file system for fallback artifacts at `demo.css` and `demo.html`.

When an applicable file is found, it is used as fallback for the missing
patternplate demo export. `demo.css` is used for `css`, `demo.html` from `html`

| :warning: Please note  |
|:-----------------------|
| patternplate assumes the fallback artifacts to be browser-deliverable. It will not perform any additional transformation or bundle `@imports` |

```bash
lib
└── button
    ├── demo.css # [3] contents used as fallback for .css export
    ├── demo.css.map
    ├── demo.js # [0] used as entry, no .css export
    └── demo.js.map # [1] used to find sources at src/button/
src
└── button
    ├── button.css
    ├── button.js
    ├── demo.css
    ├── demo.html
    ├── demo.js
    └── pattern.json
```
