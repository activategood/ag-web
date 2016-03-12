(function (angular) {

	'use strict';

	angular.module('app').directive('agLoginButtons', agLoginButtons);

	/* ngInject */
	function agLoginButtons (session) {
		return {
			restrict: 'E',
			templateUrl: 'directives/common/login/loginButtons',
			link: function(scope) {

				scope.session = session;

				scope.login = function() {										
		 			session.user = {
		 				firstName: 'Keith',
		 				lastName: 'Morris',
		 				email: 'keith@activategood.org'
		 			}
				}

				scope.logout = function() {
					session.user = null;
				}

			}
		}
	}

})(angular);