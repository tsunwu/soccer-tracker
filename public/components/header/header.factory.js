(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.factory('headerFactory', HeaderFactory);
	
	HeaderFactory.$inject = ['$http'];
	
	function HeaderFactory($http) {
		return {
			getLeagueList: getLeagueList
		};
		
		function getLeagueList() {
			const req = {
					method: 'GET',
					url: 'http://api.football-data.org/v1/competitions',
					dataType: 'json',
					headers: {
						'X-Auth-Token': 'aba00e4543de443c8f9fbbbb0003461d'
					}
			};
			return $http(req);
		}
	}
})();