(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('tableCtrl', TableController);
	
	TableController.$inject = ['$stateParams', 'http', 'noTableMessage'];
	
	function TableController($stateParams, http, noTableMessage) {
		var vm = this;
		
		vm.hasTable = false;
		
		getCupTable();
		
		function getCupTable() {
			http.getTable($stateParams.cupId)
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