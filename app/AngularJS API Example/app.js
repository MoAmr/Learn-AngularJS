var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.a1 = "mohammed";
    $scope.b1 = "MOHAMMED";
    $scope.a2 = angular.$$uppercase($scope.a1);
    $scope.b2 = angular.$$lowercase($scope.b1);
    $scope.c1 = angular.isString($scope.a1);
    $scope.c2 = angular.isNumber($scope.a1);
});