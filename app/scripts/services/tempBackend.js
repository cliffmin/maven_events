/**
 *
 * Created by myself on 3/6/14.
 */



angular.module('mavenApp')
    .service('tempBackend', function () {
        var data = [
            {
                'description': 'test description looooooooooooo and loooooong loooooong and lonooooooonger asdflkasdfsa fasd fas dfas df as df sa dfsadfa sdf sa df',
                'end_time': 'Wed, 19 Feb 2014 22:43:28 GMT',
                'event_number': 1,
                'is_discrete': false,
                'orbit_numbers': [
                    1234
                ],
                'source': 'test source',
                'start_time': 'Wed, 19 Feb 2014 22:42:58 GMT',
                'tags': [
                    'test tag'
                ],
                'type': 'SOP'
            },
            {
                'description': 'test description',
                'end_time': 'Wed, 20 Feb 2014 22:44:03 GMT',
                'event_number': 2,
                'is_discrete': true,
                'orbit_numbers': [
                    3456
                ],
                'source': 'test source',
                'start_time': 'Wed, 20 Feb 2014 22:43:33 GMT',
                'tags': [
                    'test tag'
                ],
                'type': 'AOP'
            },
            {
                'description': 'test description',
                'end_time': 'Wed, 21 Feb 2014 22:44:03 GMT',
                'event_number': 3,
                'is_discrete': false,
                'orbit_numbers': [
                    9808
                ],
                'source': 'test source',
                'start_time': 'Wed, 21 Feb 2014 22:43:33 GMT',
                'tags': [
                    'test tag1', 'test tag 2', 'test tag 3'
                ],
                'type': 'ITR'

            },
            {
                'description': 'test description',
                'end_time': 'Wed, 22 Feb 2014 22:44:03 GMT',
                'event_number': 4,
                'is_discrete': false,
                'orbit_numbers': [
                    1234
                ],
                'source': 'test source',
                'start_time': 'Wed, 22 Feb 2014 22:43:33 GMT',
                'tags': [
                    'test tag'
                ],
                'type': 'LTRA'
            },
            {
                'description': 'test description',
                'end_time': 'Wed, 22 Feb 2014 22:44:03 GMT',
                'event_number': 5,
                'is_discrete': false,
                'orbit_numbers': [
                    1234
                ],
                'source': 'test source',
                'start_time': 'Wed, 22 Feb 2014 22:43:33 GMT',
                'tags': [
                    'test tag'
                ],
                'type': 'LTRA'
            },
            {
                'description': 'test description',
                'end_time': 'Wed, 22 Feb 2014 22:44:03 GMT',
                'event_number': 6,
                'is_discrete': false,
                'orbit_numbers': [
                    1234
                ],
                'source': 'test source',
                'start_time': 'Wed, 22 Feb 2014 22:43:33 GMT',
                'tags': [
                    'test tag'
                ],
                'type': 'LTRA'
            },
            {
                'description': 'test description',
                'end_time': 'Wed, 22 Feb 2014 22:44:03 GMT',
                'event_number': 7,
                'is_discrete': false,
                'orbit_numbers': [
                    1234
                ],
                'source': 'test source',
                'start_time': 'Wed, 22 Feb 2014 22:43:33 GMT',
                'tags': [
                    'test tag'
                ],
                'type': 'ioio'
            },
            {
                'description': 'test description',
                'end_time': 'Wed, 22 Feb 2014 22:44:03 GMT',
                'event_number': 8,
                'is_discrete': false,
                'orbit_numbers': [
                    1234
                ],
                'source': 'test source',
                'start_time': 'Wed, 22 Feb 2014 22:43:33 GMT',
                'tags': [
                    'test tag'
                ],
                'type': 'YTUO'
            },
            {
                'description': 'test description',
                'end_time': 'Wed, 22 Feb 2014 22:44:03 GMT',
                'event_number': 9,
                'is_discrete': false,
                'orbit_numbers': [
                    1234
                ],
                'source': 'test source',
                'start_time': 'Wed, 22 Feb 2014 22:43:33 GMT',
                'tags': [
                    'test tag'
                ],
                'type': 'WERT'
            },
            {
                'description': 'test description',
                'end_time': 'Wed, 22 Feb 2014 22:44:03 GMT',
                'event_number': 10,
                'is_discrete': false,
                'orbit_numbers': [
                    9000
                ],
                'source': 'test source',
                'start_time': 'Wed, 22 Feb 2014 22:43:33 GMT',
                'tags': [
                    'test tag'
                ],
                'type': 'LTRA'
            },
            {
                'description': 'test description',
                'end_time': 'Wed, 22 Feb 2014 22:44:03 GMT',
                'event_number': 11,
                'is_discrete': false,
                'orbit_numbers': [
                    1234
                ],
                'source': 'test source',
                'start_time': 'Wed, 22 Feb 2014 22:43:33 GMT',
                'tags': [
                    'test tag'
                ],
                'type': 'JKLH'
            },
            {
                'description': 'test description',
                'end_time': 'Wed, 22 Feb 2014 22:44:03 GMT',
                'event_number': 10,
                'is_discrete': false,
                'orbit_numbers': [
                    9000
                ],
                'source': 'test source',
                'start_time': 'Wed, 22 Feb 2014 22:43:33 GMT',
                'tags': [
                    'test tag'
                ],
                'type': 'LTRA'
            },
            {
                'description': 'test description',
                'end_time': 'Wed, 22 Feb 2014 22:44:03 GMT',
                'event_number': 10,
                'is_discrete': false,
                'orbit_numbers': [
                    9000
                ],
                'source': 'test source',
                'start_time': 'Wed, 22 Feb 2014 22:43:33 GMT',
                'tags': [
                    'test tag'
                ],
                'type': 'LTRA'
            },
            {
                'description': 'test description',
                'end_time': 'Wed, 22 Feb 2014 22:44:03 GMT',
                'event_number': 10,
                'is_discrete': false,
                'orbit_numbers': [
                    9000
                ],
                'source': 'test source',
                'start_time': 'Wed, 22 Feb 2014 22:43:33 GMT',
                'tags': [
                    'test tag'
                ],
                'type': 'LTRA'
            },
            {
                'description': 'test description alskjdflksa fsa dlkfjas lkdfjlaskjdf ;laskjdf asdfjlksajdf alsdkjfklsa jdflasdjfkl;asj dflasjd;flkajsd',
                'end_time': 'Wed, 22 Feb 2014 22:44:03 GMT',
                'event_number': 10,
                'is_discrete': false,
                'orbit_numbers': [
                    9000
                ],
                'source': 'test source',
                'start_time': 'Wed, 22 Feb 2014 22:43:33 GMT',
                'tags': [
                    'test tag'
                ],
                'type': 'LTRA'
            }
        ];
        return {
            getData: function () {
                return data;
            },
            setData: function(value) {
                data = value;
            }
        }
    });
