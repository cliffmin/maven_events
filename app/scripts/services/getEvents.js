angular.module("mavenApp")
.factory('eventData', function($http, $q){
        return {
           getEvent: function(){
               var deferred = $q.defer();

               $http({method: 'GET', url: 'http://winp179:40080/maven-events/api/v1/events'}).
                   success(function(data, status, headers, config){
                  deferred.resolve(data);
               }).
               error(function(data, status, headers, config){
                 deferred.reject(status);
               });
               return deferred.promise;
            }
        }
    });