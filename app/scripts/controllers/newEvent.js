/**
 *
 * Created by myself on 2/5/14.
 */
'use strict';

angular.module('mavenApp')
    .controller('NewEventCtrl', function ($scope, $location) {
        $scope.login = {
            "firstName": "Johnathon",
            "lastName": "Johnson"
        };
        $scope.addEvent = function (event, login) {
            event.source = event.source + ' Person name:' + login.firstName +' '+login.lastName;
            alert(JSON.stringify(event));//need to verify data
            $location.path("/show/"+event.event_number);//need to add a success flag upon saving to the database
        }
    });
