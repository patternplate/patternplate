const Path = require("path");
const IpAddress = require("ip-address");
const loadConfig = require("@patternplate/load-config");
const loadMeta = require("@patternplate/load-meta");

const SCOPE = new WeakMap();

module.exports.PluginApi = class PluginApi {
  static version = '1.0.0';

  static from(state, context) {
    return new PluginApi({state, context});
  }

  constructor(init) {
    SCOPE.set(this, {state: init.state, context: init.context});
    this.components = new PatternApi(init.context);
  }

  getState() {
    const scope = SCOPE.get(this);
    return scope.state;
  }
}

class PatternApi {
  constructor(context) {
    SCOPE.set(this, {context});
  }

  async list() {
    const {context} = SCOPE.get(this);

    const result = await loadConfig({ cwd: context.cwd });
    const { config = {}, filepath } = result;
    const { entry = [] } = config;
    const cwd = filepath ? Path.dirname(filepath) : context.cwd;

    const { patterns } = await loadMeta({ cwd, entry });
    return patterns;
  }

  async resolveDemo(id) {
    const {context} = SCOPE.get(this);
    const patterns = await this.list();
    const pattern = patterns.find(p => p.id === id);

    if (!pattern) {
      return;
    }

    const Address = context.address.family === "IPv6" ? IpAddress.Address6 : IpAddress.Address4;
    const ip = new Address(context.address.address);
    return `${ip.href(context.address.port)}api/demo/${id}.html`;
  }

  send() {

  }
}
