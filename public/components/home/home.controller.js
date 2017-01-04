(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('homeCtrl', HomeController);
	
	HomeController.$inject = ['$http'];
	
	function HomeController($http) {
		var vm = this;
		
		getLeaguesList();
		
		vm.message = 'This is the home page';
		
		function getLeaguesList() {
			const req = {
					method: 'GET',
					url: 'http://api.football-data.org/v1/competitions',
					dataType: 'json',
					headers: {
						'X-Auth-Token': 'aba00e4543de443c8f9fbbbb0003461d'
					}
			};
			$http(req).then(success => {
				vm.leaguesList = success.data;
			});
		}
	}
})();