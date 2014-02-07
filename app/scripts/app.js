"use strict";

angular.module('mavenApp', [
        "ngCookies",
        "ngResource",
        "ngSanitize",
        "ngRoute"
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/input', {
                templateUrl: 'views/input.html',
                controller: 'InputCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
