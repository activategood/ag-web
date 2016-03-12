'use strict';

angular.module('app').controller('signupPageController', signupPageController);

/* ngInject */
function signupPageController ($scope, $stateParams, $http) {

	$http.get('data/opportunities.json').then(function (response) {
		var opps = response.data;
		for (var ndx = 0; ndx < opps.length; ndx++) {
			if (opps[ndx].id === $stateParams.id) {
				$scope.opp = opps[ndx];
				break;
			}
		}
	})

}