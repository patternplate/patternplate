'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _createClass = function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

const _assert = require('assert');

const _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; }  return Array.from(arr);  }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

const CODES = {
  'arrow-up': 38,
  'arrow-right': 39,
  'arrow-down': 40,
  'arrow-left': 37,
  esc: 27,
  space: 32,
  c: 67,
  d: 68,
  e: 69,
  f: 70,
  h: 72,
  i: 73,
  o: 79,
  k: 75,
  l: 76,
  m: 77,
  n: 78,
  r: 82,
  t: 84
};

const Shortcut = function () {
  function Shortcut(_ref) {
    let action = _ref.action,
        character = _ref.character,
        description = _ref.description,
        modifiers = _ref.modifiers;

    _classCallCheck(this, Shortcut);

    this.character = character;
    this.code = CODES[character];
    this.action = action;
    this.key = this.action.key;
    this.active = 'document' in global;
    this.description = description;
    this.modifiers = modifiers || ['ctrlKey', 'altKey'];
    this.bind = this.bind.bind(this);
  }

  _createClass(Shortcut, [{
    key: 'bind',
    value: function bind(store) {
      const _this = this;

      if (!this.active) {
        return;
      }
      global.addEventListener('keydown', (e) => {
        if (!_this.modifiers.every((m) => {
          return e[m];
        })) {
          return;
        }

        const code = e.data ? e.data.keyCode : e.keyCode;

        if (code !== _this.code) {
          return;
        }

        e.preventDefault();
        store.dispatch(_this.action());
      });
    }
  }, {
    key: 'toString',
    value: function toString() {
      const keys = [].concat(_toConsumableArray(this.modifiers), [this.character]).map((c) => {
        return c.replace('Key', '');
      });
      return '[' + keys.join('+') + ']';
    }
  }]);

  return Shortcut;
}();

exports.default = Shortcut;