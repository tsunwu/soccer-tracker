(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('leagueCtrl', LeagueController);
	
	LeagueController.$inject = ['$state', 'leagueTabList'];
	
	function LeagueController($state, leagueTabList) {
		var vm = this;
		
		vm.tabs = leagueTabList;
		vm.selectedTab = vm.tabs[0];
		
		vm.setSelectedTab = setSelectedTab;
		vm.tabClass = tabClass;
		
		$state.go('league.standings');
		
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