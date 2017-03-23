export default class TableController {
	constructor($stateParams, http, noTableMessage) {
		this.$stateParams = $stateParams;
		this.http = http;

		this.noTableMessage = noTableMessage;
		this.hasTable = false;
		this.message = '';
		this.cupTable = {};
	}

	$onInit() {
		this.http.getTable(this.$stateParams.cupId)
			.then(response => {
				if(response) {
          this.cupTable = response.data;
          this.hasTable = true;
        } else
          this.message = this.noTableMessage;
			});
	}
}

TableController.$inject = ['$stateParams', 'http', 'noTableMessage'];