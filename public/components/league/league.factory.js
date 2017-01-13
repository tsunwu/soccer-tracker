(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.factory('leagueFactory', LeagueFactory);
	
	LeagueFactory.$inject = ['commonFunc'];
	
	function LeagueFactory(commonFunc) {
		
		return {
			getCompetitionDetails,
			getTable,
			getTeams,
			getCompetitionFixtures
		};
		
		function getCompetitionDetails(id) {
			const uri = '/competitions/' + id;
			return commonFunc.getReqObj(uri);
		}
		
		function getTable(id) {
			const uri = '/competitions/' + id + '/leagueTable';
			return commonFunc.getReqObj(uri);
		}
		
		function getTeams(id) {
			const uri = '/competitions/' + id + '/teams';
			return commonFunc.getReqObj(uri);
		}
		
		function getCompetitionFixtures(id) {
			const uri = '/competitions/' + id + '/fixtures';
			return commonFunc.getReqObj(uri);
		}
	}
})();
