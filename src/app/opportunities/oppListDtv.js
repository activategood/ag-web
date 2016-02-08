'use strict';

angular.module('app').directive('agOppList', agOppList);

function agOppList () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'opportunities/oppList',
		scope: {
			opps: '='
		}
	}
}