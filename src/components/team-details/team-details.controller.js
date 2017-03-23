export default class TeamDetailsController {
	constructor(teamDetailsTabList, commonFunc) {
		this.tabs = teamDetailsTabList;
		this.selectedTab = commonFunc.getChildState(this.tabs);
	}

	setSelectedTab(tab) {
		this.selectedTab = tab;
	}

	tabClass(tab) {
		return this.selectedTab === tab ? 'active' : '';
	}
}

TeamDetailsController.$inject = ['teamDetailsTabList', 'commonFunc'];