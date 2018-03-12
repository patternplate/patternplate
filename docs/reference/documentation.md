---
tags:
  - Reference
options:
  order: 13
---

# Reference: Documentation

`patternplate` supports Markdown for global as well as pattern documentation.

Markdown in `patternplate` supports all features of [GitHub flavored markdown][github-flavored-markdown].

Additionally you can configure the order and display of documentation [frontmatter][frontmatter] blocks.

## Global documentation

Pattern independent documentation is picked according to the `docs` glob pattern
in `patternplate.config.js`. The default is `["docs/**/*.md", "README.md"]`. 

This means in the tree below `README.md`, `docs/readme.md` and `docs/design/colors.md`
is picked up.

```bash
tree .
.
├── CHANGELOG.md
├── README.md
└── docs
    ├── design
    │   └── colors.md
    └── readme.md

2 directories, 4 files
```

By default the first `#` headline in the document is the name of the doc item in `patternplate`'s sidebar. If no `#` headline is found the filename is used instead. 

## Local documentation

Documentation that relates to a single pattern  is placed next to the pattern sources.

The supported file names are `README.md`, `readme.md` and `index.md`. 

Those files are rendered below the demo of their pattern.

## Frontmatter 

Documentation in patternplate entries support [frontmatter][frontmatter] blocks. Supported
properties are: `order` and `options.displayName`.

* **displayName**: String, Name of the doc item in the sidebar
* **options.order**: Integer, position in the documentation list. Lower numbers are listed first
* **options.query**: String, search query. The file is considered a virtual folder. Matching items will be displayed as children.

```md
–––
displayName: Read this first
options:
  order: 0 # first in sidebar
–––
```

## Related

* [Reference: Configuration](./doc/docs/reference/configuration)
* [Reference: Widgets](./doc/docs/reference/widgets)

[frontmatter]: https://jekyllrb.com/docs/frontmatter/
[github-flavored-markdown]: https://guides.github.com/features/mastering-markdown/
