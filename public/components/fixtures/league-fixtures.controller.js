(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('leaFixturesCtrl', LeagueFixturesController);
	
	LeagueFixturesController.$inject = ['$state', '$stateParams', 'leagueFactory', 'fixturesFactory', '_'];
	
	function LeagueFixturesController($state, $stateParams, leagueFactory, fixturesFactory, _) {
		var vm = this;
		var lastMatchDay = 0;
		
		vm.getWinner = getWinner;
		vm.toPreviousMatchDay = toPreviousMatchDay;
		vm.toNextMatchDay = toNextMatchDay;
		vm.isFirstDay = isFirstDay;
		vm.isLastDay = isLastDay;
		
		vm.matchDay = parseInt($stateParams.matchday);
		
		getFixtures();
		
		function getFixtures() {
			fixturesFactory.getLeagueFixtures($stateParams.leagueId)
				.then(response => {
					vm.fixturesList = response.data.fixtures;
					getTotalMatchDay(vm.fixturesList);
				});
		}
		
		function getTotalMatchDay(list) {
			_.orderBy(list, ['matchday', 'date'], ['asc', 'asc']);
			lastMatchDay = list[list.length -1].matchday;
		}
		
		function getWinner(result, team) {
			var winner = result.goalsHomeTeam > result.goalsAwayTeam ? 'home' : result.goalsAwayTeam > result.goalsHomeTeam ? 'away' : '';
			if (team == winner)
				return 'winner';
			else
				return '';
		}
		
		function toPreviousMatchDay() {
			vm.matchDay = vm.matchDay - 1;
			$state.go('league.fixtures', {matchday: vm.matchDay}, {notify: false});
		}
		
		function toNextMatchDay() {
			vm.matchDay = vm.matchDay + 1;
			$state.go('league.fixtures', {matchday: vm.matchDay}, {notify: false});
		}
		
		function isFirstDay() {
			return vm.matchDay == 1 ? 'disabled' : '';
		}
		
		function isLastDay() {
			return vm.matchDay == lastMatchDay ? 'disabled' : '';
		}
	}
})();