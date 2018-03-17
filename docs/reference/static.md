---
tags:
  - Reference
options:
  order: 17
---

# Reference: Static Files

Static files such as images, fonts, videos etc. can
be saved into the `./static` folder and referenced
from other resources in `patternplate` via the 
`api/static` route.

## Example

A `patternplate` server that starts in the file tree below
will expose the following routes: 

```
❯ tree .
.
├── patternplate.config.js
└── static
    ├── intro.mp4
    ├── logo.svg
    └── mood.png
```

| Route | File |
|:--|:--
| `/api/static/intro.mp4` | static/intro.mp4 
| `/api/static/logo.svg` | static/logo.svg 
| `/api/static/mood.png` | static/mood.png 
