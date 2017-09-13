'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.mapDispatch = mapDispatch;

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _infoPane = require('../components/info-pane');

var _infoPane2 = _interopRequireDefault(_infoPane);

var _item = require('../selectors/item');

var item = _interopRequireWildcard(_item);

var _withToggleStates = require('../connectors/with-toggle-states');

var _withToggleStates2 = _interopRequireDefault(_withToggleStates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function mapProps(state) {
	return {
		active: item.selectActive(state),
		demoDependencies: item.selectDemoDependencies(state),
		demoDependents: item.selectDemoDependents(state),
		dependencies: item.selectDependencies(state),
		dependents: item.selectDependents(state),
		env: item.selectEnv(state),
		envs: item.selectEnvs(state),
		flag: item.selectFlag(state),
		id: function id(state) {
			return state.id;
		},
		icon: item.selectIcon(state),
		type: item.selectType(state),
		name: item.selectName(state),
		mount: item.selectAutomount(state),
		manifest: item.selectManifest(state),
		tags: item.selectTags(state),
		version: item.selectVersion(state)
	};
}

function mapDispatch(dispatch) {
	return (0, _redux.bindActionCreators)({
		onEnvChange: function onEnvChange(e) {
			return actions.changeEnvironment(e.target.value);
		},
		onMountChange: function onMountChange(e) {
			return actions.toggleMount({ forced: e.target.checked });
		}
	}, dispatch);
}

exports.default = (0, _withToggleStates2.default)((0, _reactRedux.connect)(mapProps, mapDispatch)(_infoPane2.default));