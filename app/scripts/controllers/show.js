/**
 *
 * Created by myself on 3/6/14.
 */

angular.module('mavenApp')
    .controller('ShowCtrl', function ($scope, tempBackend, $route, $routeParams) {
        $scope.params = $routeParams;
        $scope.data = tempBackend.getData();
        $scope.event = $scope.data[$routeParams.eventId - 1]
    });


