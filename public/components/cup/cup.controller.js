(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('cupCtrl', CupController);
	
	CupController.$inject = ['$state', '$stateParams', 'http', 'cupTabList', 'commonFunc'];
	
	function CupController($state, $stateParams, http, cupTabList, commonFunc) {
		var vm = this;
		
		vm.tabs = cupTabList;
		vm.selectedTab = commonFunc.getChildState(vm.tabs);
		
		vm.setSelectedTab = setSelectedTab;
		vm.tabClass = tabClass;
		
		getCupDetails();
		
		function getCupDetails() {
			http.getCompetitionDetails($stateParams.cupId)
				.then(response => {
					vm.cupDetails = response.data;
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