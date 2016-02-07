'use strict';

angular.module('app').directive('agOppList', agOppList);

function agOppList () {
	return {
		restrict: 'E',
		templateUrl: 'opportunities/oppList',
		scope: {
			opps: '='
		}
	}
}