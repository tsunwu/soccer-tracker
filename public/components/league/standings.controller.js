(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('standingsCtrl', StandingsController);
	
	StandingsController.$inject = ['$stateParams', 'leagueFactory'];
	
	function StandingsController($stateParams, leagueFactory) {
		var vm = this;
		
		getLeagueTable();
		
		function getLeagueTable() {
			leagueFactory.getTable($stateParams.leagueId)
				.then(response => {
					vm.leagueTable = response.data;
				});
		}
	}
})();