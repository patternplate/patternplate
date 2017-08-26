'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _ = require('./');

exports.default = searchPreview;
var type = exports.type = 'SEARCH_PREVIEW';

var MOVEMENTS = {
	up: -1,
	down: 1
};

function searchPreview(payload) {
	if (typeof payload === 'number') {
		return function (dispatch) {
			dispatch((0, _.patchLocation)({
				query: {
					'search-preview': payload
				}
			}));
		};
	}

	return function (dispatch, getState) {
		var state = getState();
		var delta = MOVEMENTS[payload] || 0;

		dispatch((0, _.patchLocation)({
			query: {
				'search-preview': state.searchPreview + delta
			}
		}));
	};
}

searchPreview.type = type;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL3NlYXJjaC1wcmV2aWV3LmpzIl0sIm5hbWVzIjpbInNlYXJjaFByZXZpZXciLCJ0eXBlIiwiTU9WRU1FTlRTIiwidXAiLCJkb3duIiwicGF5bG9hZCIsImRpc3BhdGNoIiwicXVlcnkiLCJnZXRTdGF0ZSIsInN0YXRlIiwiZGVsdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7a0JBRWVBLGE7QUFDUixJQUFNQyxzQkFBTyxnQkFBYjs7QUFFUCxJQUFNQyxZQUFZO0FBQ2pCQyxLQUFJLENBQUMsQ0FEWTtBQUVqQkMsT0FBTTtBQUZXLENBQWxCOztBQUtBLFNBQVNKLGFBQVQsQ0FBdUJLLE9BQXZCLEVBQWdDO0FBQy9CLEtBQUksT0FBT0EsT0FBUCxLQUFtQixRQUF2QixFQUFpQztBQUNoQyxTQUFPLG9CQUFZO0FBQ2xCQyxZQUFTLHFCQUFjO0FBQ3RCQyxXQUFPO0FBQ04sdUJBQWtCRjtBQURaO0FBRGUsSUFBZCxDQUFUO0FBS0EsR0FORDtBQU9BOztBQUVELFFBQU8sVUFBQ0MsUUFBRCxFQUFXRSxRQUFYLEVBQXdCO0FBQzlCLE1BQU1DLFFBQVFELFVBQWQ7QUFDQSxNQUFNRSxRQUFRUixVQUFVRyxPQUFWLEtBQXNCLENBQXBDOztBQUVBQyxXQUFTLHFCQUFjO0FBQ3RCQyxVQUFPO0FBQ04sc0JBQWtCRSxNQUFNVCxhQUFOLEdBQXNCVTtBQURsQztBQURlLEdBQWQsQ0FBVDtBQUtBLEVBVEQ7QUFVQTs7QUFFRFYsY0FBY0MsSUFBZCxHQUFxQkEsSUFBckIiLCJmaWxlIjoic2VhcmNoLXByZXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3BhdGNoTG9jYXRpb259IGZyb20gJy4vJztcblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoUHJldmlldztcbmV4cG9ydCBjb25zdCB0eXBlID0gJ1NFQVJDSF9QUkVWSUVXJztcblxuY29uc3QgTU9WRU1FTlRTID0ge1xuXHR1cDogLTEsXG5cdGRvd246IDFcbn07XG5cbmZ1bmN0aW9uIHNlYXJjaFByZXZpZXcocGF5bG9hZCkge1xuXHRpZiAodHlwZW9mIHBheWxvYWQgPT09ICdudW1iZXInKSB7XG5cdFx0cmV0dXJuIGRpc3BhdGNoID0+IHtcblx0XHRcdGRpc3BhdGNoKHBhdGNoTG9jYXRpb24oe1xuXHRcdFx0XHRxdWVyeToge1xuXHRcdFx0XHRcdCdzZWFyY2gtcHJldmlldyc6IHBheWxvYWRcblx0XHRcdFx0fVxuXHRcdFx0fSkpO1xuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuXHRcdGNvbnN0IHN0YXRlID0gZ2V0U3RhdGUoKTtcblx0XHRjb25zdCBkZWx0YSA9IE1PVkVNRU5UU1twYXlsb2FkXSB8fCAwO1xuXG5cdFx0ZGlzcGF0Y2gocGF0Y2hMb2NhdGlvbih7XG5cdFx0XHRxdWVyeToge1xuXHRcdFx0XHQnc2VhcmNoLXByZXZpZXcnOiBzdGF0ZS5zZWFyY2hQcmV2aWV3ICsgZGVsdGFcblx0XHRcdH1cblx0XHR9KSk7XG5cdH07XG59XG5cbnNlYXJjaFByZXZpZXcudHlwZSA9IHR5cGU7XG4iXX0=