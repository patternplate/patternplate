'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = staticRouteFactory;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _path = require('path');

var _fs = require('fs');

var _resolvePath = require('resolve-path');

var _resolvePath2 = _interopRequireDefault(_resolvePath);

var _libraryUtilitiesFs = require('../../library/utilities/fs');

var notfound = ['ENOENT', 'ENAMETOOLONG', 'ENOTDIR'];

function serve(application, root) {
	var configuration = arguments[2] === undefined ? {} : arguments[2];
	var path, stats;
	return regeneratorRuntime.async(function serve$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				if (!(['HEAD', 'GET'].indexOf(this.method) === -1)) {
					context$1$0.next = 2;
					break;
				}

				return context$1$0.abrupt('return');

			case 2:
				path = this.captures[0];

				path = path[0] === '/' ? path.slice(1) : path;

				try {
					path = decodeURIComponent(path);
				} catch (err) {
					application.log.error('Could not decode path');
					application.log.debug(err);
					this['throw']('failed to decode', 400);
				}

				path = (0, _resolvePath2['default'])(root, path);

				if (!((0, _path.basename)(path)[0] === '.')) {
					context$1$0.next = 8;
					break;
				}

				return context$1$0.abrupt('return');

			case 8:
				stats = undefined;
				context$1$0.prev = 9;
				context$1$0.next = 12;
				return (0, _libraryUtilitiesFs.stat)(path);

			case 12:
				stats = context$1$0.sent;

				if (!stats.isDirectory()) {
					context$1$0.next = 15;
					break;
				}

				return context$1$0.abrupt('return');

			case 15:
				context$1$0.next = 23;
				break;

			case 17:
				context$1$0.prev = 17;
				context$1$0.t0 = context$1$0['catch'](9);

				if (!(notfound.indexOf(context$1$0.t0.code) > -1)) {
					context$1$0.next = 21;
					break;
				}

				return context$1$0.abrupt('return');

			case 21:
				context$1$0.t0.status = 500;
				throw context$1$0.t0;

			case 23:

				this.set('Last-Modified', stats.mtime.toUTCString());
				this.set('Content-Length', stats.size);
				this.set('Cache-Control', 'max-age=' + (configuration.options.maxage | 0));

				this.type = (0, _path.extname)(path);
				this.body = (0, _fs.createReadStream)(path);
				return context$1$0.abrupt('return');

			case 29:
			case 'end':
				return context$1$0.stop();
		}
	}, null, this, [[9, 17]]);
}

function staticRouteFactory(application, configuration) {
	var root = (0, _path.resolve)(application.runtime.base, application.configuration.paths['static']);
	var userStaticPath = (0, _path.resolve)(application.runtime.cwd, configuration.options.root);

	return function staticRoute() {
		var statist;
		return regeneratorRuntime.async(function staticRoute$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					statist = serve.bind(this);
					context$2$0.next = 3;
					return statist(application, root, configuration);

				case 3:
					context$2$0.next = 5;
					return statist(application, userStaticPath, configuration);

				case 5:
				case 'end':
					return context$2$0.stop();
			}
		}, null, this);
	};
}

module.exports = exports['default'];