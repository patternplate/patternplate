'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

exports.format = format;
exports.parse = parse;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function has(token) {
	return function (item) {
		return (0, _lodash.includes)(item, token);
	};
}

function div(token) {
	return function (item) {
		return item.split(token).slice(0, 2);
	};
}

function not(fn) {
	return function () {
		return !fn.apply(undefined, arguments);
	};
}

function shove(input) {
	var index = input.length - 1;
	if (input[index] === '/') {
		return input.slice(0, index);
	}
	return input;
}

function format() {
	var parsed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	var query = (0, _entries2.default)(parsed.query || {}).reduce(function (result, entry) {
		return [].concat((0, _toConsumableArray3.default)(result), [entry.join('--')]);
	}, []);

	var extension = _path2.default.extname(parsed.pathname || '');

	var before = extension ? _path2.default.dirname(parsed.pathname) : shove(parsed.pathname);
	var after = extension ? _path2.default.basename(parsed.pathname) : '';

	return [before].concat((0, _toConsumableArray3.default)(query), [after]).filter(Boolean).join('/');
}

function parse() {
	var urlPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	var parsed = _url2.default.parse(urlPath);
	var raw = parsed.pathname || '';

	var pathname = raw.split('/').filter(not(has('--'))).join('/');

	var query = raw.split('/').filter(has('--')).map(div('--')).reduce(function (registry, entry) {
		var _entry = (0, _slicedToArray3.default)(entry, 2),
		    key = _entry[0],
		    value = _entry[1];

		registry[key] = value;
		return registry;
	}, {});

	return {
		pathname: pathname,
		query: query
	};
}

