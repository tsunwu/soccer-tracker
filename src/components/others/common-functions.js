export default function CommonFunction($http, $state) {
	'ngInject';

	return {
		getReqObj,
		getChildState,
		getId
	};

	function getReqObj(uri) {
		const req = {
				method: 'GET',
				url: 'http://api.football-data.org/v1' + uri,
				dataType: 'json',
				cache: true,
				headers: {
					'X-Auth-Token': 'aba00e4543de443c8f9fbbbb0003461d'
				}
		};
		return $http(req)
			.then(data => {
				return data;
			})
			.catch(error => {
				console.log(error);
			});
	}

	function getChildState(tabs) {
		let childState = {};
		for(let tab of tabs) {
      if(tab.link === $state.current.name.split('.')[1])
        childState = tab;
		}
		return (Object.keys(childState).length > 0) ? childState : tabs[0];
	}

	function getId(link) {
		return link.replace('http://api.football-data.org/v1/', '').match(/\d+/);
	}
}
