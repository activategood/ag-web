(function (angular) {

	'use strict';

	angular.module('app').factory('session', session);

	/* ngInject */
	function session () {

		return {
			user: null
		};

	}

})(angular);