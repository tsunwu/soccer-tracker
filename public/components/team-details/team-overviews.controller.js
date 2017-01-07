(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('teamOverviewsCtrl', TeamOverviewsController);
	
	TeamOverviewsController.$inject =['$stateParams', 'teamDetailsFactory'];
	
	function TeamOverviewsController($stateParams, teamDetailsFactory) {
		var vm = this;
		
		getTeamDetailsById();
		
		
		function getTeamDetailsById() {
			teamDetailsFactory.getTeamDetails($stateParams.teamId)
				.then(response => {
					vm.details = response.data;
					console.log(vm.details);
				});
		}
	}
})();