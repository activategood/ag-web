'use strict';

angular.module('app').controller('oppListPageCtrl', oppListPageCtrl);

function oppListPageCtrl ($scope) {
	$scope.opps = [
		{
			title: 'Poverty Toolkit Volunteer',
			abstract: 'Do you love organizing things? Want to give back to a non-profit that is fighting poverty in NC? Please help us put together participant packets for our poverty simulation toolkit. Dress comfortably and come to our office to help us prepare for our powerful poverty simulation training.',
			volunteersNeeded: 30
		},
		{
			title: 'Annual Spring Cleanup-New Hope Overlook',
			abstract: 'We\'ve selected the New Hope Overlook Access to Jordan Lake State Recreation Area for a trash cleanup following major flooding in December. The trash follows the wonderful Red Trail, a distance of several miles from Camping Area A to B.',
			volunteersNeeded: 22
		},
		{
			title: 'New Hope Creek Cleanup in Durham\'s Creek Week',
			abstract: 'This is part of the City of Durham\'s Annual Creek Week, a time to discover and clean up Durham\'s waterways. Participating organizations share a vision for Durham residents to enjoy, feel connected to, and protect local waterways. We will remove trash along the banks of New Hope Creek.',
			volunteersNeeded: 5
		},
		{
			title: 'Design/Production Consultant',
			abstract: 'Provide guidance and consultation for designing and producing multi-media curricular materials in a timely and cost-effective manner.',
			volunteersNeeded: 10
		}
	]
}