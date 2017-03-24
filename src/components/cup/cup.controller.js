export default class CupController {

	constructor($stateParams, http, cupTabList, commonFunc) {
    'ngInject';

    this.getCompetitionDetails = http.getCompetitionDetails;
    this.cupId = $stateParams.cupId;

		this.tabs = cupTabList;
    this.selectedTab = commonFunc.getChildState(this.tabs);
    this.cupDetails = {};
	}

  $onInit() {
    this.getCompetitionDetails(this.cupId)
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