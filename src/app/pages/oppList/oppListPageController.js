'use strict';

angular.module('app').controller('oppListPageController', oppListPageController);

/* ngInject */
function oppListPageController ($scope, oppService) {

	var oppCount = 0;
	$scope.opps = [];

	$scope.nextPage = function () {
		oppService.more(function (opps) {
			setImageUrl(opps);
			$scope.opps = $scope.opps.concat(opps);
		})
	}

	oppService.getAll(function (opps) {
		setImageUrl(opps);
		$scope.opps = $scope.opps.concat(opps);
	});

	function setImageUrl(opps) {
		opps.map(function (opp) {
			oppCount++;
			opp.id = oppCount;
			opp.image.url = "http://unsplash.it/600/400/?random=" + oppCount
		});
	}

}