'use strict';

angular.module('app').controller('oppListPageController', oppListPageController);

/* ngInject */
function oppListPageController ($scope, oppService) {

	$scope.nextPage = function () {
		console.log('nextPage called');
		
		oppService.more(function (opps) {
			$scope.opps.push(opps);
		})
	}

	oppService.getAll(function(opps){
		$scope.opps = opps;
	});
}