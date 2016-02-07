'use strict';

// Create app module with dependencies
var app = angular.module('app', [
	'ui.router',
	'angular-jwt',
	'toastr',
	'templates'
]);

// Configure app state and location providers
app.config(states);
app.config(locations);

function states ($stateProvider) {

	$stateProvider
		.state('home', {
			url: '/',
			controller: 'oppListPageCtrl',
			templateUrl: 'opportunities/oppListPage'
		})
		.state('opps', {
			url: '/opportunities',
			controller: 'oppListPageCtrl',
			templateUrl: 'opportunities/oppListPage'
		});

}

function locations ($locationProvider) {
	$locationProvider.html5Mode(true);
}