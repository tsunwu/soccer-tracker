export default class TeamsController {

	constructor($stateParams, http) {
		'ngInject';

		this.competitionId = $stateParams.leagueId || $stateParams.cupId;
		this.getTeams = http.getTeams;

		this.teamsList = [];
	}

	$onInit() {
		this.getTeams(this.competitionId)
			.then(response => {
        this.teamsList = response.data;
			});
	}

	getTeamId(team) {
		return team._links.self.href.split('/').pop();
	}
}