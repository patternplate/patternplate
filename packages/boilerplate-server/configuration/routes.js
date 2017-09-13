'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const routes = {
  path: './application/routes',
  enabled: {
    index: {
      enabled: true,
      method: 'GET',
      path: '/'
    },
    static: {
      enabled: true,
      method: 'GET',
      path: '/static/:path*',
      options: {
        root: './static'
      }
    },
    health: {
      enabled: true,
      method: 'GET',
      path: '/health/'
    }
  }
};

exports.default = routes;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jb25maWd1cmF0aW9uL3JvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJwYXRoIiwiZW5hYmxlZCIsImluZGV4IiwibWV0aG9kIiwic3RhdGljIiwib3B0aW9ucyIsInJvb3QiLCJoZWFsdGgiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTUEsU0FBUztBQUNiQyxRQUFNLHNCQURPO0FBRWJDLFdBQVM7QUFDUEMsV0FBTztBQUNMRCxlQUFTLElBREo7QUFFTEUsY0FBUSxLQUZIO0FBR0xILFlBQU07QUFIRCxLQURBO0FBTVBJLFlBQVE7QUFDTkgsZUFBUyxJQURIO0FBRU5FLGNBQVEsS0FGRjtBQUdOSCxZQUFNLGdCQUhBO0FBSU5LLGVBQVM7QUFDUEMsY0FBTTtBQURDO0FBSkgsS0FORDtBQWNQQyxZQUFRO0FBQ05OLGVBQVMsSUFESDtBQUVORSxjQUFRLEtBRkY7QUFHTkgsWUFBTTtBQUhBO0FBZEQ7QUFGSSxDQUFmOztrQkF3QmVELE0iLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm91dGVzID0ge1xuICBwYXRoOiAnLi9hcHBsaWNhdGlvbi9yb3V0ZXMnLFxuICBlbmFibGVkOiB7XG4gICAgaW5kZXg6IHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgcGF0aDogJy8nXG4gICAgfSxcbiAgICBzdGF0aWM6IHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgcGF0aDogJy9zdGF0aWMvOnBhdGgqJyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgcm9vdDogJy4vc3RhdGljJ1xuICAgICAgfVxuICAgIH0sXG4gICAgaGVhbHRoOiB7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHBhdGg6ICcvaGVhbHRoLydcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiJdfQ==