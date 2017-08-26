'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var ui = {
	hierarchy: {
		'atoms': {
			displayName: 'Atoms',
			order: 1,
			icon: 'atoms'
		},
		'molecules': {
			displayName: 'Molecules',
			order: 2,
			icon: 'molecules'
		},
		'polymers': {
			displayName: 'Polymers',
			order: 3,
			icon: 'polymers'
		},
		'organisms': {
			displayName: 'Organisms',
			order: 4,
			icon: 'organisms'
		},
		'ecospheres': {
			displayName: 'Ecospheres',
			order: 5,
			icon: 'ecospheres'
		},
		'atoms/special-atoms': {
			displayName: 'Specialized Atoms'
		}
	},
	resultOrder: ['Dependencies', 'Markup', 'Script', 'Style', 'Documentation'],
	theme: 'light',
	themeTarget: 'dark',
	useFolderTable: true
};

exports.default = ui;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NvdXJjZS9jb25maWd1cmF0aW9uL3VpLmpzIl0sIm5hbWVzIjpbInVpIiwiaGllcmFyY2h5IiwiZGlzcGxheU5hbWUiLCJvcmRlciIsImljb24iLCJyZXN1bHRPcmRlciIsInRoZW1lIiwidGhlbWVUYXJnZXQiLCJ1c2VGb2xkZXJUYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxLQUFLO0FBQ1ZDLFlBQVc7QUFDVixXQUFTO0FBQ1JDLGdCQUFhLE9BREw7QUFFUkMsVUFBTyxDQUZDO0FBR1JDLFNBQU07QUFIRSxHQURDO0FBTVYsZUFBYTtBQUNaRixnQkFBYSxXQUREO0FBRVpDLFVBQU8sQ0FGSztBQUdaQyxTQUFNO0FBSE0sR0FOSDtBQVdWLGNBQVk7QUFDWEYsZ0JBQWEsVUFERjtBQUVYQyxVQUFPLENBRkk7QUFHWEMsU0FBTTtBQUhLLEdBWEY7QUFnQlYsZUFBYTtBQUNaRixnQkFBYSxXQUREO0FBRVpDLFVBQU8sQ0FGSztBQUdaQyxTQUFNO0FBSE0sR0FoQkg7QUFxQlYsZ0JBQWM7QUFDYkYsZ0JBQWEsWUFEQTtBQUViQyxVQUFPLENBRk07QUFHYkMsU0FBTTtBQUhPLEdBckJKO0FBMEJWLHlCQUF1QjtBQUN0QkYsZ0JBQWE7QUFEUztBQTFCYixFQUREO0FBK0JWRyxjQUFhLENBQ1osY0FEWSxFQUVaLFFBRlksRUFHWixRQUhZLEVBSVosT0FKWSxFQUtaLGVBTFksQ0EvQkg7QUFzQ1ZDLFFBQU8sT0F0Q0c7QUF1Q1ZDLGNBQWEsTUF2Q0g7QUF3Q1ZDLGlCQUFnQjtBQXhDTixDQUFYOztrQkEyQ2VSLEUiLCJmaWxlIjoidWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1aSA9IHtcblx0aGllcmFyY2h5OiB7XG5cdFx0J2F0b21zJzoge1xuXHRcdFx0ZGlzcGxheU5hbWU6ICdBdG9tcycsXG5cdFx0XHRvcmRlcjogMSxcblx0XHRcdGljb246ICdhdG9tcydcblx0XHR9LFxuXHRcdCdtb2xlY3VsZXMnOiB7XG5cdFx0XHRkaXNwbGF5TmFtZTogJ01vbGVjdWxlcycsXG5cdFx0XHRvcmRlcjogMixcblx0XHRcdGljb246ICdtb2xlY3VsZXMnXG5cdFx0fSxcblx0XHQncG9seW1lcnMnOiB7XG5cdFx0XHRkaXNwbGF5TmFtZTogJ1BvbHltZXJzJyxcblx0XHRcdG9yZGVyOiAzLFxuXHRcdFx0aWNvbjogJ3BvbHltZXJzJ1xuXHRcdH0sXG5cdFx0J29yZ2FuaXNtcyc6IHtcblx0XHRcdGRpc3BsYXlOYW1lOiAnT3JnYW5pc21zJyxcblx0XHRcdG9yZGVyOiA0LFxuXHRcdFx0aWNvbjogJ29yZ2FuaXNtcydcblx0XHR9LFxuXHRcdCdlY29zcGhlcmVzJzoge1xuXHRcdFx0ZGlzcGxheU5hbWU6ICdFY29zcGhlcmVzJyxcblx0XHRcdG9yZGVyOiA1LFxuXHRcdFx0aWNvbjogJ2Vjb3NwaGVyZXMnXG5cdFx0fSxcblx0XHQnYXRvbXMvc3BlY2lhbC1hdG9tcyc6IHtcblx0XHRcdGRpc3BsYXlOYW1lOiAnU3BlY2lhbGl6ZWQgQXRvbXMnXG5cdFx0fVxuXHR9LFxuXHRyZXN1bHRPcmRlcjogW1xuXHRcdCdEZXBlbmRlbmNpZXMnLFxuXHRcdCdNYXJrdXAnLFxuXHRcdCdTY3JpcHQnLFxuXHRcdCdTdHlsZScsXG5cdFx0J0RvY3VtZW50YXRpb24nXG5cdF0sXG5cdHRoZW1lOiAnbGlnaHQnLFxuXHR0aGVtZVRhcmdldDogJ2RhcmsnLFxuXHR1c2VGb2xkZXJUYWJsZTogdHJ1ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdWk7XG4iXX0=