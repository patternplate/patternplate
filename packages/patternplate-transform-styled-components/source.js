// @flow
import importFrom from 'import-from';

export default styledComponentsTransformFactory;

function styledComponentsTransformFactory(app) {
  const importing = importFrom(process.cwd(), 'styled-components');

  return async function(file) {
    const {ServerStyleSheet} = await importing;

    file.wrap = async (render, comp) => {
      const sheet = new ServerStyleSheet();
      const html = render(sheet.collectStyles(comp));
      const css = sheet.getStyleTags();

      app.resources = app.resources.filter(
        r => r.id !== `styled-components/${file.pattern.id}`
      );

      app.resources.push({
        id: `styled-components/${file.pattern.id}`,
        pattern: file.pattern.id,
        type: 'css',
        reference: false,
        wrap: false,
        content: css
      });

      return html;
    };

    return file;
  };
}
