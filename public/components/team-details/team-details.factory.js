(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.factory('teamDetailsFactory', TeamDetailsFactory);
	
	TeamDetailsFactory.$inject = ['$http', 'commonFunc'];
	
	function TeamDetailsFactory($http, commonFunc) {
		return {
			getTeamDetails: getTeamDetails
		};
		
		function getTeamDetails(id) {
			const uri = '/teams/' + id;
			return commonFunc.getReqObj(uri);
		}
	}
})();