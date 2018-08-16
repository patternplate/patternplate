module.exports = {
  "presets": [
    "@babel/preset-react",
    [
      "module:@patternplate/babel-preset",
      {
        "targets": [
          "node",
          "web"
        ],
        "sources": [
          "react",
          "styled-components"
        ]
      }
    ]
  ]
};
