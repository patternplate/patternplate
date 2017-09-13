'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _portscanner = require('portscanner');

class Ports {
  static test() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Promise((resolve, reject) => {
      _portscanner.checkPortStatus.apply(undefined, [].concat(args, [function cb(error, result) {
        return resolve(result === 'closed');
      }]));
    });
  }

  static find() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return new Promise((resolve, reject) => {
      _portscanner.findAPortNotInUse.apply(undefined, [].concat(args, [function cb(error, result) {
        return resolve(result);
      }]));
    });
  }
}

exports.default = Ports;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L3V0aWxpdGllcy9wb3J0cy5qcyJdLCJuYW1lcyI6WyJQb3J0cyIsInRlc3QiLCJhcmdzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjYiIsImVycm9yIiwicmVzdWx0IiwiZmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsS0FBTixDQUFZO0FBQ1YsU0FBT0MsSUFBUCxHQUFxQjtBQUFBLHNDQUFOQyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFDbkIsV0FBTyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3RDLDhEQUVPSCxJQUZQLEdBR0ksU0FBU0ksRUFBVCxDQUFZQyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQjtBQUN6QixlQUFPSixRQUFRSSxXQUFXLFFBQW5CLENBQVA7QUFDRCxPQUxMO0FBUUQsS0FUTSxDQUFQO0FBVUQ7O0FBRUQsU0FBT0MsSUFBUCxHQUFxQjtBQUFBLHVDQUFOUCxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFDbkIsV0FBTyxJQUFJQyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3RDLGdFQUVPSCxJQUZQLEdBR0ksU0FBU0ksRUFBVCxDQUFZQyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQjtBQUN6QixlQUFPSixRQUFRSSxNQUFSLENBQVA7QUFDRCxPQUxMO0FBUUQsS0FUTSxDQUFQO0FBVUQ7QUF6QlM7O2tCQTRCR1IsSyIsImZpbGUiOiJwb3J0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y2hlY2tQb3J0U3RhdHVzIGFzIHRlc3QsIGZpbmRBUG9ydE5vdEluVXNlIGFzIGZpbmR9IGZyb20gJ3BvcnRzY2FubmVyJztcblxuY2xhc3MgUG9ydHMge1xuICBzdGF0aWMgdGVzdCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRlc3QoXG4gICAgICAgIC4uLltcbiAgICAgICAgICAuLi5hcmdzLFxuICAgICAgICAgIGZ1bmN0aW9uIGNiKGVycm9yLCByZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdCA9PT0gJ2Nsb3NlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmluZChcbiAgICAgICAgLi4uW1xuICAgICAgICAgIC4uLmFyZ3MsXG4gICAgICAgICAgZnVuY3Rpb24gY2IoZXJyb3IsIHJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9ydHM7XG4iXX0=