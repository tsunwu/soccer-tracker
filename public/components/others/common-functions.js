(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.factory('commonFunc', CommonFunction);
	
	CommonFunction.$inject = ['$http'];
	
	function CommonFunction($http) {
		return {
			getReqObj: getReqObj
		};
		
		function getReqObj(uri) {
			const req = {
					method: 'GET',
					url: 'http://api.football-data.org/v1' + uri,
					dataType: 'json',
					headers: {
						'X-Auth-Token': 'aba00e4543de443c8f9fbbbb0003461d'
					}
			};
			return $http(req)
				.then(data => {
					return data;
				})
				.catch(error => {
					console.log(error);
				});
		}
	}
})();