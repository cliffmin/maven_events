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
        $scope.addEvent = function(event, login){
//            var obj1 = JSON.stringify(event);
//            var obj2 = JSON.stringify(login);
//            var myString = obj1.concat(obj2);
            var myString = getDate(event.endDate);
            alert(myString);

        }
    });
