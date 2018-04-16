const React = require("react");
const ReactDOM = require("react-dom");
const {ThemeProvider} = require("styled-components");

const widgets = require("@patternplate/widgets");
const { createSearch } = require("@patternplate/search");
const vm = require("vm");

console.warn = () => {};
require("iframe-resizer");

document.addEventListener("DOMContentLoaded", () => {
  const mountEl = document.querySelector("[data-widget-mount]");
  const stateEl = document.querySelector("[data-widget-state]");
  const {state, code} = JSON.parse(decodeURIComponent(stateEl.textContent));

  const [err, result] = execute(code, connect(widgets, state));

  if (err) {
    console.log(err);
    return;
  }

  ReactDOM.render(result, mountEl);
});

function connect(widgets, state) {
  const search = selectSearch(state);
  const get = selectGet(state);
  const src = selectSrc(state);

  return {
    PatternList: (props) => {
      return (
        <ThemeProvider theme={state.themes.light}>
          <widgets.PatternList base={state.base} search={search} query={props.query}/>
        </ThemeProvider>
      );
    },
    ComponentList: (props) => {
      return (
        <ThemeProvider theme={state.themes.light}>
          <widgets.ComponentList base={state.base} search={search} query={props.query}/>
        </ThemeProvider>
      );
    },
    PatternDemo: (props) => {
      return (
        <ThemeProvider theme={state.themes.light}>
          <widgets.PatternDemo
            id={props.id}
            get={get}
            src={src}
            reload={state.isStatic}
            />
        </ThemeProvider>
      );
    },
    ComponentDemo: (props) => {
      return (
        <ThemeProvider theme={state.themes.light}>
          <widgets.ComponentDemo
            id={props.id}
            get={get}
            src={src}
            reload={state.isStatic}
            />
        </ThemeProvider>
      );
    }
  };
}

function selectSearch(state) {
  const search = createSearch(state.pool);
  return query => {
    return search(query).map(id => state.pool.find(p => p.id === id));
  };
}

function selectGet(state) {
  return id => state.pool.filter(p => p.contentType === "pattern").find(pattern => pattern.id === id);
}

function selectSrc(state) {
  const get = selectGet(state);
  return id => {
    const item = get(id);
    if (!item) {
      return null;
    }
    if (item.contentType !== "pattern") {
      return null;
    }
    return `${prefix(state.base)}/api/demo/${item.id}.html`;
  };
}

function execute(code, widgets = {}) {
  try {
    const mod = {exports: {}};

    vm.runInNewContext(`(function() {${code}})();`, {
      module: mod,
      require(id) {
        if (id === 'react') {
          return React;
        }
        if ('@patternplate/widgets') {
          return widgets;
        }
        throw new Error(`Could not resolve ${id}`);
      }
    });

    const result = mod.exports;

    if (typeof result !== "function") {
      const err = new Error(`widget blocks must export a function, but found "${typeof result}". Make sure to export a function e.g.:`);
      err.snippet = `module.exports = () => <div>Hello World</div>;`;
      throw err;
    }

    return [null, result()];
  } catch (err) {
    return [err];
  }
}

function prefix(base) {
  return base.charAt(base.length - 1) === "/"
    ? base.slice(0, base.length - 1)
    : base;
}
