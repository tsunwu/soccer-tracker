(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.factory('headerFactory', HeaderFactory);
	
	HeaderFactory.$inject = ['$http', 'commonFunc'];
	
	function HeaderFactory($http, commonFunc) {
		return {
			getLeagueList: getLeagueList
		};
		
		function getLeagueList() {
			const uri = '/competitions';
			return commonFunc.getReqObj(uri);
		}
	}
})();