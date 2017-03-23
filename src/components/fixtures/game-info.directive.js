export default class gameInfoDirective {
  constructor() {
    this.restrict = 'E';
    this.templateUrl = './public/views/tpl/game-info.tpl.html';
    this.scope = {
      status: '=',
      date: '=',
      extra: '=',
      penalty: '='
    };
  }
}