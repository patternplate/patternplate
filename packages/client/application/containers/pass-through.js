'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

const _lodash = require('lodash');

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(mapProps)(PassThrough);


function PassThrough(props) {
  return _react2.default.createElement(
    'div',
    null,
    props.items.map((_ref) => {
      let _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          value = _ref2[1];

      return _react2.default.createElement('input', { type: 'hidden', key: name, name, value });
    })
  );
}

function mapProps(state, own) {
  const query = state.routing.locationBeforeTransitions.query;

  const q = _extends({}, query, own.query || {});
  const items = (0, _lodash.entries)(q).filter((_ref3) => {
    let _ref4 = _slicedToArray(_ref3, 2),
        value = _ref4[1];

    return value !== null;
  });
  return { items };
}