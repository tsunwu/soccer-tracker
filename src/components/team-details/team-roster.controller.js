export default class TeamRosterController {
	constructor($stateParams, $moment, http, squadNotAvailable, _) {
		this.$moment = $moment;
		this.http = http;
		this.noSquad = squadNotAvailable;
		this._ = _;

		this.avgAge = 0;
		this.hasPlayers = false;
		this.predicate = 'name';
    this.reverse = false;
    this.rosterList = [];
		this.rosterMessage = '';
    this.teamId = $stateParams.teamId;
	}

	$onInit() {
		this.http.getTeamRoster(this.teamId)
			.then(response => {
				if(response && !this._.isEmpty(response.data.players)) {
          this.rosterList = response.data.players;
          this.hasPlayers = this.rosterList.length > 0;
          this.avgAge = this.getAvgAge();
				} else {
					this.rosterMessage = this.noSquad;
				}
			});
	}

	getAge(dob) {
		return this.$moment(dob, 'YYYY-MM-DD').fromNow().split(' ')[0];
	}

	sortBy(predicate) {
		this.reverse = this.predicate !== predicate ? predicate === 'dateOfBirth' : !this.reverse;
		this.predicate = predicate;
	}

	getAvgAge() {
		let totalAge = 0;

		this.rosterList.forEach(player => {
			totalAge += parseInt(this.getAge(player.dateOfBirth));
		});
		return Math.round(totalAge / this.rosterList.length);
	}
}

TeamRosterController.$inject = ['$stateParams', '$moment', 'http', 'squadNotAvailable', '_'];