'use strict';

angular.module('app').directive('agShiftCard', agShiftCard);

function agShiftCard () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			opp: '=',
		},
		templateUrl: 'directives/opportunities/shiftCard/shiftCard',
		link: function (scope, elem, attrs) {

		}
	}
}