'use strict';

angular.module('app').directive('agNavBar', agNavBar);

function agNavBar () {
	return {
		restrict: 'E',
		templateUrl: 'navBar/navBar',
		link: function(scope) {

			scope.searchVisible = false;
			scope.toggleSearch = toggleSearch;

			function toggleSearch () {
				scope.searchVisible = !scope.searchVisible;
			}

		}
	}
}