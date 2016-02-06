(function () {

    'use strict';
     
    // Create app module with dependencies
    var app = angular.module('app', [
        'ui.router',
        'angular-jwt',
        'toastr'
    ]);

    // Configure app state and location providers
    app.config(states);
    app.config(locations);

    /**
     * States
     */
    states.$inject = ['$stateProvider'];
    function states ($stateProvider) {
    
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'opportunities/opportunities.html',
            });

    }

    /**
     * Locations
     */
    locations.$inject = ['$locationProvider'];
    function locations ($locationProvider) {
        $locationProvider.html5Mode(true);
    }

})();