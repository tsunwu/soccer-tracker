(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('tableCtrl', TableController);
	
	TableController.$inject = ['$stateParams', 'leagueFactory'];
	
	function TableController($stateParams, leagueFactory) {
		var vm = this;
		
		getCupTable();
		
		function getCupTable() {
			leagueFactory.getTable($stateParams.cupId)
				.then(response => {
					console.log(response);
					if(response == undefined)
						leagueFactory.getCompetitionFixtures($stateParams.cupId)
							.then(response => {
								vm.cupTable = response.data;
							});
					else 
						vm.cupTable = response.data;
				});
		}
	}
})();