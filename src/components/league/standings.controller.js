export default class StandingsController {
	constructor($stateParams, http, commonFunc) {
		this.leagueId = $stateParams.leagueId;
		this.http = http;

		this.leagueTable = [];
		this.getTeamId = commonFunc.getId;
	}

	$onInit() {
		this.http.getTable(this.leagueId)
			.then(response => {
				this.leagueTable = response.data;
			});
	}
}

StandingsController.$inject = ['$stateParams', 'http', 'commonFunc'];