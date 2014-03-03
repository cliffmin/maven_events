'use strict';

angular.module('mavenApp')
    .controller('MainCtrl', function ($scope) {
        $scope.events = [
            {
                "description": "test description",
                "end_time": "Wed, 19 Feb 2014 22:43:28 GMT",
                "event_number": 1,
                "is_discrete": false,
                "orbit_numbers": [
                    1234
                ],
                "source": "test source",
                "start_time": "Wed, 19 Feb 2014 22:42:58 GMT",
                "tags": [
                    "test tag"
                ],
                "type": "SOP"
            },
            {
                "description": "test description",
                "end_time": "Wed, 20 Feb 2014 22:44:03 GMT",
                "event_number": 2,
                "is_discrete": true,
                "orbit_numbers": [
                   3456
                ],
                "source": "test source",
                "start_time": "Wed, 20 Feb 2014 22:43:33 GMT",
                "tags": [
                    "test tag"
                ],
                "type": "AOP"
            },
            {
                "description": "test description",
                "end_time": "Wed, 21 Feb 2014 22:44:03 GMT",
                "event_number": 3,
                "is_discrete": false,
                "orbit_numbers": [
                   9808
                ],
                "source": "test source",
                "start_time": "Wed, 21 Feb 2014 22:43:33 GMT",
                "tags": [
                    "test tag1", "test tag 2", "test tag 3"
                ],
                "type": "ITR"

            },
            {
                "description": "test description",
                "end_time": "Wed, 22 Feb 2014 22:44:03 GMT",
                "event_number": 4,
                "is_discrete": false,
                "orbit_numbers": [
                    1234
                ],
                "source": "test source",
                "start_time": "Wed, 22 Feb 2014 22:43:33 GMT",
                "tags": [
                    "test tag"
                ],
                "type": "LTRA"
            }
        ];
        $scope.sortOrder = 'event_number';
    });
