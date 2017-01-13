(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('leaFixturesCtrl', LeagueFixturesController);
	
	LeagueFixturesController.$inject = ['$stateParams', 'leagueFactory', 'fixturesFactory'];
	
	function LeagueFixturesController($stateParams, leagueFactory, fixturesFactory) {
		var vm = this;
		
		vm.matchDay = $stateParams.matchday;
		
		getFixtures();
		
		function getFixtures() {
			fixturesFactory.getLeagueFixtures($stateParams.leagueId)
				.then(response => {
					vm.fixturesList = response.data.fixtures;
				});
		}
		
//		function sortByMatchDay(fixtures) {
//			vm.fixturesList = {};
//			fixtures.forEach(fixture => {
//				var matchDay = fixture.matchday;
//				if(vm.fixturesList[matchDay]) {
//					vm.fixturesList[matchDay].push(fixture);
//				} else {
//					vm.fixturesList[matchDay] = [];
//				vm.fixturesList[matchDay].push(fixture);
//				}
//			});
//			console.log(vm.fixturesList);
//		}
	}
})();