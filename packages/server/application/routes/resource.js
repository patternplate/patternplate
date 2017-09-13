'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _urlQuery = require('../../library/utilities/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const getComponent = require('../../library/get-component');

exports.default = application => {
	return (() => {
		var _ref = _asyncToGenerator(function* () {
			const id = this.params.id;
			const ext = this.params.ext;
			const type = id.split('/')[0];

			if (!id || !ext) {
				return this.throw(404);
			}

			if (type === 'react-mount' && ext === 'js') {
				const parsed = _urlQuery2.default.parse(this.params.id);
				const id = parsed.pathname.split('/').slice(1).join('/');
				var _parsed$query$environ = parsed.query.environment;
				const environment = _parsed$query$environ === undefined ? 'index' : _parsed$query$environ;


				const component = yield getComponent(application, id, environment);

				if (!component) {
					this.throw(404);
				}

				if (!component.buffer) {
					this.throw(404);
				}

				this.type = 'js';
				this.body = component.buffer;
				return;
			}

			const resource = application.resources.find(function (r) {
				return r.id === id;
			});

			if (!resource) {
				return this.throw(404);
			}

			const body = yield resource.content;

			if (!body) {
				return this.throw(404);
			}

			this.type = resource.type;
			this.body = body;
		});

		function resourceRoute() {
			return _ref.apply(this, arguments);
		}

		return resourceRoute;
	})();
};

module.exports = exports['default'];