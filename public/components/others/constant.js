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
				link: '.standings',
				label: 'Standings'
			},
			{
				link: '.teams',
				label: 'Teams'
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
				label: 'Roster'
			},
			{
				link: 'fixtures',
				label: 'Fixtures'
			}
		]);
})();