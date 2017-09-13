'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _classnames = require('classnames');

const _classnames2 = _interopRequireDefault(_classnames);

const _components = require('@patternplate/components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Select;


function Select(props) {
  const className = (0, _classnames2.default)('select', props.className);

  return _react2.default.createElement(
    'label',
    { className },
    _react2.default.createElement(
      'select',
      {
        className: 'select__native',
        onChange: props.onChange,
        value: props.value.value
      },
      props.options.map((_ref) => {
        let value = _ref.value,
            name = _ref.name;

        return _react2.default.createElement(
          'option',
          { key: value, value },
          name
        );
      })
    ),
    _react2.default.createElement(
      'span',
      { className: 'select__label' },
      props.label
    ),
    _react2.default.createElement(
      'div',
      { className: 'select__body' },
      _react2.default.createElement(
        'span',
        { className: 'select__value' },
        props.value.name
      ),
      _react2.default.createElement(_components.Icon, { base: props.base, className: 'select__icon', symbol: 'arrow-right' })
    )
  );
}