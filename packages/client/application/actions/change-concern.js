'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.type = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _urlQuery = require('../utils/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = changeConcern;
var type = exports.type = 'CHANGE_CONCERN';

function changeConcern(concern) {
  return function (dispatch, getState) {
    var state = getState();
    var location = state.routing.locationBeforeTransitions;
    var parsed = _urlQuery2.default.parse(location.query.source);
    var previous = parsed.pathname;
    var ext = _path2.default.extname(previous);

    var hasDemo = state.pattern.files.some(function (file) {
      return file.concern === 'demo' && file.type === ext.slice(1);
    });

    var type = concern === 'index' && hasDemo ? 'source' : parsed.query.type;

    var source = _urlQuery2.default.format({
      pathname: _path2.default.dirname(previous) + '/' + concern + ext,
      query: _extends({}, parsed.query, {
        type: type
      })
    });

    dispatch((0, _.patchLocation)({
      query: {
        source: source
      }
    }));
  };
}

changeConcern.type = type;