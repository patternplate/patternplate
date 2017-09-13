import {merge} from 'lodash';

import renderMarkup from './render-markup';

export default function createReactRendererFactory(application) {
  return async file => {
    const {
      configuration: {transforms: {'react-to-markup': configuration}}
    } = application;

    const {pattern: {manifest: {options: patternOptions = {}}}} = file;

    const {'react-to-markup': patternConfiguration = {}} = patternOptions;

    const settings = merge({}, configuration.opts, patternConfiguration.opts);

    const results = await renderMarkup(file, settings, application);

    file.buffer = results.buffer;
    file.meta = merge({}, file.meta, results.meta);
    return file;
  };
}
