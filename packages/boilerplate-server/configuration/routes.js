'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
const routes = {
	'path': './application/routes',
	'enabled': {
		'index': {
			'enabled': true,
			'method': 'GET',
			'path': '/'
		},
		'static': {
			'enabled': true,
			'method': 'GET',
			'path': '/static/:path*',
			'options': {
				'root': './static'
			}
		},
		'health': {
			'enabled': true,
			'method': 'GET',
			'path': '/health/'
		}
	}
};

exports.default = routes;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jb25maWd1cmF0aW9uL3JvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsU0FBUztBQUNkLFNBQVEsc0JBRE07QUFFZCxZQUFXO0FBQ1YsV0FBUztBQUNSLGNBQVcsSUFESDtBQUVSLGFBQVUsS0FGRjtBQUdSLFdBQVE7QUFIQSxHQURDO0FBTVYsWUFBVTtBQUNULGNBQVcsSUFERjtBQUVULGFBQVUsS0FGRDtBQUdULFdBQVEsZ0JBSEM7QUFJVCxjQUFXO0FBQ1YsWUFBUTtBQURFO0FBSkYsR0FOQTtBQWNWLFlBQVU7QUFDVCxjQUFXLElBREY7QUFFVCxhQUFVLEtBRkQ7QUFHVCxXQUFRO0FBSEM7QUFkQTtBQUZHLENBQWY7O2tCQXdCZUEsTSIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3V0ZXMgPSB7XG5cdCdwYXRoJzogJy4vYXBwbGljYXRpb24vcm91dGVzJyxcblx0J2VuYWJsZWQnOiB7XG5cdFx0J2luZGV4Jzoge1xuXHRcdFx0J2VuYWJsZWQnOiB0cnVlLFxuXHRcdFx0J21ldGhvZCc6ICdHRVQnLFxuXHRcdFx0J3BhdGgnOiAnLydcblx0XHR9LFxuXHRcdCdzdGF0aWMnOiB7XG5cdFx0XHQnZW5hYmxlZCc6IHRydWUsXG5cdFx0XHQnbWV0aG9kJzogJ0dFVCcsXG5cdFx0XHQncGF0aCc6ICcvc3RhdGljLzpwYXRoKicsXG5cdFx0XHQnb3B0aW9ucyc6IHtcblx0XHRcdFx0J3Jvb3QnOiAnLi9zdGF0aWMnXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQnaGVhbHRoJzoge1xuXHRcdFx0J2VuYWJsZWQnOiB0cnVlLFxuXHRcdFx0J21ldGhvZCc6ICdHRVQnLFxuXHRcdFx0J3BhdGgnOiAnL2hlYWx0aC8nXG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iXX0=