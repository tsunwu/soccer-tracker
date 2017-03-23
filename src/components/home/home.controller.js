export default class HomeController {
	constructor(http) {
		this.http = http;
	}
	// var competitionIdList = {};
	//
	// function getCompetitions() {
	// 	http.getLeagueList()
	// 		.then(response => {
	// 			getId(response.data);
	// 		});
	// }
	//
	// function getId(competitions) {
	// 	_.forEach(competitions, competition => {
	//
	// 	})
	// }
}

HomeController.$inject = ['http'];