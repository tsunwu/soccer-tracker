(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('cupCtrl', CupController);
	
	CupController.$inject = ['$state', 'cupTabList'];
	
	function CupController($state, cupTabList) {
		var vm = this;
		
		vm.tabs = cupTabList;
		vm.selectedTab = vm.tabs[0];
		
		vm.setSelectedTab = setSelectedTab;
		vm.tabClass = tabClass;
		
		$state.go('cup.table');
		
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