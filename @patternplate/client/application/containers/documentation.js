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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL2RvY3VtZW50YXRpb24uanMiXSwibmFtZXMiOlsibWFwU3RhdGUiLCJzZWxlY3ROb3RGb3VuZCIsInN0YXRlIiwicm91dGluZyIsImxvY2F0aW9uQmVmb3JlVHJhbnNpdGlvbnMiLCJwYXRobmFtZSIsInVybCIsInNlbGVjdE5vRG9jcyIsInNlbGVjdERvYyIsIm1hdGNoIiwibm9Eb2NzIiwibm90Rm91bmQiLCJjb250ZW50cyIsInNlbGVjdFR5cGUiLCJzZWxlY3RUaGVtZXMiLCJjb25maWciLCJjb2xvciIsImRvYyIsInRoZW1lcyIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlLHlCQUFRQSxRQUFSLDBCOzs7QUFFZixJQUFNQyxpQkFBaUIsOEJBQ3RCO0FBQUEsUUFBU0MsTUFBTUMsT0FBTixDQUFjQyx5QkFBZCxDQUF3Q0MsUUFBakQ7QUFBQSxDQURzQixFQUV0QjtBQUFBLG1MQUs2REMsR0FMN0Q7QUFBQSxDQUZzQixDQUF2Qjs7QUFpQkEsSUFBTUMsZUFBZSxTQUFmQSxZQUFlO0FBQUE7QUFBQSxDQUFyQjs7QUE4QkEsSUFBTUMsWUFBWSw4Q0FFakJELFlBRmlCLEVBR2pCTixjQUhpQixFQUlqQixVQUFDUSxLQUFELEVBQVFDLE1BQVIsRUFBZ0JDLFFBQWhCLEVBQTZCO0FBQzVCLEtBQUlGLFNBQVNBLE1BQU1HLFFBQW5CLEVBQTZCO0FBQzVCLFNBQU9ILE1BQU1HLFFBQWI7QUFDQTs7QUFFRCxLQUFJSCxTQUFTLENBQUNBLE1BQU1HLFFBQXBCLEVBQThCO0FBQzdCLFNBQU9GLE1BQVA7QUFDQTs7QUFFRCxRQUFPQyxRQUFQO0FBQ0EsQ0FkZ0IsQ0FBbEI7O0FBaUJBLElBQU1FLGFBQWEsOENBRWxCLGlCQUFTO0FBQ1IsS0FBSUosU0FBU0EsTUFBTUcsUUFBbkIsRUFBNkI7QUFDNUIsU0FBTyxLQUFQO0FBQ0E7QUFDRCxLQUFJSCxTQUFTLENBQUNBLE1BQU1HLFFBQXBCLEVBQThCO0FBQzdCLFNBQU8sVUFBUDtBQUNBO0FBQ0QsUUFBTyxXQUFQO0FBQ0EsQ0FWaUIsQ0FBbkI7O0FBYUEsSUFBTUUsZUFBZSw4QkFDcEI7QUFBQSxRQUFTWixNQUFNYSxNQUFOLENBQWFDLEtBQXRCO0FBQUEsQ0FEb0IsRUFFcEI7QUFBQSxRQUFTLHNCQUFPQSxLQUFQLENBQVQ7QUFBQSxDQUZvQixDQUFyQjs7QUFLQSxTQUFTaEIsUUFBVCxDQUFrQkUsS0FBbEIsRUFBeUI7QUFDeEIsUUFBTztBQUNOZSxPQUFLVCxVQUFVTixLQUFWLENBREM7QUFFTmdCLFVBQVFKLGFBQWFaLEtBQWIsQ0FGRjtBQUdOaUIsUUFBTU4sV0FBV1gsS0FBWDtBQUhBLEVBQVA7QUFLQSIsImZpbGUiOiJkb2N1bWVudGF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgRG9jdW1lbnRhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2RvY3VtZW50YXRpb24nO1xuaW1wb3J0IHNlbGVjdEl0ZW0gZnJvbSAnLi4vc2VsZWN0b3JzL2l0ZW0nO1xuaW1wb3J0IHRoZW1lcyBmcm9tICcuLi90aGVtZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlKShEb2N1bWVudGF0aW9uKTtcblxuY29uc3Qgc2VsZWN0Tm90Rm91bmQgPSBjcmVhdGVTZWxlY3Rvcihcblx0c3RhdGUgPT4gc3RhdGUucm91dGluZy5sb2NhdGlvbkJlZm9yZVRyYW5zaXRpb25zLnBhdGhuYW1lLFxuXHR1cmwgPT4gYFxuIyBEb2N1bWVudGF0aW9uIG5vdCBmb3VuZFxuXG4+IFByZXR0eSBzdXJlIHRoZXNlIGFyZW4ndCB0aGUgaHlwZXJ0ZXh0IGRvY3VtZW50cyB5b3UgYXJlIGxvb2tpbmcgZm9yLlxuXG5XZSBsb29rZWQgZXZlcnl3aGVyZSBhbmQgY291bGQgbm90IGZpbmQgYSBzaW5nbGUgdGhpbmcgYXQgXFxgJHt1cmx9XFxgLlxuXG5Zb3UgbWlnaHQgd2FudCB0byBuYXZpZ2F0ZSBiYWNrIHRvIFtIb21lXSgvKSBvciB1c2UgdGhlIFtTZWFyY2hdKD9zZWFyY2gtZW5hYmxlZD10cnVlKS5cblxuLS0tXG5cbkhlbHAgdXMgdG8gbWFrZSB0aGlzIG1lc3NhZ2UgbW9yZSBoZWxwZnVsIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5uZXJzY2hyYWRlci9wYXR0ZXJucGxhdGUpXG5gXG4pO1xuXG5jb25zdCBzZWxlY3ROb0RvY3MgPSAoKSA9PiBgXG4jIDpjb25zdHJ1Y3Rpb246IEFkZCBkb2N1bWVudGF0aW9uXG5cbj4gVW5kb2N1bWVudGVkIHNvZnR3YXJlIGNvdWxkIG5vdCBleGlzdCBqdXN0IGFzIHdlbGwuXG4+XG4+IOKAkyBUaGUgVm9pY2Ugb2YgQ29tbW9uIFNlbnNlXG5cbkN1cnJlbnRseSB0aGVyZSBpcyBubyByZWFkbWUgZGF0YSBhdCBcXGAuL3BhdHRlcm5zL3JlYWRtZS5tZFxcYCwgc28gd2UgbGVmdCB0aGlzXG5mcmllbmRseSByZW1pbmRlciBoZXJlIHRvIGNoYW5nZSB0aGF0IHNvb24uXG5cbllvdSBjb3VsZCBzdGFydCByaWdodCBhd2F5OlxuXG5cXGBcXGBcXGBzaFxuZWNobyBcIiMgRG9jc1xcXFxuIFRoaXMgcGF0dGVybnBsYXRlIGNvbnRhaW5zIC4uLlwiID4gcGF0dGVybnMvcmVhZG1lLm1kXG5cXGBcXGBcXGBcblxuU29tZSBpZGVhcyBvbiB3aGF0IHRvIHdyaXRlIGludG8geW91ciBwYXR0ZXJuIHJlYWRtZVxuXG4qICBXaHkgdGhpcyBMaXZpbmcgU3R5bGVndWlkZSBpbnRlcmZhY2UgZXhpc3RzLCBlLmcuIHdoYXQgcHJvYmxlbXMgaXQgc2hvdWxkIHNvbHZlXG4qICBXaGF0IHRoZSBjb21wb25lbnRzIGluIGFyZSBpbnRlbmRlZCBmb3IsIGUuZy4gYSBicmFuZCwgd2Vic2l0ZSBvciBwcm9kdWN0XG4qICBUaGUgY29tcG9uZW50IGhpZXJhcmNoeSB5b3UgdXNlLCBlLmcuIEF0b21pYyBEZXNpZ25cbiogIE5hbWluZyBjb252ZW50aW9uc1xuKiAgUnVsZXMgZm9yIGRlcGVuZGVuY2llc1xuKiAgQnJvd3NlciBtYXRyaXhcblxuLS0tXG5cbkhlbHAgdXMgdG8gbWFrZSB0aGlzIG1lc3NhZ2UgbW9yZSBoZWxwZnVsIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5uZXJzY2hyYWRlci9wYXR0ZXJucGxhdGUpLlxuYDtcblxuY29uc3Qgc2VsZWN0RG9jID0gY3JlYXRlU2VsZWN0b3IoXG5cdHNlbGVjdEl0ZW0sXG5cdHNlbGVjdE5vRG9jcyxcblx0c2VsZWN0Tm90Rm91bmQsXG5cdChtYXRjaCwgbm9Eb2NzLCBub3RGb3VuZCkgPT4ge1xuXHRcdGlmIChtYXRjaCAmJiBtYXRjaC5jb250ZW50cykge1xuXHRcdFx0cmV0dXJuIG1hdGNoLmNvbnRlbnRzO1xuXHRcdH1cblxuXHRcdGlmIChtYXRjaCAmJiAhbWF0Y2guY29udGVudHMpIHtcblx0XHRcdHJldHVybiBub0RvY3M7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5vdEZvdW5kO1xuXHR9XG4pO1xuXG5jb25zdCBzZWxlY3RUeXBlID0gY3JlYXRlU2VsZWN0b3IoXG5cdHNlbGVjdEl0ZW0sXG5cdG1hdGNoID0+IHtcblx0XHRpZiAobWF0Y2ggJiYgbWF0Y2guY29udGVudHMpIHtcblx0XHRcdHJldHVybiAnZG9jJztcblx0XHR9XG5cdFx0aWYgKG1hdGNoICYmICFtYXRjaC5jb250ZW50cykge1xuXHRcdFx0cmV0dXJuICdmYWxsYmFjayc7XG5cdFx0fVxuXHRcdHJldHVybiAnbm90LWZvdW5kJztcblx0fVxuKTtcblxuY29uc3Qgc2VsZWN0VGhlbWVzID0gY3JlYXRlU2VsZWN0b3IoXG5cdHN0YXRlID0+IHN0YXRlLmNvbmZpZy5jb2xvcixcblx0Y29sb3IgPT4gdGhlbWVzKGNvbG9yKVxuKTtcblxuZnVuY3Rpb24gbWFwU3RhdGUoc3RhdGUpIHtcblx0cmV0dXJuIHtcblx0XHRkb2M6IHNlbGVjdERvYyhzdGF0ZSksXG5cdFx0dGhlbWVzOiBzZWxlY3RUaGVtZXMoc3RhdGUpLFxuXHRcdHR5cGU6IHNlbGVjdFR5cGUoc3RhdGUpXG5cdH07XG59XG4iXX0=