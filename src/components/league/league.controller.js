export default class LeagueController {
	constructor($stateParams, leagueTabList, http, commonFunc) {
		this.http = http;
		this.tabs = leagueTabList;
		this.$stateParams = $stateParams;
		this.selectedTab = commonFunc.getChildState(this.tabs);
		this.leagueDetails = {};
	}

	$onInit() {
    this.http.getCompetitionDetails(this.$stateParams.leagueId)
        .then(response => {
          this.leagueDetails = response.data;
        });
	}

	setSelectedTab(tab) {
		this.selectedTab = tab;
	}

	tabClass(tab) {
		return this.selectedTab === tab ? 'active' : '';
	}
}

LeagueController.$inject = ['$stateParams', 'leagueTabList', 'http', 'commonFunc'];