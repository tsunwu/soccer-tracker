(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('headerCtrl', HeaderController);
	
	HeaderController.$inject = ['$state', 'pageList', 'http', 'regions'];
	
	function HeaderController($state, pageList, http, regions) {
		var vm = this;
		
		vm.pages = pageList;
		vm.activeLink = activeLink;
		
		getLeagueList();
        
		function getLeagueList() {
			http.getLeagueList()
				.then(response => {
					sortCompetitions(response.data);
				});
		}
		
		function activeLink(viewState) {
            return ($state.includes(viewState) ? "active" : "");
        }
		
		function sortCompetitions(data) {
			var leagues = regions;
			var cups = [];
			data.forEach(item => {
				var lea = item.league;
				if(lea == 'PL' || lea == 'EL1' || lea == 'ELC')
					leagues.England.push(item);
				else if(lea == 'FL1' || lea == 'FL2')
					leagues.France.push(item);
				else if(lea == 'BL1' || lea == 'BL2' || lea == 'BL3')
					leagues.Germany.push(item);
				else if(lea == 'GSL')
					leagues.Greece.push(item);
				else if(lea == 'SA' || lea == 'SB')
					leagues.Italy.push(item);
				else if(lea == 'DED')
					leagues.Netherlands.push(item);
				else if(lea == 'PPL')
					leagues.Portugal.push(item);
				else if(lea == 'PD' || lea == 'SD')
					leagues.Spain.push(item);
				else if(lea == 'DFB' || lea == 'FAC' || lea ==' CDR' || lea == 'CL' || lea == 'EL' || lea == 'EC' || lea == 'WC')
					cups.push(item);
				else
					leagues.Others.push(item);
			});
			vm.leagues = leagues;
			vm.cups = cups;
		}
	}
})();