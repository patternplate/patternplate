const vm = require("vm");
const React = require("react");
const ReactDOM = require("react-dom");
const buble = require("buble");

const widgets = require("@patternplate/widgets");
const { createSearch } = require("@patternplate/search");
const {ThemeProvider} = require("@patternplate/components");

require("iframe-resizer");

document.addEventListener("DOMContentLoaded", () => {
  const stateEl = document.querySelector("[data-widget-state]");
  const {state, code: source} = JSON.parse(decodeURIComponent(stateEl.textContent));

  const result = render(source, state);

  const mountEl = document.querySelector("[data-widget-mount]");
  ReactDOM.render(result, mountEl);
});

function render(source, state) {
  const [terr, code] = transpile(source);

  if (terr) {
    return (
      <ThemeProvider theme={state.themes.light}>
        <WidgetError message={terr.message} snippet={terr.snippet}/>
      </ThemeProvider>
    );
  }

  const [err, result] = execute(code, connect(widgets, state));

  if (err) {
    return (
      <ThemeProvider theme={state.themes.light}>
        <WidgetError message={err.message} snippet={err.snippet}/>
      </ThemeProvider>
    );
  }

  return result;
}

function connect(widgets, state) {
  const search = selectSearch(state);
  const get = selectGet(state);
  const src = selectSrc(state);

  const onListClick = (e) => {
    e.preventDefault();
    const link = getMatch(e.target, "[data-id]");

    if (link) {
      const id = link.getAttribute("data-id");
      const itemType = link.getAttribute("data-type");
      window.parent.postMessage(JSON.stringify({type: "navigate", id, itemType}), "*");
    }
  };

  return {
    PatternList: (props) => {
      return (
        <ThemeProvider theme={state.themes.light}>
          <widgets.PatternList
            base={state.base}
            search={search}
            query={props.query}
            onClick={onListClick}
            />
        </ThemeProvider>
      );
    },
    ComponentList: (props) => {
      return (
        <ThemeProvider theme={state.themes.light}>
          <widgets.ComponentList
            base={state.base}
            search={search}
            query={props.query}
            onClick={onListClick}
            />
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

function getMatch(el, selector) {
  while (el) {
    if (el.nodeType !== 1) {
      el = el.parentNode;
      continue;
    }

    if (el.matches(selector)) {
      return el;
    }

    el = el.parentNode;
  }

  return null;
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

function transpile(source) {
  try {
    const {code} = buble.transform(source);
    return [null, code];
  } catch (err) {
    return [err];
  }
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

function WidgetError(props) {
  return (
    <StyledWidgetError>
      <div>{props.message}</div>
      <pre>
        {props.snippet}
      </pre>
    </StyledWidgetError>
  );
}

const StyledWidgetError = styled.div`
  background: ${props => props.theme.colors.error};
  color: #fff;
  padding: 10px 15px;
  font-family: monospace;
`;
