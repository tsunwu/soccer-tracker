(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.config(soccerTrackerRouter);
	
	soccerTrackerRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
	
	function soccerTrackerRouter($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('home');
		$urlRouterProvider.when('/league/:leagueId', '/league/:leagueId/standings')
						  .when('/cup/:cupId', '/cup/:cupId/table')
						  .when('/team-details/:teamId', '/team-details/:teamId/overviews');
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
			.state('league.fixtures', {
				url: '/fixtures/:matchday',
				templateUrl: './public/views/tpl/fixtures.tpl.html',
				controller: 'fixturesCtrl',
				controllerAs: 'fixtures'
			})
			.state('cup', {
				url: '/cup/:cupId',
				templateUrl: './public/views/tpl/cup.tpl.html',
				controller: 'cupCtrl',
				controllerAs: 'cup'
			})
			.state('cup.table', {
				url: '/table',
				templateUrl: './public/views/tpl/table.tpl.html',
				controller: 'tableCtrl',
				controllerAs: 'table'
			})
			.state('cup.teams', {
				url: '/teams',
				templateUrl: './public/views/tpl/teams.tpl.html',
				controller: 'teamsCtrl',
				controllerAs: 'teams'
			})
			.state('cup.fixtures', {
				url: '/fixtures/:matchday',
				templateUrl: './public/views/tpl/fixtures.tpl.html',
				controller: 'fixturesCtrl',
				controllerAs: 'fixtures'
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
			.state('team-details.roster', {
				url: '/roster',
				templateUrl: './public/views/tpl/team-roster.tpl.html',
				controller: 'teamRosterCtrl',
				controllerAs: 'roster'
			})
			.state('team-details.fixtures', {
				url: '/fixtures',
				templateUrl: './public/views/tpl/team-fixtures.tpl.html',
				controller: 'teamFixturesCtrl',
				controllerAs: 'teamFixtures'
			});
	}
})();