/**
 *
 * Created by myself on 3/6/14.
 */

angular.module('mavenApp')
    .controller('ShowCtrl', function ($scope, tempBackend, $route, $routeParams, eventData) {
        eventData.getEvent().then(
            function (event) {
                $scope.events = event.events;
                $scope.event = $scope.events[$routeParams.eventId - 1]
            },
            function (statusCode) {
                console.log(statusCode);
            });
        $scope.addSuccessSwitch = true;
        $scope.params = $routeParams;
    });


