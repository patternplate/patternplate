const color = require("color");
const React = require("react");
const styled = require("styled-components").default;
const vis = require("vis");
const themes = require("../themes");

const THEMES = themes();

const OPTIONS = {
  interaction: {
    dragNodes: true,
    selectable: true,
    hover: true,
    hoverConnectedEdges: false,
    selectConnectedEdges: false
  },
  edges: {
    color: THEMES.dark.light,
    chosen: false,
    smooth: {
      type: "continuous",
      forceDirection: "none"
    }
  },
  nodes: {
    font: {
      color: THEMES.dark.light
    },
    chosen: false,
    shape: "dot",
    color: THEMES.dark.light,
    scaling: {
      min: 10,
      max: 30,
      label: {
        enabled: false
      }
    }
  }
};

module.exports = class Network extends React.Component {
  constructor(...args) {
    super(...args);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.getRef = this.getRef.bind(this);
  }

  getRef(ref) {
    this.ref = ref;
  }

  handleBlur(e) {
    if (typeof this.props.onBlur === "function") {
      this.props.onBlur(e.node);
    }
  }

  handleHover(e) {
    if (typeof this.props.onHover === "function") {
      this.props.onHover(e.node);
    }
  }

  handleSelect(...args) {
    if (typeof this.props.onSelect === "function") {
      this.props.onSelect(...args);
    }
  }

  componentDidMount() {
    if (!this.ref) {
      return;
    }

    this.network = new vis.Network(
      this.ref,
      {
        edges: this.props.edges,
        nodes: this.props.nodes
      },
      OPTIONS
    );

    this.network.on("click", ({ nodes }) => {
      if (nodes.length > 0) {
        return this.handleSelect(nodes[0]);
      }
      this.handleSelect(null);
    });

    this.network.on("hoverNode", id => this.handleHover(id));
    this.network.on("blurNode", id => this.handleBlur(id));

    update(this.network, this.props);

    setTimeout(() => {
      this.network.setOptions({
        physics: {
          enabled: false
        }
      });
    });
  }

  componentWillUpdate(next) {
    if (!this.network) {
      return;
    }
    update(this.network, next);
  }

  render() {
    return <StyledNetworkContainer innerRef={this.getRef} />;
  }
};

function selectRelated(node, edges, active) {
  if (node.id === active) {
    return true;
  }
  if (edges.some(e => e.from === active && e.to === node.id)) {
    return true;
  }
  if (edges.some(e => e.to === active && e.from === node.id)) {
    return true;
  }
  return false;
}

function getStatusColors(status) {
  switch (status) {
    case "active":
      return THEMES.dark.active;
    case "dependency":
      return color(THEMES.dark.active)
        .desaturate(0.75)
        .darken(0.25)
        .toString();
    case "dependent":
      return color(THEMES.dark.active)
        .desaturate(0.75)
        .lighten(0.25)
        .toString();
    case "unrelated":
    default:
      return THEMES.dark.light;
  }
}

function selectEdgeColor(edge, active) {
  if (edge.from === active) {
    return getStatusColors("dependency");
  }

  if (edge.to === active) {
    return getStatusColors("dependent");
  }

  return getStatusColors("unrelated");
}

function selectNodeColor(node, edges, active) {
  const related = selectRelated(node, edges, active);
  if (!related) {
    return getStatusColors("unrelated");
  }
  if (node.id === active) {
    return getStatusColors("active");
  }
  if (edges.some(e => e.from === active && e.to === node.id)) {
    return getStatusColors("dependency");
  }
  if (edges.some(e => e.to === active && e.from === node.id)) {
    return getStatusColors("dependent");
  }
}

function update(network, props) {
  const nodes = props.nodes.get();
  const edges = props.edges.get();

  const un = nodes.map(n => {
    const detailed = n.id === props.detailed;
    const related = selectRelated(n, edges, props.active);
    const color = selectNodeColor(n, edges, props.active);

    n.color = color;

    n.font = {
      background: "#fff",
      color
    };

    if (related || detailed) {
      n.label = n.label || n._label;
      n._label = undefined;
    } else {
      n._label = n._label || n.label;
      n.label = undefined;
    }

    return n;
  });

  const ue = edges.map(e => {
    e.color = selectEdgeColor(e, props.active);
    return e;
  });

  props.nodes.update(un);
  props.edges.update(ue);
}

const StyledNetworkContainer = styled.div`
  height: 100%;
  width: 100%;
`;
