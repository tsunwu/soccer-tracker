(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('teamsCtrl', TeamsController);
	
	TeamsController.$inject = ['$stateParams', 'leagueFactory'];
	
	function TeamsController($stateParams, leagueFactory) {
		var vm = this;
		
		getTeams();
		
		function getTeams() {
			leagueFactory.getTeams($stateParams.leagueId || $stateParams.cupId)
				.then(response => {
					vm.leagueTeams = response.data;
					getTeamId(vm.leagueTeams);
				});
		}
		
		function getTeamId(teams) {
			teams.teams.forEach(team => {
				team.id = team._links.self.href.split('/').pop();
				return team;
			});
		}
	}
})();