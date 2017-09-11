// @flow
import {ServerStyleSheet} from 'styled-components';

export default styledComponentsTransformFactory;

function styledComponentsTransformFactory(app) {
	return async function (file) {
    file.wrap = (render, comp) => {
      const sheet = new ServerStyleSheet();
      const html = render(sheet.collectStyles(comp));
      const css = sheet.getStyleTags();

      app.resources = app.resources.filter(r => r.id !== `styled-components/${file.pattern.id}`);

      app.resources.push({
        id: `styled-components/${file.pattern.id}`,
        pattern: file.pattern.id,
        type: 'css',
        reference: false,
        wrap: false,
        content: css
      });

      return html;
    }

    return file;
	};
}
