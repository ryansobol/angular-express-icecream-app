var app = angular.module('icecreamApp', ['ngRoute']);

app.controller("HomeController", ["$scope", "$http", function($scope, $http){
  $scope.addIcecream = function(icecream) {
    console.log(icecream);
    $http.post('/api/icecreams', icecream);
  };

  $http.get('/api/icecreams').then(function(data){
    console.log(data);
    $scope.icecreams = data.data;
  });
}]);

app.config(["$routeProvider", function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/icecreams/index.html',
      controller: 'HomeController'
    });
}]);
