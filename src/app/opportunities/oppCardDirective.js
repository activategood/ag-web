'use strict';

angular.module('app').directive('agOppCard', agOppCard);

function agOppCard () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			opp: '='
		},
		templateUrl: 'opportunities/oppCard'
	}
}