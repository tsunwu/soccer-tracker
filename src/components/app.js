import CupController from './cup/cup.controller';
import FixturesController from './fixtures/fixtures.controller';
import HeaderController from './header/header.controller';
import HomeController from './home/home.controller';
import LeagueController from './league/league.controller';
import StandingsController from './league/standings.controller';
import TableController from './cup/table.controller';
import TeamDetailsController from './team-details/team-details.controller';
import TeamOverviewsController from './team-details/team-overviews.controller';
import TeamRosterController from './team-details/team-roster.controller';
import TeamsController from './teams/teams.controller';

import GameInfoDirective from './fixtures/game-info.directive';
import httpFactory from './others/http.factory';
import CommonFunction from './others/common-functions';
import soccerTrackerRouter from './routes';

import {
  CupTabList,
  LeagueTableList,
  NoTableMessage,
  PageList,
  Regions,
  SquadNotAvailable,
  TeamDetailsTabList
} from './others/constant';

angular
    .module('soccerTracker', ['ui.router', 'ui.bootstrap', 'angular-momentjs'])
    .controller('cupCtrl', CupController)
    .controller('fixturesCtrl', FixturesController)
    .controller('headerCtrl', HeaderController)
    .controller('homeCtrl', HomeController)
    .controller('leagueCtrl', LeagueController)
    .controller('standingsCtrl', StandingsController)
    .controller('tableCtrl', TableController)
    .controller('teamDetailsCtrl', TeamDetailsController)
    .controller('teamOverviewsCtrl', TeamOverviewsController)
    .controller('teamRosterCtrl', TeamRosterController)
    .controller('teamsCtrl', TeamsController)
    .config(soccerTrackerRouter)
    .directive('gameInfo', () => new GameInfoDirective())
    .factory('commonFunc', CommonFunction)
    .factory('http', httpFactory)
    .constant('_', window._)
    .constant('cupTabList', CupTabList)
    .constant('leagueTabList', LeagueTableList)
    .constant('noTableMessage', NoTableMessage)
    .constant('pageList', PageList)
    .constant('regions', Regions)
    .constant('squadNotAvailable', SquadNotAvailable)
    .constant('teamDetailsTabList', TeamDetailsTabList);