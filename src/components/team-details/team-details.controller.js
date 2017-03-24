export default class TeamDetailsController {

	constructor(teamDetailsTabList, commonFunc) {
		'ngInject';

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