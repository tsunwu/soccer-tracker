export default class TeamOverviewsController {

	constructor($stateParams, http) {
		'ngInject';

		this.teamId = $stateParams.teamId;
		this.getTeamDetails = http.getTeamDetails;
		this.details = [];
	}

	$onInit() {
		this.getTeamDetails(this.teamId)
			.then(response => {
				this.details = response.data;
			});
	}
}