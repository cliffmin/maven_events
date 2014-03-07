'use strict';

angular.module("mavenApp")
    .controller("MainCtrl", function ($scope,  $filter, ngTableParams, tempBackend) {

        var data = tempBackend.getData();//calling our data provider

        $scope.events = data;
$scope.tableParams = new ngTableParams({
            page: 1,            // show first page
            count: 10,          // count per page
            sorting: {
                name: 'event_number'     // initial sorting
            }
        }, {
            total: data.length, // length of data
            getData: function($defer, params) {
                // use build-in angular filter
                var orderedData = params.sorting() ?
                    $filter('orderBy')(data, params.orderBy()) :
                    data;

                $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            }
        });
        $scope.submitFeedback = function(feedback){
            alert(JSON.stringify(feedback))
        };
    });
