(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.factory('leagueFactory', LeagueFactory);
	
	LeagueFactory.$inject = ['commonFunc'];
	
	function LeagueFactory(commonFunc) {
		return {
			getTable: getTable,
			getTeams: getTeams,
			getCompetitionFixtures: getCompetitionFixtures
		};
		
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
