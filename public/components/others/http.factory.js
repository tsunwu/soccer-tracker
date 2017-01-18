(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.factory('http', httpFactory);
	
	httpFactory.$inject = ['commonFunc'];
	
	function httpFactory(commonFunc) {
		return {
			getLeagueFixtures,
			getLeagueList,
			getCompetitionDetails,
			getTable,
			getTeams,
			getCompetitionFixtures,
			getTeamDetails,
			getTeamRoster
		};
		
		function getLeagueFixtures(id) {
			const uri = '/competitions/' + id + '/fixtures';
			return commonFunc.getReqObj(uri);
		}
		
		function getLeagueList() {
			const uri = '/competitions';
			return commonFunc.getReqObj(uri);
		}
		
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