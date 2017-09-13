import precinct from 'precinct';
import {uniqBy} from 'lodash/fp';
import md5 from 'md5';
import applyTransform from './apply-transform';
import flatten from './flatten';

const uniqByPath = uniqBy('path');
const stash = {};

export default createBabelTransform;

function createBabelTransform() {
  return babelTransform;
}

async function babelTransform(file, _, configuration) {
  // eslint-disable-line require-yield
  const apply = file => {
    return applyTransform(file, configuration.opts);
  };

  file.buffer = apply(file).buffer;
  walk(file, apply);
  return file;
}

function walk(file, apply) {
  const pool = uniqByPath(flatten(file.dependencies));
  const source =
    typeof file.buffer === 'string'
      ? file.buffer
      : file.buffer.toString('utf-8');

  const id = md5(source);
  stash[id] = stash[id] || precinct(source);

  stash[id]
    .map(localName => (file.dependencies[localName] || {}).path)
    .filter(Boolean)
    .map(dependencyPath => pool.find(dep => dep.path === dependencyPath))
    .filter(Boolean)
    .forEach(dependency => {
      dependency.buffer = apply(dependency).buffer;
      walk(dependency, apply);
    });
}
