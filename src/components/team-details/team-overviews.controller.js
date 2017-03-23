export default class TeamOverviewsController {
	constructor($stateParams, http) {
		this.teamId = $stateParams.teamId;
		this.http = http;
		this.details = [];
	}

	$onInit() {
		this.http.getTeamDetails(this.teamId)
			.then(response => {
				this.details = response.data;
			});
	}
}

TeamOverviewsController.$inject =['$stateParams', 'http'];