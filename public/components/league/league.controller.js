(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('leagueCtrl', LeagueController);
	
	LeagueController.$inject = ['$state', '$stateParams', 'leagueTabList', 'http', 'commonFunc'];
	
	function LeagueController($state, $stateParams, leagueTabList, http, commonFunc) {
		var vm = this;
		
		vm.tabs = leagueTabList;
		vm.selectedTab = commonFunc.getChildState(vm.tabs);
		
		vm.setSelectedTab = setSelectedTab;
		vm.tabClass = tabClass;
		
		getLeagueDetails();
		
		function getLeagueDetails() {
			http.getCompetitionDetails($stateParams.leagueId)
				.then(response => {
					vm.leagueDetails = response.data;
				});
		}
		
		function setSelectedTab(tab) {
			vm.selectedTab = tab;
		}
		
		function tabClass(tab) {
			if(vm.selectedTab == tab)
				return 'active';
			else 
				return '';
		}
	}
})();