(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.factory('fixturesFactory', FixturesFactory);
	
	FixturesFactory.$inject = ['commonFunc'];
	
	function FixturesFactory(commonFunc) {
		
		return {
			getLeagueFixtures: getLeagueFixtures
		};
		
		function getLeagueFixtures(id) {
			const uri = '/competitions/' + id + '/fixtures';
			return commonFunc.getReqObj(uri);
		}
	}
})();