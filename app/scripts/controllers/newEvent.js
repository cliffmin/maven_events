/**
 *
 * Created by myself on 2/5/14.
 */
'use strict';

angular.module('mavenApp')
    .controller('NewEventCtrl', function ($scope) {
        $scope.login = {
            "firstName": "Johnathon",
            "lastName": "Johnson"
        };
        $scope.addEvent = function (event, login) {
            event.firstName = login.firstName;
            event.lastName = login.lastName;
            alert(JSON.stringify(event));
        }
    });
