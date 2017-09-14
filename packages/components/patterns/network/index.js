const React = require('react');
const styled = require('styled-components').default;
const vis = require('vis');
const themes = require('../themes');

const THEMES = themes();

const OPTIONS = {
  interaction: {
    dragNodes: true,
    selectable: true,
    hover: false,
    hoverConnectedEdges: false,
    selectConnectedEdges: false
  },
  physics: false,
  edges: {
    arrows: {
      to: {
        enabled: true,
        scaleFactor: 0.9
      }
    },
    color: THEMES.dark.light,
    chosen: false,
    smooth: {
      type: 'continuous'
    }
  },
  manipulation: {
    enabled: false
  },
  nodes: {
    shape: 'dot',
    color: THEMES.dark.light,
    fixed: {
      x: true,
      y: true
    },
    scaling: {
      min: 10,
      max: 30,
      label: {
        min: 8,
        max: 30,
        drawThreshold: 12,
        maxVisible: 20
      }
    }
  }
};

module.exports = class Network extends React.Component {
  constructor(...args) {
    super(...args);
    this.handleSelect = this.handleSelect.bind(this);
    this.getRef = this.getRef.bind(this);
  }

  getRef(ref) {
    this.ref = ref;
  }

  handleSelect(...args) {
    if (typeof this.props.onSelect === 'function') {
      this.props.onSelect(...args);
    }
  }

  componentDidMount() {
    if (!this.ref) {
      return;
    }

    this.network = new vis.Network(this.ref, {
      edges: this.props.edges,
      nodes: this.props.nodes
    }, OPTIONS);

    this.network.on('click', ({nodes}) => {
      if (nodes.length > 0) {
        return this.handleSelect(nodes[0]);
      }
      this.handleSelect(null);
    });

    update(this.network, this.props);
  }

  componentWillUpdate(next) {
    if (!this.network) {
      return;
    }
    update(this.network, next);
  }

  render() {
    return <StyledNetworkContainer innerRef={this.getRef}/>;
  }
}

function update(network, props) {
  const nodes = props.nodes.get();
  const edges = props.edges.get();

  const names = [
    props.active,
    ...network.getConnectedNodes(props.active)
  ];

  const un = nodes
    .map(n => {
      if (names.includes(n.id)) {
        n.color = THEMES.dark.active;
        n.label = n.label || n._label;
        n._label = undefined;
      } else {
        n._label = n._label || n.label;
        n.label = undefined;
        n.color = THEMES.dark.light;
      }
      return n;
    });

  const ue = edges
    .map(e => {
      if (e.from === props.active) {
        e.color = THEMES.dark.active;
      }

      if (e.to === props.active) {
        e.color = THEMES.dark.info;
      }

      if (e.from !== props.active && e.to !== props.active) {
        e.color = THEMES.dark.light;
      }

      return e;
    });

  props.nodes.update(un);
  props.edges.update(ue);
}

const StyledNetworkContainer = styled.div`
  height: 100%;
  width: 100%;
`;
