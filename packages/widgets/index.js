// Explicit drilling requires to avoid circular references
const ComponentList = require("@patternplate/components/lib/widgets/component-list");
const ComponentDemo = require("@patternplate/components/lib/widgets/component-demo");
const Disabled = require("@patternplate/components/lib/widgets/disabled");

module.exports = {
  ComponentList,
  ComponentDemo,
  Disabled,
  PatternList: ComponentList,
  PatternDemo: ComponentDemo,
};
