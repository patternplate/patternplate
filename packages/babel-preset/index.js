const merge = require("lodash.merge");

module.exports = preset;

const DEFAULTS = {
  targets: [],
  sources: []
};

function preset(_, options) {
  const opts = merge({}, DEFAULTS, options);

  if (opts.targets.length === 0) {
    opts.targets = ["node"];
  }

  return {
    presets: selectPresets(opts),
    plugins: selectPlugins(opts)
  };
}

function selectPresets(options) {
  const presets = [
    [
      "@babel/preset-env",
      {
        targets: selectTargets(options),
        exclude: [
          "transform-regenerator",
          "transform-async-to-generator"
        ]
      }
    ]
  ];

  if (options.sources.indexOf("react") > -1) {
    presets.push("@babel/preset-react");
  }

  return presets;
}

function selectPlugins(options) {
  const plugins = [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread"
  ];

  if (options.sources.indexOf("styled-components") > -1) {
    plugins.push("babel-plugin-styled-components");
  }

  return plugins;
}

function selectTargets(options) {
  const targets = {};

  if (options.targets.indexOf("web") > -1) {
    targets.browsers = [
      "last 1 versions",
      "not ie > 0"
    ];
  }

  if (options.targets.indexOf("node") > -1) {
    targets.node = "8";
  }

  return targets;
}
