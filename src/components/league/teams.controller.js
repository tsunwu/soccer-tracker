export default class TeamsController {
	constructor($stateParams, http) {
		this.id = $stateParams.leagueId || $stateParams.cupId;
		this.http = http;

		this.teamsList = [];
	}

	$onInit() {
		this.http.getTeams(this.id)
			.then(response => {
        this.teamsList = TeamsController.getTeamId(response.data);
			});
	}

	static getTeamId(data) {
		for(let team of data.teams) {
      team.id = team._links.self.href.split('/').pop();
		}
		return data;
	}
}

TeamsController.$inject = ['$stateParams', 'http'];