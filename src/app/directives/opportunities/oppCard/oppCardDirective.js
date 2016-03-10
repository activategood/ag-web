'use strict';

angular.module('app').directive('agOppCard', agOppCard);

function agOppCard () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			opp: '=',
		},
		templateUrl: 'directives/opportunities/oppCard/oppCard'
		// link: function (scope, elem, attrs) {

		// 	if (attrs.hide && attrs.show)
		// 		throw ("Attributes hide and show are mutually exclusive.")

		// 	var hide, show = null;

		// 	if (attrs.hide) hide = attrs.hide.split(" ");
		// 	if (attrs.show) show = attrs.show.split(" ");

		// 	scope.shown = shown;

		// 	function shown (val) {

		// 		if (hide) {
		// 			return (hide.indexOf(val) === -1);
		// 		} else if (show) {
		// 			return (show.indexOf(val) !== -1);	
		// 		} else {
		// 			return true;
		// 		}
			 	
		// 	}

		// }
	}
}