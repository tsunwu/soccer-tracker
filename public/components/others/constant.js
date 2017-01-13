(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.constant('pageList', [
				{
					title: 'Leagues',
					pageNmae: 'leagues'
				}
		])
		.constant('leagueTabList', [
			{
				link: 'standings',
				label: 'Standings'
			},
			{
				link: 'teams',
				label: 'Teams'
			},
			{
				link: 'fixtures',
				label: 'Fixtures'
			}
		])
		.constant('cupTabList', [
			{
				link: '.table',
				label: 'Table'
			},
			{
				link: '.teams',
				label: 'Teams'
			}
		])
		.constant('teamDetailsTabList', [
			{
				link: '.overviews',
				label: 'Overviews'
			},
			{
				link: '.roster',
				label: 'Squad'
			},
			{
				link: 'fixtures',
				label: 'Fixtures'
			}
		])
		.constant('noTableMessage', 'This competition does not has table or standings.')
		.constant('squadNotAvailable', 'Squad list is not available.');
})();