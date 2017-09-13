'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _path = require('path');

const routes = {
  path: ['application/routes'],
  enabled: {
    index: {
      enabled: true,
      path: '/'
    },
    pattern: {
      enabled: true,
      path: '/pattern/:id+',
      options: {
        key: 'patterns'
      }
    },
    resource: {
      enabled: true,
      path: '/resource/:id+.:ext'
    },
    docs: {
      enabled: true,
      path: '/docs/:id+'
    },
    file: {
      enabled: true,
      path: '/file/:id+'
    },
    static: {
      options: {
        root: [(0, _path.resolve)(__dirname, '../', 'static'), (0, _path.resolve)(process.cwd(), 'static')]
      }
    }
  }
};

exports.default = routes;
module.exports = exports.default;