'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _documentation = require('../components/documentation');

var _documentation2 = _interopRequireDefault(_documentation);

var _item = require('../selectors/item');

var _item2 = _interopRequireDefault(_item);

var _themes = require('../themes');

var _themes2 = _interopRequireDefault(_themes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(mapState)(_documentation2.default);


var selectNotFound = (0, _reselect.createSelector)(function (state) {
	return state.routing.locationBeforeTransitions.pathname;
}, function (url) {
	return '\n# Documentation not found\n\n> Pretty sure these aren\'t the hypertext documents you are looking for.\n\nWe looked everywhere and could not find a single thing at `' + url + '`.\n\nYou might want to navigate back to [Home](/) or use the [Search](?search-enabled=true).\n\n---\n\nHelp us to make this message more helpful on [GitHub](https://github.com/sinnerschrader/patternplate)\n';
});

var selectNoDocs = function selectNoDocs() {
	return '\n# :construction: Add documentation\n\n> Undocumented software could not exist just as well.\n>\n> \u2013 The Voice of Common Sense\n\nCurrently there is no readme data at `./patterns/readme.md`, so we left this\nfriendly reminder here to change that soon.\n\nYou could start right away:\n\n```sh\necho "# Docs\\n This patternplate contains ..." > patterns/readme.md\n```\n\nSome ideas on what to write into your pattern readme\n\n*  Why this Living Styleguide interface exists, e.g. what problems it should solve\n*  What the components in are intended for, e.g. a brand, website or product\n*  The component hierarchy you use, e.g. Atomic Design\n*  Naming conventions\n*  Rules for dependencies\n*  Browser matrix\n\n---\n\nHelp us to make this message more helpful on [GitHub](https://github.com/sinnerschrader/patternplate).\n';
};

var selectDoc = (0, _reselect.createSelector)(_item2.default, selectNoDocs, selectNotFound, function (match, noDocs, notFound) {
	if (match && match.contents) {
		return match.contents;
	}

	if (match && !match.contents) {
		return noDocs;
	}

	return notFound;
});

var selectType = (0, _reselect.createSelector)(_item2.default, function (match) {
	if (match && match.contents) {
		return 'doc';
	}
	if (match && !match.contents) {
		return 'fallback';
	}
	return 'not-found';
});

var selectThemes = (0, _reselect.createSelector)(function (state) {
	return state.config.color;
}, function (color) {
	return (0, _themes2.default)(color);
});

function mapState(state) {
	return {
		doc: selectDoc(state),
		themes: selectThemes(state),
		type: selectType(state)
	};
}