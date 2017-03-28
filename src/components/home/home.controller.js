export default class HomeController {

	constructor(http) {
		'ngInject';

		this.http = http;
		this.competitionIdList = [];
		this.message = 'This is Home Page 8250!';
	}

	getId() {
    let id = 0;
    console.log('log 1:', id);
    console.log('log 2:', id);
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