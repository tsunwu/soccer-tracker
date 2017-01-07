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
			})
			.state('league', {
				url: '/league/:leagueId',
				templateUrl: './public/views/tpl/league.tpl.html',
				controller: 'leagueCtrl',
				controllerAs: 'league'
			})
			.state('league.standings', {
				url: '/standings',
				templateUrl: './public/views/tpl/standings.tpl.html',
				controller: 'standingsCtrl',
				controllerAs: 'standings'
			})
			.state('league.teams', {
				url: '/teams',
				templateUrl: './public/views/tpl/teams.tpl.html',
				controller: 'teamsCtrl',
				controllerAs: 'teams'
			})
			.state('team-details', {
				url: '/team-details/:teamId',
				templateUrl: './public/views/tpl/team-details.tpl.html',
				controller: 'teamDetailsCtrl',
				controllerAs: 'details'
			})
			.state('team-details.overviews', {
				url: '/overviews',
				templateUrl: './public/views/tpl/team-overviews.tpl.html',
				controller: 'teamOverviewsCtrl',
				controllerAs: 'overviews'
			})
			.state('team-details.players', {
				url: '/players',
				templateUrl: './public/views/tpl/team-players.tpl.html',
				controller: 'teamPlayersCtrl',
				controllerAs: 'players'
			})
			.state('team-details.fixtures', {
				url: '/fixtures',
				templateUrl: './public/views/tpl/team-fixtures.tpl.html',
				controller: 'teamFixturesCtrl',
				controllerAs: 'teamFixtures'
			});
	}
})();