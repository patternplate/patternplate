import { exists, readFile, writeFile, stat } from "fs";
import { promisify } from "bluebird";

export default {
  exists: function asyncExists(path) {
    return new Promise(resolve => {
      exists(path, resolve);
    });
  },
  readFile: promisify(readFile),
  writeFile: promisify(writeFile),
  stat: promisify(stat)
};
