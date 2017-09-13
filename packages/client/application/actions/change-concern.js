'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = undefined;

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _urlQuery = require('../utils/url-query');

const _urlQuery2 = _interopRequireDefault(_urlQuery);

const _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = changeConcern;
const type = exports.type = 'CHANGE_CONCERN';

function changeConcern(concern) {
  return function (dispatch, getState) {
    const state = getState();
    const location = state.routing.locationBeforeTransitions;
    const parsed = _urlQuery2.default.parse(location.query.source);
    const previous = parsed.pathname;
    const ext = _path2.default.extname(previous);

    const hasDemo = state.pattern.files.some((file) => {
      return file.concern === 'demo' && file.type === ext.slice(1);
    });

    const type = concern === 'index' && hasDemo ? 'source' : parsed.query.type;

    const source = _urlQuery2.default.format({
      pathname: _path2.default.dirname(previous) + '/' + concern + ext,
      query: _extends({}, parsed.query, {
        type
      })
    });

    dispatch((0, _.patchLocation)({
      query: {
        source
      }
    }));
  };
}

changeConcern.type = type;