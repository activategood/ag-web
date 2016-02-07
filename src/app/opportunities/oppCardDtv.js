'use strict';

angular.module('app').directive('agOppCard', agOppCard);

function agOppCard () {
	return {
		restrict: 'E',
		scope: {
			opp: '='
		},
		templateUrl: 'opportunities/oppCard'
	}
}