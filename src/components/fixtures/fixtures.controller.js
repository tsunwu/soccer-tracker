export default class FixturesController {
	constructor($state, $stateParams, http, commonFunc, _) {
		this.$state = $state;
		this.$stateParams = $stateParams;
		this.http = http;
		this.commonFunc = commonFunc;
		this._ = _;

		this.fixturesList = [];
		this.lastMatchDay = 0;
		this.competitionType = $state.current.name.split('.')[0];
		this.matchDay = parseInt($stateParams.matchday);
	}

	$onInit() {
		this.http.getLeagueFixtures((this.competitionType === 'league') ? this.$stateParams.leagueId : this.$stateParams.cupId)
			.then(response => {
				this.fixturesList = response.data.fixtures;
				this.lastMatchDay = this.getTotalMatchDay(this.fixturesList);
			});
	}

	getTeamId(link) {
		return this.commonFunc.getId(link);
	}

	getTotalMatchDay(list) {
		this._.orderBy(list, ['matchday', 'date'], ['asc', 'asc']);
		return list.pop().matchday;
	}

	getWinner(result, team) {
		let winner = '';
		if(result.penaltyShootout) {
			winner = FixturesController.compareGoals(result.penaltyShootout);
		} else if(result.extraTime) {
			winner = FixturesController.compareGoals(result.extraTime);
		} else {
			winner = FixturesController.compareGoals(result);
		}
		return team === winner ? 'winner' : '';
	}

	toPreviousMatchDay() {
		this.matchDay = this.matchDay - 1;
		this.$state.go(this.competitionType + '.fixtures', {matchday: this.matchDay}, {notify: false});
	}

	toNextMatchDay() {
		this.matchDay = this.matchDay + 1;
		this.$state.go(this.competitionType + '.fixtures', {matchday: this.matchDay}, {notify: false});
	}

	isFirstDay() {
		return this.matchDay === 1 ? 'disabled' : '';
	}

	isLastDay() {
		return this.matchDay === this.lastMatchDay ? 'disabled' : '';
	}

	static compareGoals(result) {
		return result.goalsHomeTeam > result.goalsAwayTeam ? 'home' : result.goalsAwayTeam > result.goalsHomeTeam ? 'away' : '';
	}
}

FixturesController.$inject = ['$state', '$stateParams', 'http', 'commonFunc', '_'];