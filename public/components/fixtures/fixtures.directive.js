(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.directive('gameInfo', gameInfoDirective);
	
	function gameInfoDirective() {
		return {
			restrict: 'E',
			templateUrl: './public/views/tpl/game-info.tpl.html',
			scope: {
				status: '=',
				date: '=',
				extra: '=',
				penalty: '='
			}
		};
	}
})();