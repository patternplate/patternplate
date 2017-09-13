'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _arson = require('arson');

const _arson2 = _interopRequireDefault(_arson);

const _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = highlight;


const startWorker = (0, _lodash.memoize)((url) => {
  let _global = global,
      Worker = _global.Worker;

  return new Worker(url);
});

function highlight(options) {
  return new Promise((resolve, reject) => {
    const worker = startWorker(options.worker);

    const onWorkerMessage = function onWorkerMessage(e) {
      const data = _arson2.default.parse(e.data);

      if (data.id !== options.id) {
        return;
      }

      if (data.payload.type === 'error') {
        return reject(data.payload.error);
      }

      resolve(data);
      worker.removeEventListener('message', onWorkerMessage);
    };

    worker.addEventListener('message', onWorkerMessage);
    worker.postMessage(_arson2.default.stringify(options));
  });
}