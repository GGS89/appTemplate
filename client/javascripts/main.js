angular.module('Main', [])
  .controller('MainController', function($scope, $http) {

    $scope.sendHTTP = function(){
     $http.get('/name').
       success(function(data, status, headers, config) {
         $scope.data = data;
       }).
       error(function(data, status, headers, config) {
         $scope.data = data;
       });
    }

  });