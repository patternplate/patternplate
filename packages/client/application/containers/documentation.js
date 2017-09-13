'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _reactRedux = require('react-redux');

const _reselect = require('reselect');

const _documentation = require('../components/documentation');

const _documentation2 = _interopRequireDefault(_documentation);

const _item = require('../selectors/item');

const _item2 = _interopRequireDefault(_item);

const _themes = require('../themes');

const _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(mapState)(_documentation2.default);


const selectNotFound = (0, _reselect.createSelector)((state) => {
  return state.routing.locationBeforeTransitions.pathname;
}, (url) => {
  return '\n# Documentation not found\n\n> Pretty sure these aren\'t the hypertext documents you are looking for.\n\nWe looked everywhere and could not find a single thing at `' + url + '`.\n\nYou might want to navigate back to [Home](/) or use the [Search](?search-enabled=true).\n\n---\n\nHelp us to make this message more helpful on [GitHub](https://github.com/sinnerschrader/patternplate)\n';
});

const selectNoDocs = function selectNoDocs() {
  return '\n# :construction: Add documentation\n\n> Undocumented software could not exist just as well.\n>\n> \u2013 The Voice of Common Sense\n\nCurrently there is no readme data at `./patterns/readme.md`, so we left this\nfriendly reminder here to change that soon.\n\nYou could start right away:\n\n```sh\necho "# Docs\\n This patternplate contains ..." > patterns/readme.md\n```\n\nSome ideas on what to write into your pattern readme\n\n*  Why this Living Styleguide interface exists, e.g. what problems it should solve\n*  What the components in are intended for, e.g. a brand, website or product\n*  The component hierarchy you use, e.g. Atomic Design\n*  Naming conventions\n*  Rules for dependencies\n*  Browser matrix\n\n---\n\nHelp us to make this message more helpful on [GitHub](https://github.com/sinnerschrader/patternplate).\n';
};

const selectDoc = (0, _reselect.createSelector)(_item2.default, selectNoDocs, selectNotFound, (match, noDocs, notFound) => {
  if (match && match.contents) {
    return match.contents;
  }

  if (match && !match.contents) {
    return noDocs;
  }

  return notFound;
});

const selectType = (0, _reselect.createSelector)(_item2.default, (match) => {
  if (match && match.contents) {
    return 'doc';
  }
  if (match && !match.contents) {
    return 'fallback';
  }
  return 'not-found';
});

const selectThemes = (0, _reselect.createSelector)((state) => {
  return state.config.color;
}, (color) => {
  return (0, _themes2.default)(color);
});

function mapState(state) {
  return {
    doc: selectDoc(state),
    themes: selectThemes(state),
    type: selectType(state)
  };
}