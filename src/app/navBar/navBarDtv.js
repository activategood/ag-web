'use strict';

angular.module('app').directive('agNavBar', agNavBar);

function agNavBar () {
	return {
		restrict: 'E',
		templateUrl: 'navBar/navBar'
	}
}