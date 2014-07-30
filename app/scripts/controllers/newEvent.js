/**
 *
 * Created by myself on 2/5/14.
 */
'use strict';

angular.module('mavenApp')
    .controller('NewEventCtrl', function ($scope, $location, $http) {
        $scope.login = {
            "firstName": "Johnathon",
            "lastName": "Johnson"
        };
        $scope.addEvent = function (event, login) {
            event = JSON.stringify(event)
            event.source = event.source + ' Person name:' + login.firstName + ' ' + login.lastName;
            alert(event);//need to verify data
            $location.path("/show/" + event.event_number);//need to add a success flag upon saving to the database
            $http({
                method: 'POST',
                url: 'http://winp179:40080/maven-events/api/v1/events',
                data: event,  // pass in data as strings
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
                .success(function (data) {
                    console.log(data);

                    if (!data.success) {
                        // if not successful, bind errors to error variables
                        $scope.errorName = data.errors.name;
                        $scope.errorSuperhero = data.errors.superheroAlias;
                        alert("error");
                    } else {
                        // if successful, bind success message to message
                        $scope.message = data.message;
                        alert("success");
                    }
                });
        }
    });
