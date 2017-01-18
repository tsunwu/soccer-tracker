(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('teamOverviewsCtrl', TeamOverviewsController);
	
	TeamOverviewsController.$inject =['$stateParams', 'http'];
	
	function TeamOverviewsController($stateParams, http) {
		var vm = this;
		
		getTeamDetailsById();
		
		
		function getTeamDetailsById() {
			http.getTeamDetails($stateParams.teamId)
				.then(response => {
					vm.details = response.data;
				});
		}
	}
})();