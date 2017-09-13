'use strict';

var React = require('react');
var NavigationItem = require('../navigation-item');
// Const Flag = require('flag');

module.exports = NavigationTree;

function NavigationTree(props) {
  return React.createElement(
    'div',
    { className: props.className },
    props.children,
    (props.data || []).filter(function (item) {
      return typeof item.manifest === 'object';
    }).map(function (item) {
      var hidden = (item.manifest.options || {}).hidden || false;
      var icon = selectSymbol(props, item);
      var iconActive = selectActiveSymbol(props, item);

      return React.createElement(
        NavigationItem,
        {
          key: item.id,
          active: item.active,
          hidden: hidden,
          href: item.href,
          id: item.id /*
                      Meta={item.warnings.map(warning => {
                      switch (warning.type) {
                      case 'flag':
                      default:
                        return <Flag key={warning.value} title={warning.message}>{warning.value}</Flag>;
                      }
                      })} */
          , name: item.manifest.displayName,
          onClick: props.onItemClick,
          onScrollRequest: props.onScrollRequest,
          prefix: props.prefix,
          symbol: icon,
          symbolActive: iconActive,
          type: item.type
        },
        item.type === 'folder' && React.createElement(NavigationTree, {
          active: props.active,
          data: item.children,
          id: item.id,
          onClick: props.onItemClick,
          onScrollRequest: props.onScrollRequest,
          prefix: item.prefix
        })
      );
    })
  );
}

function selectActiveSymbol(props, item) {
  if (item.type === 'pattern') {
    return null;
  }

  if (item.manifest.options.iconActive) {
    return item.manifest.options.iconActive;
  }

  return item.type;
}

function selectSymbol(props, item) {
  if (item.type === 'pattern') {
    return null;
  }

  if (item.manifest.options.icon) {
    return item.manifest.options.icon;
  }

  return item.type;
}
//# sourceMappingURL=index.js.map