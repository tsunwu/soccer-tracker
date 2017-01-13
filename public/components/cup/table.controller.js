(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('tableCtrl', TableController);
	
	TableController.$inject = ['$stateParams', 'leagueFactory', 'noTableMessage'];
	
	function TableController($stateParams, leagueFactory, noTableMessage) {
		var vm = this;
		
		vm.hasTable = false;
		
		getCupTable();
		
		function getCupTable() {
			leagueFactory.getTable($stateParams.cupId)
				.then(response => {
					if(angular.isUndefined(response))
						vm.noTableMessage = noTableMessage;
					else {
						vm.cupTable = response.data;
						vm.hasTable = true;
					}
				});
		}
	}
})();