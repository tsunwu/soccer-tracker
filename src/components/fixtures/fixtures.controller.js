export default class FixturesController {

	constructor($state, $stateParams, http, commonFunc, _) {
    'ngInject';

		this.go = $state.go;
		this.competitionId = $stateParams.leagueId || $stateParams.cupId;
		this.getLeagueFixtures = http.getLeagueFixtures;
		this.getId = commonFunc.getId;
		this._ = _;

		this.fixturesList = [];
		this.lastMatchDay = 0;
		this.competitionType = $state.current.name.split('.')[0];
		this.matchDay = parseInt($stateParams.matchday);
	}

	$onInit() {
		this.getLeagueFixtures(this.competitionId)
			.then(response => {
				this.fixturesList = response.data.fixtures;
				this.lastMatchDay = this.getTotalMatchDay(this.fixturesList);
			});
	}

	getTeamId(link) {
		return this.getId(link);
	}

	getTotalMatchDay(list) {
		this._.orderBy(list, ['matchday', 'date'], ['asc', 'asc']);
		return list.pop().matchday;
	}

	getWinner(result, team) {
		let matchResult = result.penaltyShootout || result.extraTime || result;
		let winner = FixturesController.compareGoals(matchResult);

		return team === winner ? 'winner' : '';
	}

	toPreviousMatchDay() {
		this.matchDay = this.matchDay - 1;
		this.go(this.competitionType + '.fixtures', {matchday: this.matchDay}, {notify: false});
	}

	toNextMatchDay() {
		this.matchDay = this.matchDay + 1;
		this.go(this.competitionType + '.fixtures', {matchday: this.matchDay}, {notify: false});
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