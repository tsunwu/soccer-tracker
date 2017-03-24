export default class HeaderController {

	constructor($state, http, regions) {
	  'ngInject';

	  this.includes = $state.includes;
		this.getLeagueList = http.getLeagueList;
    this.regions = regions;

		this.leagues = {};
		this.cups = [];
	}

	activeLink(viewState) {
		return this.includes(viewState) ? "active" : "";
	}

  $onInit() {
    this.getLeagueList()
        .then(response => {
          Object.assign(this, HeaderController.sortCompetitions(response.data, this.regions));
        });
  }

  static sortCompetitions(data, regions) {
    let leagues = angular.copy(regions);
    let cups = [];

    for(let item of data) {
      switch(item.league) {
        case 'PL':
        case 'EL1':
        case 'ELC':
          leagues.England.push(item);
          break;
        case 'FL1':
        case 'FL2':
          leagues.France.push(item);
          break;
        case 'BL1':
        case 'BL2':
        case 'BL3':
          leagues.Germany.push(item);
          break;
        case 'GSL':
          leagues.Greece.push(item);
          break;
        case 'SA':
        case 'SB':
          leagues.Italy.push(item);
          break;
        case 'DED':
          leagues.Netherlands.push(item);
          break;
        case 'PPL':
          leagues.Portugal.push(item);
          break;
        case 'PD':
        case 'SD':
          leagues.Spain.push(item);
          break;
        case 'DFB':
        case 'FAC':
        case 'CDR':
        case 'CL':
        case 'EL':
        case 'EC':
        case 'WC':
          cups.push(item);
          break;
        default:
          leagues.Others.push(item);
      }
    }

    return {
      leagues,
      cups
    };
  }
}