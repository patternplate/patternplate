const puppeteer = require("puppeteer");

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
  exportPattern: {
    command() {

    }
  }
};
