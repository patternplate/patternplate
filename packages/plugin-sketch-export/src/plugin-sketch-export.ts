import * as Fs from "fs";
import * as puppeteer from "puppeteer";

const HTML_SKETCHAPP = require.resolve("./html-sketchapp.bundle");

module.exports.contributes = {
  menus: [
    {
      anchor: 'sidebar',
      command: 'exportLibrary',
      title: 'Download Sketch library'
    },
    {
      anchor: 'toolbar',
      command: 'exportComponent',
      title: 'Export to Sketch'
    }
  ]
};

module.exports.commands = {
  exportLibrary: {
    command() {

    }
  },
  exportComponent: {
    async command(pp) {
      const state = pp.getState();
      const url = await pp.components.resolveDemo(state.component);

      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url);

      page.on('console', msg => console.log(msg));

      await page.addScriptTag({
        path: HTML_SKETCHAPP
      });

      const result = await page.evaluate(async (state) => {
        const HtmlSketchApp = window["html-sketchapp"];
        const sketchPage = HtmlSketchApp.nodeTreeToSketchPage(document.documentElement, {
          pageName: state.component,
          addArtBoard: true,
          artBoardName: state.component,
          getGroupName: node => node.nodeName.toLowerCase(),
          getRectangleName: () => 'background',
          skipSystemFonts: true
        });

        return JSON.stringify(sketchPage.toJSON(), null, '\t');
      }, state);

      Fs.writeFileSync("sketch-export.json", result);
    }
  }
};

