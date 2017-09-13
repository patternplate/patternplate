'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _bluebird = require('bluebird');

exports.default = {
  exists: function asyncExists(path) {
    return new Promise(resolve => {
      (0, _fs.exists)(path, resolve);
    });
  },
  readFile: (0, _bluebird.promisify)(_fs.readFile),
  writeFile: (0, _bluebird.promisify)(_fs.writeFile),
  stat: (0, _bluebird.promisify)(_fs.stat)
};
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L3V0aWxpdGllcy9mcy5qcyJdLCJuYW1lcyI6WyJleGlzdHMiLCJhc3luY0V4aXN0cyIsInBhdGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWRGaWxlIiwid3JpdGVGaWxlIiwic3RhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7O2tCQUVlO0FBQ2JBLFVBQVEsU0FBU0MsV0FBVCxDQUFxQkMsSUFBckIsRUFBMkI7QUFDakMsV0FBTyxJQUFJQyxPQUFKLENBQWFDLE9BQUQsSUFBYTtBQUM5QixzQkFBT0YsSUFBUCxFQUFhRSxPQUFiO0FBQ0QsS0FGTSxDQUFQO0FBR0QsR0FMWTtBQU1iQyxZQUFVLHNDQU5HO0FBT2JDLGFBQVcsdUNBUEU7QUFRYkMsUUFBTTtBQVJPLEMiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2V4aXN0cywgcmVhZEZpbGUsIHdyaXRlRmlsZSwgc3RhdH0gZnJvbSAnZnMnO1xuaW1wb3J0IHtwcm9taXNpZnl9IGZyb20gJ2JsdWViaXJkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBleGlzdHM6IGZ1bmN0aW9uIGFzeW5jRXhpc3RzKHBhdGgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGV4aXN0cyhwYXRoLCByZXNvbHZlKTtcbiAgICB9KTtcbiAgfSxcbiAgcmVhZEZpbGU6IHByb21pc2lmeShyZWFkRmlsZSksXG4gIHdyaXRlRmlsZTogcHJvbWlzaWZ5KHdyaXRlRmlsZSksXG4gIHN0YXQ6IHByb21pc2lmeShzdGF0KVxufTtcbiJdfQ==