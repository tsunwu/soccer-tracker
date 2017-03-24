export default class GameInfoDirective {
  constructor() {
    this.restrict = 'E';
    this.templateUrl = './dist/tpl/game-info.tpl.html';
    this.scope = {
      status: '=',
      date: '=',
      extra: '=',
      penalty: '='
    };
  }
}