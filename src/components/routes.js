export default function soccerTrackerRouter($stateProvider, $urlRouterProvider) {
	'ngInject';

	const tpl = '../dist/tpl';

	$urlRouterProvider.otherwise('home');
	$urlRouterProvider.when('/league/:leagueId', '/league/:leagueId/standings')
						.when('/cup/:cupId', '/cup/:cupId/table')
						.when('/team-details/:teamId', '/team-details/:teamId/overviews');
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: tpl + '/home.tpl.html',
			controller: 'homeCtrl',
			controllerAs: 'home'
		})
		.state('league', {
			url: '/league/:leagueId',
			templateUrl: tpl + '/league.tpl.html',
			controller: 'leagueCtrl',
			controllerAs: 'league'
		})
		.state('league.standings', {
			url: '/standings',
			templateUrl: tpl + '/standings.tpl.html',
			controller: 'standingsCtrl',
			controllerAs: 'standings'
		})
		.state('league.teams', {
			url: '/teams',
			templateUrl: tpl + '/teams.tpl.html',
			controller: 'teamsCtrl',
			controllerAs: 'teams'
		})
		.state('league.fixtures', {
			url: '/fixtures/:matchday',
			templateUrl: tpl + '/fixtures.tpl.html',
			controller: 'fixturesCtrl',
			controllerAs: 'fixtures'
		})
		.state('cup', {
			url: '/cup/:cupId',
			templateUrl: tpl + '/cup.tpl.html',
			controller: 'cupCtrl',
			controllerAs: 'cup'
		})
		.state('cup.table', {
			url: '/table',
			templateUrl: tpl + '/table.tpl.html',
			controller: 'tableCtrl',
			controllerAs: 'table'
		})
		.state('cup.teams', {
			url: '/teams',
			templateUrl: tpl + '/teams.tpl.html',
			controller: 'teamsCtrl',
			controllerAs: 'teams'
		})
		.state('cup.fixtures', {
			url: '/fixtures/:matchday',
			templateUrl: tpl + '/fixtures.tpl.html',
			controller: 'fixturesCtrl',
			controllerAs: 'fixtures'
		})
		.state('team-details', {
			url: '/team-details/:teamId',
			templateUrl: tpl + '/team-details.tpl.html',
			controller: 'teamDetailsCtrl',
			controllerAs: 'details'
		})
		.state('team-details.overviews', {
			url: '/overviews',
			templateUrl: tpl + '/team-overviews.tpl.html',
			controller: 'teamOverviewsCtrl',
			controllerAs: 'overviews'
		})
		.state('team-details.roster', {
			url: '/roster',
			templateUrl: tpl + '/team-roster.tpl.html',
			controller: 'teamRosterCtrl',
			controllerAs: 'roster'
		})
		.state('team-details.fixtures', {
			url: '/fixtures',
			templateUrl: tpl + '/team-fixtures.tpl.html',
			controller: 'teamFixturesCtrl',
			controllerAs: 'teamFixtures'
		});
}