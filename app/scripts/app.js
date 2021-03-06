'use strict';

angular.module("mavenApp", [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngTagsInput', 
        'ngTable',
        'truncate'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/input', {
                templateUrl: 'views/newEvent.html',
                controller: 'NewEventCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'MainCtrl'
            })
            .when('/show/:eventId', {
                templateUrl: 'views/show.html',
                controller: 'ShowCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
