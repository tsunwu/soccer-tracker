(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('teamRosterCtrl', TeamRosterController);
	
	TeamRosterController.$inject = ['$stateParams', '$moment', 'teamDetailsFactory'];
	
	function TeamRosterController($stateParams, $moment, teamDetailsFactory) {
		var vm = this;
		
		vm.sortOrder = '+name';
		vm.propertyName = 'name';
		vm.reverse = false;
		
		vm.getAge = getAge;
		vm.sortBy = sortBy;
		
		getTeamRoster();
		
		function getTeamRoster() {
			teamDetailsFactory.getTeamRoster($stateParams.teamId)
				.then(response => {
					vm.rosterList = response.data.players;
					vm.hasPlayers = vm.rosterList.length > 0;
					vm.avgAge = getAvgAge();
				});
		}
		
		function getAge(dob) {
			return $moment(dob, 'YYYY-MM-DD').fromNow().split(' ')[0];
		}
		
		function sortBy(propertyName) {
			var order = '';
			
			if (vm.propertyName !== propertyName)
				vm.reverse = false;
			else 
				vm.reverse = !vm.reverse;
			
			vm.propertyName = propertyName;

			if(propertyName == 'dateOfBirth')
				order = vm.reverse ? '+' : '-';
			else
				order = vm.reverse ? '-' : '+';
			
			vm.sortOrder = order + propertyName;
		}
		
		function getAvgAge() {
			var totalAge = 0;
			
			vm.rosterList.forEach(player => {
				totalAge += parseInt(getAge(player.dateOfBirth));
			});
			return Math.round(totalAge / vm.rosterList.length);
		}
	}
})();