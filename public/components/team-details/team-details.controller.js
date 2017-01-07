(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('teamDetailsCtrl', TeamDetailsController);
	
	TeamDetailsController.$inject = ['$state', 'teamDetailsTabList'];
	
	function TeamDetailsController($state, teamDetailsTabList) {
		var vm = this;
		
		vm.tabs = teamDetailsTabList;
		vm.selectedTab = vm.tabs[0];
		
		vm.setSelectedTab = setSelectedTab;
		vm.tabClass = tabClass;
		
		$state.go('team-details.overviews');
		
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