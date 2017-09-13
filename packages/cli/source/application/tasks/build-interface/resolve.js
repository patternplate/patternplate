import {sync} from 'resolve';

export default resolve;

function resolve(id) {
  return sync(id, {
    basedir: process.cwd()
  });
}
