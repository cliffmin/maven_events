'use strict';

angular.module('mavenApp')
    .controller('MainCtrl', function ($scope) {
        $scope.events = [
            {
                date: "12/5/14",
                time: "12:45",
                id: 1,
                type: "Power Failure",
                tags: "Solar, Power",
                description: "During this time there was a 5 min power outage."
            },
            {

                date: "12/5/14",
                time: "23:00",
                id: 2,
                type: "Power Failure",
                tags: "Fuse, Power",
                description: "A fuse was blown, ending with a 2 day black out."
            },
            {

                date: "12/5/14",
                time: "21:00",
                id: 3,
                type: "Signal Lost",
                tags: "Signal",
                description: "Entered a magnetic field, preventing signal transmission."
            },
            {

                date: "12/5/14",
                time: "03:00",
                id: 4,
                type: "Weak Signal",
                tags: "Signal",
                description: "An asteroid prevented a strong signal reading."
            },
            {

                date: "12/5/14",
                time: "03:00",
                id: 4,
                type: "Unknown",
                tags: "Unknown",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut."
            },
            {

                date: "12/5/14",
                time: "03:00",
                id: 4,
                type: "Unknown",
                tags: "Unknown",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut."
            }
//            {
//
//                time: "03:00",
//                id: 4,
//                type: "Weak Signal",
//                tags: "Signal",
//                description: "An asteroid prevented a strong signal reading."
//            },
//            {
//
//                time: "03:00",
//                id: 4,
//                type: "Weak Signal",
//                tags: "Signal",
//                description: "An asteroid prevented a strong signal reading."
//            },
//            {
//
//                time: "03:00",
//                id: 4,
//                type: "Weak Signal",
//                tags: "Signal",
//                description: "An asteroid prevented a strong signal reading."
//            }
        ];
    });
