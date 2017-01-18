(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('fixturesCtrl', FixturesController);
	
	FixturesController.$inject = ['$state', '$stateParams', 'http', 'commonFunc', '_'];
	
	function FixturesController($state, $stateParams, http, commonFunc, _) {
		var vm = this;
		var lastMatchDay = 0;
		const competitionType = $state.current.name.split('.')[0];
		
		vm.getWinner = getWinner;
		vm.toPreviousMatchDay = toPreviousMatchDay;
		vm.toNextMatchDay = toNextMatchDay;
		vm.isFirstDay = isFirstDay;
		vm.isLastDay = isLastDay;
		vm.getTeamId = commonFunc.getId;
		
		vm.matchDay = parseInt($stateParams.matchday);
		
		getFixtures();
		
		function getFixtures() {
			http.getLeagueFixtures((competitionType == 'league') ? $stateParams.leagueId : $stateParams.cupId)
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
			var winner = '';
			if(result.penaltyShootout) {
				winner = compareGoals(result.penaltyShootout);
			} else if(result.extraTime) {
				winner = compareGoals(result.extraTime);
			} else {
				winner = compareGoals(result);
			}
			if (team == winner)
				return 'winner';
			else
				return '';
		}
		
		function compareGoals(result) {
			return result.goalsHomeTeam > result.goalsAwayTeam ? 'home' : result.goalsAwayTeam > result.goalsHomeTeam ? 'away' : '';
		}
		
		function toPreviousMatchDay() {
			vm.matchDay = vm.matchDay - 1;
			$state.go(competitionType + '.fixtures', {matchday: vm.matchDay}, {notify: false});
		}
		
		function toNextMatchDay() {
			vm.matchDay = vm.matchDay + 1;
			$state.go(competitionType + '.fixtures', {matchday: vm.matchDay}, {notify: false});
		}
		
		function isFirstDay() {
			return vm.matchDay == 1 ? 'disabled' : '';
		}
		
		function isLastDay() {
			return vm.matchDay == lastMatchDay ? 'disabled' : '';
		}
	}
})();