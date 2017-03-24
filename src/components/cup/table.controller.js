export default class TableController {

	constructor($stateParams, http, noTableMessage) {
    'ngInject';

		this.cupId = $stateParams.cupId;
		this.getTable = http.getTable;

		this.noTableMessage = noTableMessage;
		this.hasTable = false;
		this.message = '';
		this.cupTable = {};
	}

	$onInit() {
		this.getTable(this.cupId)
			.then(response => {
				if(response) {
          this.cupTable = response.data;
          this.hasTable = true;
        } else
          this.message = this.noTableMessage;
			});
	}
}