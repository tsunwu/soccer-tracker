(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('standingsCtrl', StandingsController);
	
	StandingsController.$inject = ['$stateParams', 'http', 'commonFunc'];
	
	function StandingsController($stateParams, http, commonFunc) {
		var vm = this;
		
		vm.getTeamId = commonFunc.getId;
		
		getLeagueTable();
		
		function getLeagueTable() {
			http.getTable($stateParams.leagueId)
				.then(response => {
					vm.leagueTable = response.data;
				});
		}
	}
})();