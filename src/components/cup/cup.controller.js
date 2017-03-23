export default class CupController {
	constructor($stateParams, http, cupTabList, commonFunc) {
    this.http = http;
    this.$stateParams = $stateParams;

		this.tabs = cupTabList;
    this.selectedTab = commonFunc.getChildState(this.tabs);
    this.cupDetails = {};
	}

  $onInit() {
    this.http.getCompetitionDetails(this.$stateParams.cupId)
        .then(response => {
          this.cupDetails = response.data;
        });
  }

  setSelectedTab(tab) {
    this.selectedTab = tab;
  }

  tabClass(tab) {
    return this.selectedTab === tab ? 'active' : '';
  }
}

CupController.$inject = ['$stateParams', 'http', 'cupTabList', 'commonFunc'];