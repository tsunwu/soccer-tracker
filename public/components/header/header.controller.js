(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('headerCtrl', HeaderController);
	
	HeaderController.$inject = ['$state', 'pageList', 'headerFactory'];
	
	function HeaderController($state, pageList, headerFactory) {
		var vm = this;
		
		vm.pages = pageList;
		vm.activeLink = activeLink;
		
		getLeagueList();
		
        
		function getLeagueList() {
			headerFactory.getLeagueList()
				.then(success => {
					vm.leaguesList = success.data;
					console.log(vm.leaguesList);
				})
				.catch(error => {
					console.log(error);
				});
		}
		
		function activeLink(viewState) {
            return ($state.is(viewState) ? "active" : "");
        }
	}
})();