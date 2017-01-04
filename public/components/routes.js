(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.config(soccerTrackerRouter);
	
	soccerTrackerRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
	
	function soccerTrackerRouter($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('home');
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: './public/views/tpl/home.tpl.html',
				controller: 'homeCtrl',
				controllerAs: 'home'
			});
	}
})();