'use strict';

angular.module('app').directive('agOppCard', agOppCard);

function agOppCard () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			opp: '=',
		},
		templateUrl: 'opportunities/oppCard',
		link: function (scope, elem, attrs) {

		    attrs.$observe('link', function() {
		        scope.showLink = scope.$eval(attrs.link);
		    });

		}
	}
}