(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('teamDetailsCtrl', TeamDetailsController);
	
	TeamDetailsController.$inject = ['$state', 'teamDetailsTabList', 'commonFunc'];
	
	function TeamDetailsController($state, teamDetailsTabList, commonFunc) {
		var vm = this;
		
		vm.tabs = teamDetailsTabList;
		vm.selectedTab = commonFunc.getChildState(vm.tabs);
		
		vm.setSelectedTab = setSelectedTab;
		vm.tabClass = tabClass;
		
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