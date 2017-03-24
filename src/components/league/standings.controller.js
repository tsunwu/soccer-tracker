export default class StandingsController {

	constructor($stateParams, http, commonFunc) {
		'ngInject';

		this.leagueId = $stateParams.leagueId;
		this.getTable = http.getTable;

		this.leagueTable = [];
		this.getTeamId = commonFunc.getId;
	}

	$onInit() {
		this.getTable(this.leagueId)
			.then(response => {
				this.leagueTable = response.data;
			});
	}
}