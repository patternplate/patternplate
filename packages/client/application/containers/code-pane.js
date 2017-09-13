'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _xmldom = require('xmldom');

const _pretty = require('pretty');

const _pretty2 = _interopRequireDefault(_pretty);

const _reactRedux = require('react-redux');

const _reselect = require('reselect');

const _behaviours = require('../behaviours');

const _codePane = require('../components/code-pane');

const _codePane2 = _interopRequireDefault(_codePane);

const _item = require('../selectors/item');

const item = _interopRequireWildcard(_item);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; }  return Array.from(arr);  }

// Import * as actions from '../actions';


exports.default = (0, _reactRedux.connect)(mapProps)((0, _behaviours.skippable)((0, _behaviours.mountable)(_codePane2.default)));


const parser = new _xmldom.DOMParser();
const serializer = new _xmldom.XMLSerializer();

const selectDemoSource = (0, _reselect.createSelector)((state) => {
  return state.demo.contents;
}, (docSource) => {
  if (typeof docSource !== 'string') {
    return docSource;
  }
  const doc = parser.parseFromString(docSource, 'text/html');
  const container = findContainer(doc);
  const serialized = serializer.serializeToString(container, 'text/html');
  const start = serialized.replace(/^<div xmlns="http:\/\/www\.w3\.org\/1999\/xhtml">/, '');
  return start.replace(/<\/div>$/, '');
});

const selectSource = (0, _reselect.createSelector)(selectDemoSource, (contents) => {
  return typeof contents === 'string' ? (0, _pretty2.default)(contents) : contents;
});

function findContainer(doc) {
  const body = [].concat(_toConsumableArray(doc.documentElement.childNodes)).find((node) => {
    return node.nodeName.toLowerCase() === 'body';
  });
  return [].concat(_toConsumableArray(body.childNodes)).find((node) => {
    return node.nodeName.toLowerCase() === 'div';
  });
}

function mapProps(state) {
  return {
    active: item.selectType(state) === 'pattern',
    env: item.selectEnv(state),
    source: selectSource(state)
  };
}