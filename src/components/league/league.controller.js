export default class LeagueController {

	constructor($stateParams, leagueTabList, http, commonFunc) {
		'ngInject';

		this.getCompetitionDetails = http.getCompetitionDetails;
		this.tabs = leagueTabList;
		this.leagueId = $stateParams.leagueId;
		this.selectedTab = commonFunc.getChildState(this.tabs);
		this.leagueDetails = {};
	}

	$onInit() {
    this.getCompetitionDetails(this.leagueId)
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