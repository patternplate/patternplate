'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = find;


function find(tree, id, _ref) {
	var type = _ref.type,
	    _ref$depth = _ref.depth,
	    depth = _ref$depth === undefined ? 1 : _ref$depth;

	if (id === '/') {
		return tree;
	}

	if (!id || !id.startsWith(type + '/')) {
		return null;
	}

	var reg = new RegExp('^' + type + '/');
	var frags = id.replace(reg, '').split('/').filter(Boolean);
	var sub = frags.slice(0, depth);

	var match = tree.children.find(function (child) {
		return child.path.every(function (s, i) {
			return sub[i] === s;
		}) && (child.type === type || child.type === 'folder');
	});

	if (match && depth < frags.length) {
		return find(match, id, { type: type, depth: depth + 1 });
	}

	return match;
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi91dGlscy9maW5kLmpzIl0sIm5hbWVzIjpbImZpbmQiLCJ0cmVlIiwiaWQiLCJ0eXBlIiwiZGVwdGgiLCJzdGFydHNXaXRoIiwicmVnIiwiUmVnRXhwIiwiZnJhZ3MiLCJyZXBsYWNlIiwic3BsaXQiLCJmaWx0ZXIiLCJCb29sZWFuIiwic3ViIiwic2xpY2UiLCJtYXRjaCIsImNoaWxkcmVuIiwiY2hpbGQiLCJwYXRoIiwiZXZlcnkiLCJzIiwiaSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQWVBLEk7OztBQUVmLFNBQVNBLElBQVQsQ0FBY0MsSUFBZCxFQUFvQkMsRUFBcEIsUUFBMkM7QUFBQSxLQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsdUJBQVpDLEtBQVk7QUFBQSxLQUFaQSxLQUFZLDhCQUFKLENBQUk7O0FBQzFDLEtBQUlGLE9BQU8sR0FBWCxFQUFnQjtBQUNmLFNBQU9ELElBQVA7QUFDQTs7QUFFRCxLQUFJLENBQUNDLEVBQUQsSUFBTyxDQUFDQSxHQUFHRyxVQUFILENBQWlCRixJQUFqQixPQUFaLEVBQXVDO0FBQ3RDLFNBQU8sSUFBUDtBQUNBOztBQUVELEtBQU1HLE1BQU0sSUFBSUMsTUFBSixPQUFlSixJQUFmLE9BQVo7QUFDQSxLQUFNSyxRQUFRTixHQUFHTyxPQUFILENBQVdILEdBQVgsRUFBZ0IsRUFBaEIsRUFBb0JJLEtBQXBCLENBQTBCLEdBQTFCLEVBQStCQyxNQUEvQixDQUFzQ0MsT0FBdEMsQ0FBZDtBQUNBLEtBQU1DLE1BQU1MLE1BQU1NLEtBQU4sQ0FBWSxDQUFaLEVBQWVWLEtBQWYsQ0FBWjs7QUFFQSxLQUFNVyxRQUFRZCxLQUFLZSxRQUFMLENBQ1poQixJQURZLENBQ1A7QUFBQSxTQUFTaUIsTUFBTUMsSUFBTixDQUFXQyxLQUFYLENBQWlCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFVBQVVSLElBQUlRLENBQUosTUFBV0QsQ0FBckI7QUFBQSxHQUFqQixNQUE2Q0gsTUFBTWQsSUFBTixLQUFlQSxJQUFmLElBQXVCYyxNQUFNZCxJQUFOLEtBQWUsUUFBbkYsQ0FBVDtBQUFBLEVBRE8sQ0FBZDs7QUFHQSxLQUFJWSxTQUFTWCxRQUFRSSxNQUFNYyxNQUEzQixFQUFtQztBQUNsQyxTQUFPdEIsS0FBS2UsS0FBTCxFQUFZYixFQUFaLEVBQWdCLEVBQUNDLFVBQUQsRUFBT0MsT0FBT0EsUUFBUSxDQUF0QixFQUFoQixDQUFQO0FBQ0E7O0FBRUQsUUFBT1csS0FBUDtBQUNBIiwiZmlsZSI6ImZpbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmaW5kO1xuXG5mdW5jdGlvbiBmaW5kKHRyZWUsIGlkLCB7dHlwZSwgZGVwdGggPSAxfSkge1xuXHRpZiAoaWQgPT09ICcvJykge1xuXHRcdHJldHVybiB0cmVlO1xuXHR9XG5cblx0aWYgKCFpZCB8fCAhaWQuc3RhcnRzV2l0aChgJHt0eXBlfS9gKSkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Y29uc3QgcmVnID0gbmV3IFJlZ0V4cChgXiR7dHlwZX0vYCk7XG5cdGNvbnN0IGZyYWdzID0gaWQucmVwbGFjZShyZWcsICcnKS5zcGxpdCgnLycpLmZpbHRlcihCb29sZWFuKTtcblx0Y29uc3Qgc3ViID0gZnJhZ3Muc2xpY2UoMCwgZGVwdGgpO1xuXG5cdGNvbnN0IG1hdGNoID0gdHJlZS5jaGlsZHJlblxuXHRcdC5maW5kKGNoaWxkID0+IGNoaWxkLnBhdGguZXZlcnkoKHMsIGkpID0+IHN1YltpXSA9PT0gcykgJiYgKGNoaWxkLnR5cGUgPT09IHR5cGUgfHwgY2hpbGQudHlwZSA9PT0gJ2ZvbGRlcicpKTtcblxuXHRpZiAobWF0Y2ggJiYgZGVwdGggPCBmcmFncy5sZW5ndGgpIHtcblx0XHRyZXR1cm4gZmluZChtYXRjaCwgaWQsIHt0eXBlLCBkZXB0aDogZGVwdGggKyAxfSk7XG5cdH1cblxuXHRyZXR1cm4gbWF0Y2g7XG59XG4iXX0=