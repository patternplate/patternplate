import resolve from './resolve';

export default deepRequire;

function deepRequire(id) {
  return require(resolve(id));
}
