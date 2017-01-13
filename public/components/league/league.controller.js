(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('leagueCtrl', LeagueController);
	
	LeagueController.$inject = ['$state', '$stateParams', 'leagueTabList', 'leagueFactory'];
	
	function LeagueController($state, $stateParams, leagueTabList, leagueFactory) {
		var vm = this;
		
		vm.tabs = leagueTabList;
		vm.selectedTab = getChildState();
		
		vm.setSelectedTab = setSelectedTab;
		vm.tabClass = tabClass;
		
		getLeagueDetails();
		
		function getLeagueDetails() {
			leagueFactory.getCompetitionDetails($stateParams.leagueId)
				.then(response => {
					vm.leagueName = response.data.caption;
					vm.matchDay = response.data.currentMatchday;
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
		
		function getChildState() {
			var childState = {};
			vm.tabs.forEach(tab => {
				if(tab.link == $state.current.name.split('.')[1])
					childState = tab;
			});
			return (Object.keys(childState).length > 0) ? childState : vm.tabs[0];
		}
	}
})();