exports.default = { parse: parse, format: format };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi91dGlscy91cmwtcXVlcnkuanMiXSwibmFtZXMiOlsiZm9ybWF0IiwicGFyc2UiLCJoYXMiLCJ0b2tlbiIsIml0ZW0iLCJkaXYiLCJzcGxpdCIsInNsaWNlIiwibm90IiwiZm4iLCJzaG92ZSIsImlucHV0IiwiaW5kZXgiLCJsZW5ndGgiLCJwYXJzZWQiLCJxdWVyeSIsInJlZHVjZSIsInJlc3VsdCIsImVudHJ5Iiwiam9pbiIsImV4dGVuc2lvbiIsImV4dG5hbWUiLCJwYXRobmFtZSIsImJlZm9yZSIsImRpcm5hbWUiLCJhZnRlciIsImJhc2VuYW1lIiwiZmlsdGVyIiwiQm9vbGVhbiIsInVybFBhdGgiLCJyYXciLCJtYXAiLCJyZWdpc3RyeSIsImtleSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7UUF3QmdCQSxNLEdBQUFBLE07UUFZQUMsSyxHQUFBQSxLOztBQXBDaEI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsU0FBU0MsR0FBVCxDQUFhQyxLQUFiLEVBQW9CO0FBQ25CLFFBQU87QUFBQSxTQUFRLHNCQUFTQyxJQUFULEVBQWVELEtBQWYsQ0FBUjtBQUFBLEVBQVA7QUFDQTs7QUFFRCxTQUFTRSxHQUFULENBQWFGLEtBQWIsRUFBb0I7QUFDbkIsUUFBTztBQUFBLFNBQVFDLEtBQUtFLEtBQUwsQ0FBV0gsS0FBWCxFQUFrQkksS0FBbEIsQ0FBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsQ0FBUjtBQUFBLEVBQVA7QUFDQTs7QUFFRCxTQUFTQyxHQUFULENBQWFDLEVBQWIsRUFBaUI7QUFDaEIsUUFBTztBQUFBLFNBQWEsQ0FBQ0EsOEJBQWQ7QUFBQSxFQUFQO0FBQ0E7O0FBRUQsU0FBU0MsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ3JCLEtBQU1DLFFBQVFELE1BQU1FLE1BQU4sR0FBZSxDQUE3QjtBQUNBLEtBQUlGLE1BQU1DLEtBQU4sTUFBaUIsR0FBckIsRUFBMEI7QUFDekIsU0FBT0QsTUFBTUosS0FBTixDQUFZLENBQVosRUFBZUssS0FBZixDQUFQO0FBQ0E7QUFDRCxRQUFPRCxLQUFQO0FBQ0E7O0FBRU0sU0FBU1gsTUFBVCxHQUE2QjtBQUFBLEtBQWJjLE1BQWEsdUVBQUosRUFBSTs7QUFDbkMsS0FBTUMsUUFBUSx1QkFBZUQsT0FBT0MsS0FBUCxJQUFnQixFQUEvQixFQUNaQyxNQURZLENBQ0wsVUFBQ0MsTUFBRCxFQUFTQyxLQUFUO0FBQUEsb0RBQXVCRCxNQUF2QixJQUErQkMsTUFBTUMsSUFBTixDQUFXLElBQVgsQ0FBL0I7QUFBQSxFQURLLEVBQzZDLEVBRDdDLENBQWQ7O0FBR0EsS0FBTUMsWUFBWSxlQUFLQyxPQUFMLENBQWFQLE9BQU9RLFFBQVAsSUFBbUIsRUFBaEMsQ0FBbEI7O0FBRUEsS0FBTUMsU0FBU0gsWUFBWSxlQUFLSSxPQUFMLENBQWFWLE9BQU9RLFFBQXBCLENBQVosR0FBNENaLE1BQU1JLE9BQU9RLFFBQWIsQ0FBM0Q7QUFDQSxLQUFNRyxRQUFRTCxZQUFZLGVBQUtNLFFBQUwsQ0FBY1osT0FBT1EsUUFBckIsQ0FBWixHQUE2QyxFQUEzRDs7QUFFQSxRQUFPLENBQUNDLE1BQUQsMENBQVlSLEtBQVosSUFBbUJVLEtBQW5CLEdBQTBCRSxNQUExQixDQUFpQ0MsT0FBakMsRUFBMENULElBQTFDLENBQStDLEdBQS9DLENBQVA7QUFDQTs7QUFFTSxTQUFTbEIsS0FBVCxHQUE2QjtBQUFBLEtBQWQ0QixPQUFjLHVFQUFKLEVBQUk7O0FBQ25DLEtBQU1mLFNBQVMsY0FBSWIsS0FBSixDQUFVNEIsT0FBVixDQUFmO0FBQ0EsS0FBTUMsTUFBTWhCLE9BQU9RLFFBQVAsSUFBbUIsRUFBL0I7O0FBRUEsS0FBTUEsV0FBV1EsSUFBSXhCLEtBQUosQ0FBVSxHQUFWLEVBQ2ZxQixNQURlLENBQ1JuQixJQUFJTixJQUFJLElBQUosQ0FBSixDQURRLEVBRWZpQixJQUZlLENBRVYsR0FGVSxDQUFqQjs7QUFJQSxLQUFNSixRQUFRZSxJQUFJeEIsS0FBSixDQUFVLEdBQVYsRUFDWnFCLE1BRFksQ0FDSnpCLElBQUksSUFBSixDQURJLEVBRVo2QixHQUZZLENBRVIxQixJQUFJLElBQUosQ0FGUSxFQUdaVyxNQUhZLENBR0wsVUFBQ2dCLFFBQUQsRUFBV2QsS0FBWCxFQUFxQjtBQUFBLDRDQUNQQSxLQURPO0FBQUEsTUFDckJlLEdBRHFCO0FBQUEsTUFDaEJDLEtBRGdCOztBQUU1QkYsV0FBU0MsR0FBVCxJQUFnQkMsS0FBaEI7QUFDQSxTQUFPRixRQUFQO0FBQ0EsRUFQWSxFQU9WLEVBUFUsQ0FBZDs7QUFTQSxRQUFPO0FBQ05WLG9CQURNO0FBRU5QO0FBRk0sRUFBUDtBQUlBOztrQkFFYyxFQUFDZCxZQUFELEVBQVFELGNBQVIsRSIsImZpbGUiOiJ1cmwtcXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB1cmwgZnJvbSAndXJsJztcbmltcG9ydCB7aW5jbHVkZXN9IGZyb20gJ2xvZGFzaCc7XG5cbmZ1bmN0aW9uIGhhcyh0b2tlbikge1xuXHRyZXR1cm4gaXRlbSA9PiBpbmNsdWRlcyhpdGVtLCB0b2tlbik7XG59XG5cbmZ1bmN0aW9uIGRpdih0b2tlbikge1xuXHRyZXR1cm4gaXRlbSA9PiBpdGVtLnNwbGl0KHRva2VuKS5zbGljZSgwLCAyKTtcbn1cblxuZnVuY3Rpb24gbm90KGZuKSB7XG5cdHJldHVybiAoLi4uYXJncykgPT4gIWZuKC4uLmFyZ3MpO1xufVxuXG5mdW5jdGlvbiBzaG92ZShpbnB1dCkge1xuXHRjb25zdCBpbmRleCA9IGlucHV0Lmxlbmd0aCAtIDE7XG5cdGlmIChpbnB1dFtpbmRleF0gPT09ICcvJykge1xuXHRcdHJldHVybiBpbnB1dC5zbGljZSgwLCBpbmRleCk7XG5cdH1cblx0cmV0dXJuIGlucHV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHBhcnNlZCA9IHt9KSB7XG5cdGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmVudHJpZXMocGFyc2VkLnF1ZXJ5IHx8IHt9KVxuXHRcdC5yZWR1Y2UoKHJlc3VsdCwgZW50cnkpID0+IFsuLi5yZXN1bHQsIGVudHJ5LmpvaW4oJy0tJyldLCBbXSk7XG5cblx0Y29uc3QgZXh0ZW5zaW9uID0gcGF0aC5leHRuYW1lKHBhcnNlZC5wYXRobmFtZSB8fCAnJyk7XG5cblx0Y29uc3QgYmVmb3JlID0gZXh0ZW5zaW9uID8gcGF0aC5kaXJuYW1lKHBhcnNlZC5wYXRobmFtZSkgOiBzaG92ZShwYXJzZWQucGF0aG5hbWUpO1xuXHRjb25zdCBhZnRlciA9IGV4dGVuc2lvbiA/IHBhdGguYmFzZW5hbWUocGFyc2VkLnBhdGhuYW1lKSA6ICcnO1xuXG5cdHJldHVybiBbYmVmb3JlLCAuLi5xdWVyeSwgYWZ0ZXJdLmZpbHRlcihCb29sZWFuKS5qb2luKCcvJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZSh1cmxQYXRoID0gJycpIHtcblx0Y29uc3QgcGFyc2VkID0gdXJsLnBhcnNlKHVybFBhdGgpO1xuXHRjb25zdCByYXcgPSBwYXJzZWQucGF0aG5hbWUgfHwgJyc7XG5cblx0Y29uc3QgcGF0aG5hbWUgPSByYXcuc3BsaXQoJy8nKVxuXHRcdC5maWx0ZXIobm90KGhhcygnLS0nKSkpXG5cdFx0LmpvaW4oJy8nKTtcblxuXHRjb25zdCBxdWVyeSA9IHJhdy5zcGxpdCgnLycpXG5cdFx0LmZpbHRlcigoaGFzKCctLScpKSlcblx0XHQubWFwKGRpdignLS0nKSlcblx0XHQucmVkdWNlKChyZWdpc3RyeSwgZW50cnkpID0+IHtcblx0XHRcdGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5O1xuXHRcdFx0cmVnaXN0cnlba2V5XSA9IHZhbHVlO1xuXHRcdFx0cmV0dXJuIHJlZ2lzdHJ5O1xuXHRcdH0sIHt9KTtcblxuXHRyZXR1cm4ge1xuXHRcdHBhdGhuYW1lLFxuXHRcdHF1ZXJ5XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtwYXJzZSwgZm9ybWF0fTtcbiJdfQ==