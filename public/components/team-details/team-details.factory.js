(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.factory('teamDetailsFactory', TeamDetailsFactory);
	
	TeamDetailsFactory.$inject = ['$http', 'commonFunc'];
	
	function TeamDetailsFactory($http, commonFunc) {
		return {
			getTeamDetails: getTeamDetails,
			getTeamRoster: getTeamRoster
		};
		
		function getTeamDetails(id) {
			const uri = '/teams/' + id;
			return commonFunc.getReqObj(uri);
		}
		
		function getTeamRoster(id) {
			const uri = '/teams/' + id + '/players';
			return commonFunc.getReqObj(uri);
		}
	}
})();