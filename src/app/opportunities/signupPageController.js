'use strict';

angular.module('app').controller('signupPageController', signupPageController);

/* ngInject */
function signupPageController ($scope, $stateParams, oppService) {
	console.log('ping');
	oppService.getOne($stateParams.id, function(opp){
		$scope.opp = opp;
	});

}