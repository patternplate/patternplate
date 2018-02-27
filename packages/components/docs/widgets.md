# Widgets

```widget
const React = require('react');
const {PatternList} = require("@patternplate/widgets");

module.exports = (
  <PatternList
    query="tags=widget"
    render={(props) => {
      console.log(props);
    }}
    />
);
```
