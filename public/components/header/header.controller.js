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
				.then(response => {
					vm.leaguesList = response.data;
				});
		}
		
		function activeLink(viewState) {
            return ($state.includes(viewState) ? "active" : "");
        }
	}
})();