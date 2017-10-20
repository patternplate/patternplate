const React = require("react");
const vis = require("vis");
const Network = require(".");

const NODES = new vis.DataSet([
  {
    id: "button",
    label: "button",
    value: 4,
    mass: 40
  },
  {
    id: "code",
    label: "code",
    value: 2
  },
  {
    id: "code-pane",
    label: "code-pane",
    value: 0
  },
  {
    id: "flag",
    label: "flag",
    value: 1
  },
  {
    id: "fonts",
    label: "fonts",
    value: 4,
    mass: 4
  },
  {
    id: "icon",
    label: "icon",
    value: 3,
    mass: 3
  },
  {
    id: "link",
    label: "link",
    value: 3,
    mass: 30
  },
  {
    id: "info-pane",
    label: "info-pane",
    value: 0
  },
  {
    id: "navigation-item",
    label: "navigation-item",
    value: 1
  },
  {
    id: "navigation-tree",
    label: "navigation-item",
    value: 0
  },
  {
    id: "text",
    label: "text",
    value: 1
  },
  {
    id: "themes",
    label: "themes",
    value: 0
  },
  {
    id: "navigation-toolbar",
    label: "navigation-toolbar",
    value: 1
  },
  {
    id: "main-navigation",
    label: "main-navigation",
    value: 0
  },
  {
    id: "main-header",
    label: "main-header",
    value: 1
  }
]);

const LINKS = new vis.DataSet([
  {
    from: "button",
    to: "fonts"
  },
  {
    from: "button",
    to: "icon"
  },
  {
    from: "button",
    to: "link"
  },
  {
    from: "code-pane",
    to: "code"
  },
  {
    from: "flag",
    to: "fonts"
  },
  {
    from: "text",
    to: "fonts"
  },
  {
    from: "link",
    to: "fonts"
  },
  {
    from: "navigation-item",
    to: "link"
  },
  {
    from: "info-pane",
    to: "link"
  },
  {
    from: "info-pane",
    to: "text"
  },
  {
    from: "info-pane",
    to: "icon"
  },
  {
    from: "info-pane",
    to: "flag"
  },
  {
    from: "info-pane",
    to: "code"
  },
  {
    from: "navigation-tree",
    to: "navigation-item"
  },
  {
    from: "navigation-toolbar",
    to: "button",
    dashes: true,
    color: "#ddd"
  },
  {
    from: "main-navigation",
    to: "main-header"
  },
  {
    from: "main-navigation",
    to: "navigation-toolbar"
  },
  {
    from: "main-navigation",
    to: "navigation-tree"
  },
  {
    from: "main-navigation",
    to: "button",
    dashes: true,
    color: "#ddd"
  },
  {
    from: "main-header",
    to: "fonts"
  },
  {
    from: "main-header",
    to: "icon"
  }
]);

module.exports = class NetworkDemo extends React.Component {
  constructor(...args) {
    super(...args);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = { active: null, detailed: null };
  }

  handleSelect(active) {
    this.setState(Object.assign(this.state, { active }));
  }

  handleHover(id) {
    this.setState(Object.assign(this.state, { detailed: id }));
  }

  handleBlur() {
    this.setState(Object.assign(this.state, { detailed: null }));
  }

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Network
          active={this.state.active}
          detailed={this.state.detailed}
          nodes={NODES}
          edges={LINKS}
          width={500}
          height={500}
          onSelect={this.handleSelect}
          onHover={this.handleHover}
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
};
