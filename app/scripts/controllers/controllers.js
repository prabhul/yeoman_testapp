'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http) {
  var promise = $http.get('phones/phones.json');
  promise.success(function(data){
    $scope.phones = data;
  });
  $scope.name = 'World';
  $scope.orderProp = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){

  $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data){
    $scope.phone = data;
    console.log('$scope.phone = ', $scope.phone);
    $scope.mainImageUrl = data.images[0];
  });

  $scope.setImage = function(img){
    $scope.mainImageUrl = img;
  };

  $scope.phoneId = $routeParams.phoneId;
  console.log('outside success $scope.phone = ', $scope.phone);
}]);