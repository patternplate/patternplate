const React = require("react");
const Themer = require("../demo-themer");
const Markdown = require(".");

const demoMarkdown = `
# This is an h1 tag
## This is an h2 tag
###### This is an <h6> tag

*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

* Item 1
* Item 2
  * Item 2a
  * Item 2b

1. Item 1
1. Item 2
1. Item 3
    1. Item 3a
    1. Item 3b

http://github.com - automatic!
[GitHub](http://github.com)

As Kanye West said:

> We're living the future so
> the present is our past.

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item


First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
`;

module.exports = () => (
  <Themer>
    <Markdown source={demoMarkdown} />
  </Themer>
);
