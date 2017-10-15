const privates = new WeakMap();

class LogQueue {
  constructor(prefix) {
    const queue = [];
    privates.set(this, { queue, prefix });
  }

  fill(level, ...args) {
    const { queue, prefix } = privates.get(this);
    const message = [prefix, ...args];
    queue.push([level, ...message]);
  }

  drain(logger) {
    const { queue } = privates.get(this);

    for (const item of queue) {
      const [method, ...message] = item;
      logger[method](...message);
    }
  }

  deploy(logger) {
    this.fill = function(level, ...args) {
      logger[level](...args);
    };
  }

  error(...args) {
    this.fill("error", ...args);
  }

  warn(...args) {
    this.fill("warn", ...args);
  }

  info(...args) {
    this.fill("info", ...args);
  }

  debug(...args) {
    this.fill("debug", ...args);
  }

  silly(...args) {
    this.fill("silly", ...args);
  }
}

function logQueueFactory(...args) {
  return new LogQueue(...args);
}

export default logQueueFactory;
export { LogQueue };
