(function (angular, _) {

	'use strict';

	angular.module('app').controller('signupPageController', signupPageController);

	/* ngInject */
	function signupPageController ($scope, $stateParams, $http) {

		$http.get('data/opportunities.json').then(function (response) {
			var opps = response.data;
			$scope.opp = _.findWhere(opps, {id: $stateParams.id});
		})

	}

})(angular, _);