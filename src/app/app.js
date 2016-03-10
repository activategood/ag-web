'use strict';

// Create app module with dependencies
var app = angular.module('app', [
	'ui.router',
	'angular-jwt',
	'toastr',
	'templates',
	'ngAnimate',
	'ngResource',
	'infinite-scroll'
]);

// Constants
app.constant('API_URL', 'https://jq4efubjbd.execute-api.us-east-1.amazonaws.com');
app.constant('API_BASE', '/test/');

// Configure app state and location providers
app.config(states);
app.config(locations);

function states ($stateProvider) {

	$stateProvider
		.state('home', {
			url: '/',
			controller: 'oppListPageController',
			templateUrl: 'pages/oppList/oppListPage'
		})
		.state('opps', {
			url: '/opportunities',
			controller: 'oppListPageController',
			templateUrl: 'pages/oppList/oppListPage'
		})
		.state('nonprofit', {
			url: '/nonprofits/:id',
			controller: 'signupPageController',
			templateUrl: 'pages/signup/signupPage'
		})
		.state('signup', {
			url: '/opportunities/:id',
			controller: 'signupPageController',
			templateUrl: 'pages/signup/signupPage'
		});
}

function locations ($locationProvider) {
	$locationProvider.html5Mode(true);
}