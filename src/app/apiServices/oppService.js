'use strict';

angular.module('app').factory('oppService', oppService);

/* ngInject */
oppService.$inject = ['$resource','mockData','API_URL','API_BASE'];
function oppService ($resource, mockData, API_URL, API_BASE) {

	var OPPS_ALL = API_URL + API_BASE + 'opportunities';

	var lastEvaluatedKey = null;
	var Opp = $resource(OPPS_ALL);

	return {
		more: more,
		getAll: getAll,
	};

	function query (callback) {
		Opp.query().$promise.then(function (resource) {
			lastEvaluatedKey = resource.LastEvaluatedKey;
			callback(resource.Items);
		});
	}

	function more (callback) {
		// Opp = $resource(OPPS_ALL, {start: lastEvaluatedKey});
		// query(callback);
		callback(mockData.opportunities);
	}

	function getAll (callback) {
		mockGetAll(callback);
		// Opp = $resource(OPPS_ALL);
		// query(callback);
	}

	function mockGetAll (callback) {
		callback(mockData.opportunities);
	}
}