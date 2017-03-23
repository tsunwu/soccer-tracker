export default function soccerTrackerRouter($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$urlRouterProvider.when('/league/:leagueId', '/league/:leagueId/standings')
						.when('/cup/:cupId', '/cup/:cupId/table')
						.when('/team-details/:teamId', '/team-details/:teamId/overviews');
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '../dist/tpl/home.tpl.html',
			controller: 'homeCtrl',
			controllerAs: 'home'
		})
		.state('league', {
			url: '/league/:leagueId',
			templateUrl: '../dist/tpl/league.tpl.html',
			controller: 'leagueCtrl',
			controllerAs: 'league'
		})
		.state('league.standings', {
			url: '/standings',
			templateUrl: '../dist/tpl/standings.tpl.html',
			controller: 'standingsCtrl',
			controllerAs: 'standings'
		})
		.state('league.teams', {
			url: '/teams',
			templateUrl: '../dist/tpl/teams.tpl.html',
			controller: 'teamsCtrl',
			controllerAs: 'teams'
		})
		.state('league.fixtures', {
			url: '/fixtures/:matchday',
			templateUrl: '../dist/tpl/fixtures.tpl.html',
			controller: 'fixturesCtrl',
			controllerAs: 'fixtures'
		})
		.state('cup', {
			url: '/cup/:cupId',
			templateUrl: '../dist/tpl/cup.tpl.html',
			controller: 'cupCtrl',
			controllerAs: 'cup'
		})
		.state('cup.table', {
			url: '/table',
			templateUrl: '../dist/tpl/table.tpl.html',
			controller: 'tableCtrl',
			controllerAs: 'table'
		})
		.state('cup.teams', {
			url: '/teams',
			templateUrl: '../dist/tpl/teams.tpl.html',
			controller: 'teamsCtrl',
			controllerAs: 'teams'
		})
		.state('cup.fixtures', {
			url: '/fixtures/:matchday',
			templateUrl: '../dist/tpl/fixtures.tpl.html',
			controller: 'fixturesCtrl',
			controllerAs: 'fixtures'
		})
		.state('team-details', {
			url: '/team-details/:teamId',
			templateUrl: '../dist/tpl/team-details.tpl.html',
			controller: 'teamDetailsCtrl',
			controllerAs: 'details'
		})
		.state('team-details.overviews', {
			url: '/overviews',
			templateUrl: '../dist/tpl/team-overviews.tpl.html',
			controller: 'teamOverviewsCtrl',
			controllerAs: 'overviews'
		})
		.state('team-details.roster', {
			url: '/roster',
			templateUrl: '../dist/tpl/team-roster.tpl.html',
			controller: 'teamRosterCtrl',
			controllerAs: 'roster'
		})
		.state('team-details.fixtures', {
			url: '/fixtures',
			templateUrl: '../dist/tpl/team-fixtures.tpl.html',
			controller: 'teamFixturesCtrl',
			controllerAs: 'teamFixtures'
		});
}

soccerTrackerRouter.$inject = ['$stateProvider', '$urlRouterProvider'];