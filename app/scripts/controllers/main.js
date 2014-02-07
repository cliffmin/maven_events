'use strict';

angular.module('mavenApp')
    .controller('MainCtrl', function ($scope) {
        $scope.events = [
            {

                time: "12:45",
                id: 1,
                type: "Power Failure",
                tags: "Solar, Power",
                description: "During this time there was a 5 min power outage."
            },
            {

                time: "23:00",
                id: 2,
                type: "Power Failure",
                tags: "Fuse, Power",
                description: "A fuse was blown, ending with a 2 day black out."
            },
            {

                time: "21:00",
                id: 3,
                type: "Signal Lost",
                tags: "Signal",
                description: "Entered a magnetic field, preventing signal transmission."
            },
            {

                time: "03:00",
                id: 4,
                type: "Weak Signal",
                tags: "Signal",
                description: "An asteroid prevented a strong signal reading."
            }
        ];
    });
