'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var routes = {
	path: ['application/routes', 'application/patternplate-client/routes'],
	enabled: {
		index: {
			enabled: true,
			path: '/'
		},
		pattern: {
			enabled: true,
			path: '/pattern/:path+'
		},
		demo: {
			enabled: true,
			path: '/demo/:id+'
		},
		docs: {
			enabled: true,
			path: '/doc/:path+'
		},
		component: {
			enabled: true,
			path: '/demo/:id+/component.js'
		},
		script: {
			enabled: true,
			path: '/script/:path+'
		},
		style: {
			enabled: true,
			path: '/style/:path+'
		},
		static: {
			enabled: true,
			path: '/static/:path+'
		},
		zcatch: {
			enabled: true,
			path: '!(/api/)(.*)'
		}
	}
};

exports.default = routes;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jb25maWd1cmF0aW9uL3JvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJwYXRoIiwiZW5hYmxlZCIsImluZGV4IiwicGF0dGVybiIsImRlbW8iLCJkb2NzIiwiY29tcG9uZW50Iiwic2NyaXB0Iiwic3R5bGUiLCJzdGF0aWMiLCJ6Y2F0Y2giXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsU0FBUztBQUNkQyxPQUFNLENBQ0wsb0JBREssRUFFTCx3Q0FGSyxDQURRO0FBS2RDLFVBQVM7QUFDUkMsU0FBTztBQUNORCxZQUFTLElBREg7QUFFTkQsU0FBTTtBQUZBLEdBREM7QUFLUkcsV0FBUztBQUNSRixZQUFTLElBREQ7QUFFUkQsU0FBTTtBQUZFLEdBTEQ7QUFTUkksUUFBTTtBQUNMSCxZQUFTLElBREo7QUFFTEQsU0FBTTtBQUZELEdBVEU7QUFhUkssUUFBTTtBQUNMSixZQUFTLElBREo7QUFFTEQsU0FBTTtBQUZELEdBYkU7QUFpQlJNLGFBQVc7QUFDVkwsWUFBUyxJQURDO0FBRVZELFNBQU07QUFGSSxHQWpCSDtBQXFCUk8sVUFBUTtBQUNQTixZQUFTLElBREY7QUFFUEQsU0FBTTtBQUZDLEdBckJBO0FBeUJSUSxTQUFPO0FBQ05QLFlBQVMsSUFESDtBQUVORCxTQUFNO0FBRkEsR0F6QkM7QUE2QlJTLFVBQVE7QUFDUFIsWUFBUyxJQURGO0FBRVBELFNBQU07QUFGQyxHQTdCQTtBQWlDUlUsVUFBUTtBQUNQVCxZQUFTLElBREY7QUFFUEQsU0FBTTtBQUZDO0FBakNBO0FBTEssQ0FBZjs7a0JBNkNlRCxNIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IHtcblx0cGF0aDogW1xuXHRcdCdhcHBsaWNhdGlvbi9yb3V0ZXMnLFxuXHRcdCdhcHBsaWNhdGlvbi9wYXR0ZXJucGxhdGUtY2xpZW50L3JvdXRlcydcblx0XSxcblx0ZW5hYmxlZDoge1xuXHRcdGluZGV4OiB7XG5cdFx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdFx0cGF0aDogJy8nXG5cdFx0fSxcblx0XHRwYXR0ZXJuOiB7XG5cdFx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdFx0cGF0aDogJy9wYXR0ZXJuLzpwYXRoKydcblx0XHR9LFxuXHRcdGRlbW86IHtcblx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRwYXRoOiAnL2RlbW8vOmlkKydcblx0XHR9LFxuXHRcdGRvY3M6IHtcblx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRwYXRoOiAnL2RvYy86cGF0aCsnXG5cdFx0fSxcblx0XHRjb21wb25lbnQ6IHtcblx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRwYXRoOiAnL2RlbW8vOmlkKy9jb21wb25lbnQuanMnXG5cdFx0fSxcblx0XHRzY3JpcHQ6IHtcblx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRwYXRoOiAnL3NjcmlwdC86cGF0aCsnXG5cdFx0fSxcblx0XHRzdHlsZToge1xuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRcdHBhdGg6ICcvc3R5bGUvOnBhdGgrJ1xuXHRcdH0sXG5cdFx0c3RhdGljOiB7XG5cdFx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdFx0cGF0aDogJy9zdGF0aWMvOnBhdGgrJ1xuXHRcdH0sXG5cdFx0emNhdGNoOiB7XG5cdFx0XHRlbmFibGVkOiB0cnVlLFxuXHRcdFx0cGF0aDogJyEoL2FwaS8pKC4qKSdcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiJdfQ==