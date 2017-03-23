export default class CommonFunction {
	constructor($http, $state) {
		this.$http = $http;
		this.$state = $state;
	}

	getReqObj(uri) {
		const req = {
				method: 'GET',
				url: 'http://api.football-data.org/v1' + uri,
				dataType: 'json',
				cache: true,
				headers: {
					'X-Auth-Token': 'aba00e4543de443c8f9fbbbb0003461d'
				}
		};
		return this.$http(req)
			.then(data => {
				return data;
			})
			.catch(error => {
				console.log(error);
			});
	}

	getChildState(tabs) {
		let childState = {};
		tabs.forEach(tab => {
			if(tab.link === this.$state.current.name.split('.')[1])
				childState = tab;
		});
		return (Object.keys(childState).length > 0) ? childState : tabs[0];
	}

	static getId(link) {
		return link.replace('http://api.football-data.org/v1/', '').match(/\d+/);
	}
}

CommonFunction.$inject = ['$http', '$state'];
