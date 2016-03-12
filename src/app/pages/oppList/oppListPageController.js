'use strict';

angular.module('app').controller('oppListPageController', oppListPageController);

/* ngInject */
function oppListPageController ($scope, $http) {

	var oppCount = 0;
	$scope.opps = [];
	refreshOpps();

	$scope.nextPage = refreshOpps;

	function refreshOpps () {
		$http.get('data/opportunities.json').then(function (response) {
			var opps = response.data;
			setImageUrl(opps);
			$scope.opps = $scope.opps.concat(opps);
		});
	}

	function setImageUrl(opps) {
		opps.map(function (opp) {
			oppCount++;
			opp.id = oppCount;
			opp.image.url = "http://unsplash.it/600/400/?random=" + oppCount
		});
	}

}