import React from 'react';

import getComponent from './get-component';
import getRenderFunction from './get-render-function';

export default async (file, options = {}, application) => {
  const isStatic = options.static !== false && options.automount !== true;
  const renderFunction = getRenderFunction(isStatic, application);
  const component = getComponent(file);

  file.meta.component = component;

  try {
    const original = console.error;

    console.error = (...args) => {
      const message = args.join(' ');
      if (message.includes('Expected props argument to be a plain object')) {
        return;
      }
      original(...args);
    };

    const buffer = await getResult(file, {
      automount: options.automount,
      component,
      renderFunction
    });

    const post = file.pattern.post || [];
    post.forEach(p => p());

    return {
      buffer
    };
  } catch (err) {
    const message = [
      `Error during rendering of file ${file.path}`,
      `in pattern ${file.pattern.id}:`
    ].join('\n');

    err.message = [message, err.message].join('\n');

    err.fileName = file.path;

    throw err;
  }
};

async function getResult(file, {automount, component, renderFunction}) {
  if (typeof component !== 'function') {
    return '';
  }

  const result = automount ?
    React.createElement('div', {'data-mountpoint': true}, [React.createElement(component)]) :
    React.createElement(component)

  return file.wrap
    ? await file.wrap(renderFunction, result)
    : renderFunction(result);
}
