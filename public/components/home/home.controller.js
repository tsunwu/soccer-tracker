(function() {
	'use strict';
	
	angular
		.module('soccerTracker')
		.controller('homeCtrl', HomeController);
	
	HomeController.$inject = [];
	
	function HomeController() {
		var vm = this;
		
		vm.message = 'this is the home page.';
	}
})();